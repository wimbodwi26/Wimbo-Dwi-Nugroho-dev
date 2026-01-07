import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Center } from "@react-three/drei";
import { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

const DRACO_PATH = "/draco/";
const MODEL_PATH = "/bumi.glb"; 

export default function ModelBun({ scale = 3, ...props }) {
  const { scene } = useGLTF(MODEL_PATH, DRACO_PATH);
  const texture = useTexture("/textures/gltf_embedded_0.webp");
  const groupRef = useRef<THREE.Group>(null!);

  
  useLayoutEffect(() => {
    texture.flipY = false; 
    texture.colorSpace = THREE.SRGBColorSpace; 

    scene.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        const mesh = node as THREE.Mesh;
  
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 1, 
          metalness: 0,
        });
        
        
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene, texture]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={scale} {...props}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}


useGLTF.preload(MODEL_PATH, DRACO_PATH);
useTexture.preload("/textures/gltf_embedded_0.webp");