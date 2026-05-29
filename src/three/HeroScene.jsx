import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Edges,
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles
} from "@react-three/drei";
import * as THREE from "three";

/* ----------------------------- AI / Dev Core ----------------------------- */
function NeuralCore() {
  const inner = useRef(null);
  const shell = useRef(null);
  const halo = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y += delta * 0.35;
      inner.current.rotation.x += delta * 0.18;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.22;
      shell.current.rotation.z += delta * 0.08;
      const pulse = 1 + Math.sin(t * 2.2) * 0.04;
      shell.current.scale.set(pulse, pulse, pulse);
    }
    if (halo.current) {
      halo.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Glassy energy halo */}
      <mesh ref={halo} scale={1.95}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Wireframe data shell */}
      <mesh ref={shell} scale={1.4}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.42} />
      </mesh>

      {/* Glowing core */}
      <mesh ref={inner} castShadow>
        <icosahedronGeometry args={[0.85, 1]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#6366F1"
          emissiveIntensity={0.95}
          metalness={0.95}
          roughness={0.1}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </group>
  );
}

/* ------------------------------- Orbit Ring ------------------------------ */
function OrbitRing({
  radius = 2.2,
  rotation = [0, 0, 0],
  speed = 0.6,
  ringColor = "#8B5CF6",
  ringOpacity = 0.55,
  nodes = [{ color: "#a78bfa", offset: 0 }]
}) {
  const group = useRef(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 8, 160]} />
        <meshBasicMaterial color={ringColor} transparent opacity={ringOpacity} />
      </mesh>
      <group ref={group}>
        {nodes.map((node, i) => {
          const angle = node.offset ?? (i / nodes.length) * Math.PI * 2;
          return (
            <group
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            >
              <mesh>
                <sphereGeometry args={[0.07, 24, 24]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={1.8}
                  toneMapped={false}
                />
              </mesh>
              {/* soft glow halo */}
              <mesh>
                <sphereGeometry args={[0.16, 16, 16]} />
                <meshBasicMaterial color={node.color} transparent opacity={0.18} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
}

/* ----------------------------- Floating Cards ---------------------------- */
/* A glassy panel evoking an editor / API / DB / Cloud card */
function CodePanel({ position, rotation, accent = "#8B5CF6" }) {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <group position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[1.1, 0.7, 0.05]} />
          <meshStandardMaterial
            color="#0B1124"
            emissive={accent}
            emissiveIntensity={0.18}
            metalness={0.6}
            roughness={0.35}
          />
          <Edges color={accent} threshold={1} />
        </mesh>
        {/* window dots */}
        <mesh position={[-0.42, 0.26, 0.03]}>
          <circleGeometry args={[0.025, 24]} />
          <meshBasicMaterial color="#F87171" />
        </mesh>
        <mesh position={[-0.35, 0.26, 0.03]}>
          <circleGeometry args={[0.025, 24]} />
          <meshBasicMaterial color="#FBBF24" />
        </mesh>
        <mesh position={[-0.28, 0.26, 0.03]}>
          <circleGeometry args={[0.025, 24]} />
          <meshBasicMaterial color="#34D399" />
        </mesh>
        {/* code lines */}
        <mesh position={[-0.25, 0.1, 0.03]}>
          <planeGeometry args={[0.5, 0.045]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        <mesh position={[-0.1, 0.0, 0.03]}>
          <planeGeometry args={[0.7, 0.045]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.85} />
        </mesh>
        <mesh position={[-0.2, -0.1, 0.03]}>
          <planeGeometry args={[0.55, 0.045]} />
          <meshBasicMaterial color="#c4b5fd" transparent opacity={0.7} />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.03]}>
          <planeGeometry args={[0.35, 0.045]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

function CloudCard({ position, rotation }) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={rotation}>
        <mesh position={[-0.18, 0, 0]}>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshStandardMaterial
            color="#0B1124"
            emissive="#22D3EE"
            emissiveIntensity={0.7}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0.05, 0.06, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color="#0B1124"
            emissive="#8B5CF6"
            emissiveIntensity={0.8}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0.25, -0.02, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial
            color="#0B1124"
            emissive="#6366F1"
            emissiveIntensity={0.7}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0.05, -0.18, 0]}>
          <boxGeometry args={[0.55, 0.05, 0.05]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
      </group>
    </Float>
  );
}

function DatabaseCard({ position, rotation }) {
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position} rotation={rotation}>
        {[0.18, 0, -0.18].map((y, i) => (
          <group key={i} position={[0, y, 0]}>
            <mesh>
              <cylinderGeometry args={[0.28, 0.28, 0.12, 32]} />
              <meshStandardMaterial
                color="#0B1124"
                emissive="#22D3EE"
                emissiveIntensity={0.55}
                metalness={0.85}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, 0.061, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.22, 0.28, 48]} />
              <meshBasicMaterial color="#8B5CF6" transparent opacity={0.85} />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

function ApiCube({ position, rotation }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={position} rotation={rotation}>
        <mesh ref={ref}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial
            color="#1A1740"
            emissive="#6366F1"
            emissiveIntensity={0.55}
            metalness={0.9}
            roughness={0.18}
          />
          <Edges color="#22D3EE" threshold={1} />
        </mesh>
      </group>
    </Float>
  );
}

/* ------------------------------- Floor / FX ------------------------------ */
function HoloFloor() {
  return (
    <group position={[0, -1.95, 0]}>
      {/* outer ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 1.66, 96]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.95} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[1.78, 1.8, 96]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.55} />
      </mesh>
      {/* faint inner disc with emissive sheen */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.011, 0]}>
        <circleGeometry args={[1.6, 96]} />
        <meshStandardMaterial
          color="#070B1C"
          emissive="#4338CA"
          emissiveIntensity={0.35}
          metalness={0.8}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* tick marks around the ring */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r = 1.92;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * r, 0.015, Math.sin(a) * r]}
            rotation={[-Math.PI / 2, 0, -a]}
          >
            <planeGeometry args={[0.12, 0.02]} />
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

