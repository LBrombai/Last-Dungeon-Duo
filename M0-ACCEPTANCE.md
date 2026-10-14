# M0 — tarefas e critérios de aceite

Verificação local em 13/10/2026, Node 22.22.3, Windows. Projeto criado do zero.
Fontes principais: Plano de Desenvolvimento v1.0 e Documento Técnico M0
fornecidos na conversa. O pedido do usuário limita esta entrega ao M0 e
substitui as referências dos documentos a código anterior e avanço para M1.

## 12 tarefas

1. **Local concluído:** pasta nova; Node 22.22.3, React/DOM 19.3.0,
   Vite 8.3.4, Fiber 9.8.1; versões exatas no package.json e lockfile.
2. **Concluído:** cinco camadas, pastas reservadas, Biome 2.5.15,
   Commitizen e scripts; sem ESLint. Importação React proibida comprovada.
3. **Concluído:** state, actions, reducer, selectors; testes de serialização,
   criação, relógio, reset, ação desconhecida e imutabilidade profunda.
4. **Concluído:** RNG puro com semente; sequência reproduzível, sementes
   distintas e faixa [0, 1) testadas em milhares de amostras.
5. **Concluído:** quatro classes, configuração e reexportações; teste de
   campos obrigatórios, IDs, unicidade e valores provisórios.
6. **Concluído:** gameStore com game/dispatch, uiStore com screen/goTo.
7. **Concluído:** tokens, ScreenFrame 16:9, Button, MenuList e CSS.
8. **Concluído localmente:** menu com teclado/mouse, seleção visível,
   Continuar desativado, versão originada em package.json.
9. **Parcial:** todas as telas e navegação funcionam; segundo nome nos
   créditos aguarda informação. Nenhum nome foi inventado.
10. **Concluído:** plano de material sólido e luz via Canvas; renderização
    observada tanto no dev quanto no preview, sem erros de console.
11. **Parcial:** README e checklist completos, conferência local feita;
    revisão cruzada humana permanece pendente.
12. **Parcial:** workflow configurado e seus comandos passaram localmente;
    execução no GitHub e proteção da main aguardam repositório remoto.

## 14 critérios de aceite

Os critérios abaixo foram verificados na branch local de entrega, não numa
main remota protegida. Portanto o marco ainda não tem aceite integral.

1. **Verificado localmente:** npm install e npm ci concluíram; dev abriu
   o menu. Não houve uma segunda máquina limpa independente. A primeira
   tentativa de npm ci com dev aberto esbarrou em arquivo bloqueado; após
   parar o servidor, npm ci passou.
2. **Passou localmente:** build e preview; menu observado em 127.0.0.1:4173.
3. **Passou:** npm run lint, sem erros.
4. **Passou:** probe temporário em src/game importando React falhou com
   lint/style/noRestrictedImports; removido, lint voltou a passar.
5. **Passou:** quatro arquivos Vitest, 11 testes, todos em ambiente Node.
6. **Pendente externo:** workflow pronto; não há comprovação de execução
   remota nem de bloqueio de merge com check falhando.
7. **Passou:** quatro opções na ordem correta, Continuar desativado e
   versão 0.0.1 visível, inclusive no preview.
8. **Passou localmente:** teclado pulou Continuar, Enter abriu Opções,
   seta para cima circulou até Créditos; cliques abriram telas e retornos.
   O hover aplica seleção e foco pelo handler; os cliques exercitaram esse
   caminho. Não houve automação de deslocamento isolado do ponteiro.
9. **Passou:** semente digitada 42 apareceu na Cidade com relógio 0;
   campo vazio gerou uma semente numérica na interface.
10. **Passou:** clique Avançar relógio mostrou 1, preservando semente 42.
11. **Passou:** Cidade → Expedição → Cidade preservou relógio; retorno ao
    menu; Escape conferido em Opções, Créditos e Expedição. O listener
    global atende também Novo jogo e Cidade.
12. **Passou:** plano 3D observado no dev e preview, console sem erros.
13. **Passou:** README explica execução, estrutura e dependências.
14. **Pendente humano:** execução nas duas máquinas e PRs revisados pelos
    dois desenvolvedores não foram realizados nem simulados.

## Evidências e limites

- `npm run test`: 4 arquivos, 11 testes aprovados.
- `npm run lint` e `biome ci .`: aprovados.
- `npm run build`: aprovado; aviso de bundle Three.js acima de 500 kB.
- Auditoria de produção: zero vulnerabilidades; auditoria completa: seis
  alertas altos na cadeia do Commitizen, sem correção estável compatível
  disponível durante esta execução. Detalhes e dependências no README.
- Console de desenvolvimento: aviso THREE.Clock depreciado na integração
  Fiber; nenhum erro de renderização observado.
- Capturas `../menu-m0.png` e `../scene-m0.png` registram o preview final.
- `M0-FILES.txt` lista todos os arquivos da entrega; node_modules e dist
  são saídas locais reproduzíveis e ficam fora do versionamento.
- Não houve publicação, criação de PRs, proteção de branch nem alegação
  de revisão por outro desenvolvedor. O histórico local usa mensagens
  montadas pelo adaptador configurado do Commitizen.

## Encerramento do marco

Preencher o segundo nome, escolher o novo repositório GitHub, publicar a
entrega por PR, exigir aprovação e check na main, testar bloqueio de CI
e completar a revisão em dupla. Esses itens são necessários antes de
declarar todos os 14 critérios aceitos ou iniciar M1.
