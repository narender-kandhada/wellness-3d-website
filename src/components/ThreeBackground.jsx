import { memo, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const SHAPES = [
  { position: [-3.2, 1.4, -2.5], scale: 0.7, color: "#8dc8a1", speed: 0.45, offset: 0.2 },
  { position: [3.1, -1.2, -2], scale: 0.6, color: "#98d2ad", speed: 0.35, offset: 1.7 },
  { position: [0.6, 2.4, -3], scale: 0.5, color: "#7fbb93", speed: 0.4, offset: 3.3 },
  { position: [-0.7, -2.1, -3.5], scale: 0.45, color: "#abdcb8", speed: 0.32, offset: 4.8 },
];

const pseudoRandom = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const FloatingShape = memo(function FloatingShape({ position, scale, color, speed, offset }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(elapsed * speed + offset) * 0.14;
    meshRef.current.rotation.x = elapsed * 0.08 + offset;
    meshRef.current.rotation.y = elapsed * 0.1 + offset * 0.6;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.08} transparent opacity={0.45} />
    </mesh>
  );
});

function Scene() {
  const groupRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        x: (pseudoRandom(index + 1) - 0.5) * 11,
        y: (pseudoRandom(index + 101) - 0.5) * 6.5,
        z: -pseudoRandom(index + 501) * 6,
      })),
    []
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.08) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 5, 4]} intensity={0.45} color="#d4ecd9" />
      <pointLight position={[-4, -1, 3]} intensity={0.3} color="#afd8bc" />

      {SHAPES.map((shape) => (
        <FloatingShape key={shape.position.join("")} {...shape} />
      ))}

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length}
            array={new Float32Array(particles.flatMap((point) => [point.x, point.y, point.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#8abf9b" size={0.04} transparent opacity={0.3} />
      </points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 48 }} gl={{ antialias: false, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}