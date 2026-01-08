import { ScrollControls, Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { Scene } from "./Scene";
import { Overlay } from "../ui/Overlay";

export const Experience = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />

            {/* Lights */}
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 5]} intensity={2} angle={0.5} penumbra={1} castShadow />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#AAF38B" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Environment preset="city" blur={1} />

            <ScrollControls pages={3} damping={0.1}>
                {/* 3D Content behaving with scroll */}
                <Scene />

                {/* HTML UI behaving with scroll */}
                <Overlay />
            </ScrollControls>

            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    );
};
