import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/canvas/Experience";
import "./index.css";

function App() {
  return (
    <div className="w-full h-screen relative bg-black">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true }}
          camera={{ position: [0, 0, 5], fov: 30 }}
        >
          <Experience />
        </Canvas>
      </div>

      {/* HTML Overlay Layer removed to prevent conflict with Drei ScrollControls/Overlay */}

    </div>
  );
}

export default App;
