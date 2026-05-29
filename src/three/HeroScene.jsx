import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles, Torus, TorusKnot } from "@react-three/drei";

function Ribbon() {
  const ref = useRef(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.06;
  });

  return (
    <group ref={ref}>
      <TorusKnot args={[1.05, 0.32, 220, 32, 2, 3]} castShadow receiveShadow>
        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#6366F1"
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.15}
          distort={0.32}
          speed={1.6}
        />
      </TorusKnot>
      <Torus args={[1.7, 0.02, 16, 200]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.55} />
      </Torus>
      <Torus args={[2.05, 0.014, 16, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.4} />
      </Torus>
    </group>
  );
}

function Platform() {
  return (
    <group position={[0, -1.85, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[1.55, 1.62, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[1.65, 1.67, 64]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[1.55, 64]} />
        <meshStandardMaterial
          color="#0A0F1F"
          emissive="#6366F1"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { pos: [-2.6, 1.4, -1.2], geom: "octa", color: "#8B5CF6", scale: 0.35 },
      { pos: [2.4, 1.6, -1.5], geom: "ico", color: "#06B6D4", scale: 0.3 },
      { pos: [2.1, -1.1, -0.6], geom: "tetra", color: "#6366F1", scale: 0.28 },
      { pos: [-2.2, -0.6, 0.4], geom: "ico", color: "#EC4899", scale: 0.22 }
    ],
    []
  );

  return shapes.map((shape, index) => (
    <Float key={index} speed={1.2 + index * 0.2} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh position={shape.pos} scale={shape.scale}>
        {shape.geom === "octa" ? (
          <octahedronGeometry args={[1, 0]} />
        ) : shape.geom === "ico" ? (
          <icosahedronGeometry args={[1, 0]} />
        ) : (
          <tetrahedronGeometry args={[1, 0]} />
        )}
        <meshStandardMaterial
          color={shape.color}
          emissive={shape.color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.15}
          wireframe={index % 2 === 0}
        />
      </mesh>
    </Float>
  ));
}

function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={["#050816", 7, 14]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#8B5CF6" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#06B6D4" />
      <directionalLight position={[0, 4, 4]} intensity={0.6} color="#ffffff" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
          <Ribbon />
        </Float>
        <Platform />
        <FloatingShapes />
        <Sparkles count={70} scale={[8, 5, 5]} size={2} speed={0.4} color="#a78bfa" />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
