import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Avatar() {
  const ref = useRef(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <MeshDistortMaterial
          color="#6366F1"
          emissive="#8B5CF6"
          emissiveIntensity={0.55}
          metalness={0.9}
          roughness={0.18}
          distort={0.45}
          speed={1.8}
        />
      </mesh>
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Bulb() {
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={2}>
      <group position={[1.6, 1.1, 0]}>
        <mesh>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial
            color="#fde68a"
            emissive="#facc15"
            emissiveIntensity={1.2}
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.32, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.18, 24]} />
          <meshStandardMaterial color="#9ca3af" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function AvatarScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.2], fov: 45 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#8B5CF6" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#06B6D4" />

      <Suspense fallback={null}>
        <Float speed={1} rotationIntensity={0.4} floatIntensity={1.2}>
          <Avatar />
        </Float>
        <Bulb />
        <Sparkles count={50} scale={[5, 4, 4]} size={1.6} speed={0.4} color="#c4b5fd" />
      </Suspense>
    </Canvas>
  );
}

export default AvatarScene;
