import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Rock } from "./Rock";

export const Scene = () => {
    const scroll = useScroll();
    const rockGroup = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        // Scroll based animations
        // scroll.offset is 0 to 1

        if (rockGroup.current) {
            // Base rotation
            rockGroup.current.rotation.y += delta * 0.1;

            // Scroll interactions
            // Page 1: Centered, slight float
            // Page 2: Move to side, rotate, spawn more rocks? 
            // For simplicity, we just move the main rock based on scroll

            // Example flight path
            rockGroup.current.position.x = -scroll.offset * 2;
            rockGroup.current.position.y = Math.sin(scroll.offset * Math.PI * 2) * 1;
            rockGroup.current.rotation.z = scroll.offset * Math.PI;
        }
    });

    return (
        <group ref={rockGroup}>
            <Rock position={[0, 0, 0]} scale={1.5} />

            {/* Additional decorative rocks that appear later? */}
            <Rock position={[4, 2, -5]} scale={0.5} />
            <Rock position={[-4, -2, -3]} scale={0.8} />
        </group>
    );
};
