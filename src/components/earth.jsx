// import React, { useRef } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
// // import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";
// import { Stars } from "@react-three/drei";

// import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
// import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
// import { TextureLoader } from "three";
// import { motion } from "framer-motion";

// export function Earth(props) {
//   const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
//     TextureLoader,
//     [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
//   );

//   const earthRef = useRef();
//   const cloudsRef = useRef();

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime();

//     earthRef.current.rotation.y = elapsedTime / 6;
//     cloudsRef.current.rotation.y = elapsedTime / 6;
//   });

//   return (
//     <>
//       <ambientLight intensity={0.3} />
//       <pointLight color="#f6f3ea" position={[1, 0, 5]} intensity={1.2} />
//       <Stars
//         radius={200}
//         depth={80}
//         count={20000}
//         factor={10}
//         saturation={0}
//         fade={true}
//       />
//       <mesh ref={cloudsRef} position={[0, 0, 3]}>
//         <sphereGeometry args={[1.005, 32, 32]} />
//         <meshPhongMaterial
//           map={cloudsMap}
//           opacity={0.4}
//           depthWrite={true}
//           transparent={true}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//       <mesh ref={earthRef} position={[0, 0, 3]}>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshPhongMaterial specularMap={specularMap} />
//         <meshStandardMaterial
//           map={colorMap}
//           normalMap={normalMap}
//           metalness={0.4}
//           roughness={0.7}
//         />
//         {/* <OrbitControls
//           enableZoom={true}
//           enablePan={true}
//           enableRotate={true}
//           zoomSpeed={0.6}
//           panSpeed={0.5}
//           rotateSpeed={0.4}
//         /> */}
//       </mesh>
//     </>
//   );
// }

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[50, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 100, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-30, -50, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-30, -30, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={isMobile ? 2.5 : 2}
        position-y={isMobile ? -3.8 : -2.8}
        position-x={isMobile ? 0 : 0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
