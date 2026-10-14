import { Canvas } from "@react-three/fiber";
import "./SmokeTest.css";
export default function SmokeTest() {
  return (
    <div
      className="smoke-test"
      role="img"
      aria-label="Teste 3D: plano iluminado de cor sólida"
    >
      <Canvas camera={{ position: [0, 0, 3] }} frameloop="demand">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={2} />
        <mesh rotation={[-0.3, 0.3, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial color="#c2a572" />
        </mesh>
      </Canvas>
    </div>
  );
}
