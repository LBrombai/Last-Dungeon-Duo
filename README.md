# Last Dungeon · M0 Fundação

Projeto novo, criado do zero exclusivamente para o M0. React 19, Vite,
JavaScript, Three.js, React Three Fiber, Zustand, Vitest, Biome e Commitizen.
Não há movimento, mapas, combate, atributos calculados ou salvamento.

## Executar

Use Node **22.22.3**, registrado em `.nvmrc` e `package.json`.

```sh
npm ci
npm run dev
```

No PowerShell, se a execução de `npm.ps1` estiver bloqueada, use `npm.cmd`.
Abra o endereço exibido pelo Vite. Para validar produção:

```sh
npm run lint
npm run test
npm run build
npm run preview
```

`npm install` também instala o projeto; `npm ci` reproduz o lockfile.
`npm run test:watch` acompanha os testes; `npm run format` aplica formatação
e correções seguras. Nenhum ESLint ou Prettier está instalado.

## Camadas

- `src/data`: objetos de classes e configuração; `index.js` reexporta os dados.
- `src/game`: estado, ações, reducer, seletores e RNG em JavaScript puro.
- `src/store`: Zustand; conecta as regras à interface por `dispatch`.
- `src/ui`: telas, componentes React e CSS.
- `src/scene`: teste mínimo do Three.js, isolado da interface.
- `src/game/systems` e `src/assets`: reservados, com `.gitkeep` para Git.
- `src/App.jsx`: compõe telas e cena; escolhe a tela pelo `uiStore`.

Dependências: `game → data`; `store → game/data`; `ui → store/data` e
somente ações/seletores de `game`; `scene → store/data` e somente seletores
de `game`. Dados não importam outras camadas. Biome verifica as restrições
de importação, incluindo subcaminhos de React e Three.js.

O estado do jogo começa em `null`. `game/started` cria o formato completo,
`game/reset` retorna a `null`, `clock/advanced` soma uma quantidade finita
não negativa; ações desconhecidas preservam a referência. O reducer não
usa relógio real nem aleatoriedade global. Semente e data chegam na ação.
A interface aceita sementes inteiras não negativas seguras; campo vazio
usa `Date.now()`. `createdAt` é texto ISO. RNG Mulberry32 retorna valor em
`[0, 1)` e o próximo estado inteiro, inclusive para semente zero.

Tela atual fica no `uiStore`, fora do estado serializável do jogo.
Cidade e Expedição são apenas telas provisórias; navegar para Expedição
não cria dados de expedição. Continuar permanece desativado até M7.

## Formatos reservados

Implementar somente nos marcos correspondentes:

- Personagem (M2): `id, name, classId, level, xp, hp, maxHp, stress, fatigue,
  conditions[], equipment`.
- Círculo (M5): `id, floor, status` (`inactive`, `active`, `taken`).
- Expedição (M1/M5): `floor, x, y, facing, light, food, noise, inventory[]`.

Os quatro dados provisórios são Guerreiro, Ladino, Mago e Clérigo, conforme
o documento técnico. A proposta de três classes no plano geral não substitui
esse requisito específico do M0.

## Controles

Menu: ↑/↓ escolhem uma opção habilitada, Enter confirma, passar o mouse
seleciona e clicar confirma. A seleção tem o mesmo destaque visual.
Escape volta ao menu nas telas provisórias. Novo jogo leva à Cidade;
Avançar relógio soma um; Expedição mostra um plano iluminado de cor sólida.

## Trabalho em dupla e GitHub

Use branches curtos `m0/<assunto>`, commits pequenos e `npm run commit` para
mensagens Conventional Commits em inglês. Escopos: `game`, `data`, `store`,
`ui`, `scene`; configurações gerais podem ficar sem escopo. Não mescle sem
revisão do outro desenvolvedor. A main deve passar lint, testes e build.

`.github/workflows/ci.yml` executa `npm ci`, `biome ci`, testes e build em
pull requests e pushes na main. Actions checkout/setup-node v7 foram
confirmadas nos repositórios oficiais. O workflow não configura proteção
de branch sozinho.

Quando houver um novo repositório remoto, publique por PR e configure uma
regra para main: exigir pull request, uma aprovação e o status `check`;
impedir bypass para garantir bloqueio quando CI falhar. Confirme isso com
um PR propositalmente falho. Ambos os desenvolvedores precisam executar
o projeto na própria máquina e revisar um PR um do outro.

O repositório local reúne esta entrega em `m0/foundation`; não simula PRs
revisados, execuções no GitHub nem validações feitas por outra pessoa.

## Verificações e limitações

Veja `M0-ACCEPTANCE.md` para as 12 tarefas, os 14 critérios e evidências.
Os nomes completos dos dois desenvolvedores ainda precisam de confirmação;
os créditos deixam o segundo nome explicitamente pendente.

As dependências estão fixadas e o lockfile deve ser versionado. A auditoria
de produção passou sem vulnerabilidades. A auditoria completa aponta seis
alertas de severidade alta na cadeia de desenvolvimento do Commitizen,
originados em `braces`. A versão estável disponível é 3.0.3, ainda afetada;
não foi aplicada a sugestão de downgrade incompatível do npm.
Não são dependências incluídas no jogo distribuído.

Three.js 0.186.1 com Fiber 9.8.1 renderiza o teste sem erros; Fiber emite
um aviso de depreciação de `THREE.Clock`. O build avisa sobre o tamanho
do bundle 3D. Ambos ficam registrados para acompanhamento, sem esconder
avisos ou implementar funcionalidades de marcos seguintes.