/* Subtle backdrop grid plane */
function BackdropGrid() {
  const tex = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = "rgba(139,92,246,0.35)";
    ctx.lineWidth = 1;
    const step = 32;
    for (let i = 0; i <= size; i += step) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(size, i);
      ctx.stroke();
    }
    const t = new THREE.CanvasTexture(canvas);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }, []);

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[14, 9]} />
      <meshBasicMaterial map={tex} transparent opacity={0.18} />
    </mesh>
  );
}

/* --------------------------------- Scene --------------------------------- */
function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 5.6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#050816", 7, 14]} />

      <ambientLight intensity={0.4} />
      <pointLight position={[3.5, 3, 3]} intensity={1.6} color="#8B5CF6" />
      <pointLight position={[-3.5, -2, 2]} intensity={1.2} color="#22D3EE" />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#6366F1" />
      <directionalLight position={[0, 5, 4]} intensity={0.45} color="#ffffff" />

      <Suspense fallback={null}>
        <BackdropGrid />

        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
          <NeuralCore />
        </Float>

        {/* Orbital data rings around the core */}
        <OrbitRing
          radius={1.55}
          rotation={[Math.PI / 2.2, 0, 0]}
          speed={0.9}
          ringColor="#22D3EE"
          ringOpacity={0.55}
          nodes={[{ color: "#22D3EE", offset: 0 }]}
        />
        <OrbitRing
          radius={1.85}
          rotation={[Math.PI / 2.6, Math.PI / 4, 0]}
          speed={-0.7}
          ringColor="#8B5CF6"
          ringOpacity={0.45}
          nodes={[{ color: "#a78bfa", offset: Math.PI }]}
        />
        <OrbitRing
          radius={2.25}
          rotation={[Math.PI / 1.9, -Math.PI / 5, 0]}
          speed={0.5}
          ringColor="#6366F1"
          ringOpacity={0.35}
          nodes={[
            { color: "#c4b5fd", offset: 0.5 },
            { color: "#67e8f9", offset: 0.5 + Math.PI }
          ]}
        />

        {/* Tech cards orbiting the core in space */}
        <CodePanel position={[-2.45, 1.05, -0.4]} rotation={[0.05, 0.4, 0.05]} accent="#8B5CF6" />
        <CloudCard position={[2.4, 1.25, -0.6]} rotation={[0.1, -0.35, 0]} />
        <DatabaseCard position={[-2.2, -0.95, 0.2]} rotation={[0, 0.35, 0]} />
        <ApiCube position={[2.25, -0.85, 0.2]} rotation={[0, -0.4, 0]} />

        <HoloFloor />

        <Sparkles count={90} scale={[8, 5, 5]} size={2.2} speed={0.4} color="#a78bfa" />
        <Sparkles count={40} scale={[6, 4, 4]} size={1.4} speed={0.3} color="#22D3EE" />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
