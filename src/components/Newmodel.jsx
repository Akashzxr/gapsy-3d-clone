import { Suspense, useEffect, useRef, useState} from 'react';
import { Canvas,useThree,useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, ScrollControls, useAnimations, useGLTF,PerspectiveCamera, Stage } from '@react-three/drei';
import { DirectionalLight } from 'three';
import { useScroll } from '@react-three/drei';
import { Model } from './Landscape';



const Newmodel = ({...props}) => {
  const computer = useGLTF('/landscape.glb');
  const { camera } = useThree();
  const ref = useRef();
 // const ref = useRef()
  const scroll = useScroll()
 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/landscape.glb')
  const { actions } = useAnimations(animations, group)


  
  useFrame(() => {
    camera.lookAt(0, 280, 100);
    ref.current.position.x = scroll.offset * -17000;
    
  });

  
  return (
    <mesh ref={ref}>
       <Model/>
    </mesh> 
  
  )
}

useGLTF.preload('/landscape.glb')

const ModelCanvas = () => {
 
    const ref = useRef();
  return (
    <Canvas style={{ width: "100%", height: "100%" }}
    camera={{ near: 0.1, far: 80000.0,  position: [0, 280, 1670], fov: 25  }} >
    <Suspense fallback={null}>
    <ScrollControls  hideScrollbar={true} pages={5} distance={1} damping={0.5}>
        <Newmodel/>
     </ScrollControls>
    
    </Suspense>
  </Canvas>
  )
}

export default ModelCanvas