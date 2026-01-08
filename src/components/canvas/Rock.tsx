import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const Rock = (props: any) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1} speed={1.5}>
            <mesh ref={meshRef} {...props} scale={1.2}>
                {/* Using a Dodecahedron for a low-poly rock look, increased detail to 0 for sharp edges */}
                <dodecahedronGeometry args={[1, 0]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={1}
                    thickness={0.5}
                    roughness={0.05} // Very glossy
                    transmission={0.6} // Semi-transparent
                    ior={2}
                    chromaticAberration={0.5}
                    anisotropy={0.5}
                    color="#333" // Dark color
                    background={new THREE.Color("#000")}
                />
            </mesh>
        </Float>
    );
};
