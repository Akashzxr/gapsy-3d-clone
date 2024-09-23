/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 landscape.glb 
*/

import React from "react";
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useTexture,
  Text,
  Html,
  useVideoTexture,
  RoundedBox,
  Image,
} from "@react-three/drei";
import { Decal } from "@react-three/drei";
import { BoxGeometry, MeshBasicMaterial } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faPaperclip, faPlay } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

export function Model(props) {
  const group = React.useRef();
  const element = React.useRef();
  const logoMesh = React.useRef();
  const planetMesh = React.useRef();
  const { nodes, materials, animations } = useGLTF("/landscape.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/wow.svg");
  const texture2 = useVideoTexture("/all-services-1.mp4");
  const adseller = useTexture("/adseller-1.webp");
  const rkde = useTexture("/rkde.webp");
  const scoop = useTexture("/scoop-solar.webp");
  const pickle = useTexture("/pickle.webp");
  const creatorset = useTexture("/creatorset.webp");
  const mind = useTexture("/mind-cleanse.webp");
  const { gl } = useThree();

  useFrame((state, delta) => {
    // const a = clock.getElapsedTime();
    logoMesh.current.rotation.y += 0.05;
    planetMesh.current.rotation.y += 0.02;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh
            name="work_prev_01_0"
            geometry={nodes.work_prev_01_0.geometry}
            material={materials["material-13"]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={adseller}
              material-depthTest={true}
            />

            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 110, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Addsellr
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                This service helps create Shopify stores, promote products with
                the help of creators who record video ads for social networks.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>

          <mesh
            name="work_prev_02_1"
            geometry={nodes.work_prev_02_1.geometry}
            material={materials["material-12"]}
            position={[859.599, 0, 0]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={rkde}
              material-depthTest={true}
            />
            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 130, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  RKDE
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                The product KOP (Keep On Playing) is a Play to Earn (P2E)
                platform that rewards users for playing games and completing
                challenges/quest.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>
          <mesh
            name="work_prev_03_2"
            geometry={nodes.work_prev_03_2.geometry}
            material={materials["material-11"]}
            position={[1719.197, 0, 0]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={scoop}
              material-depthTest={true}
            />

            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 110, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Scoop Solar
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                An innovative project that streamlines the process of solar
                operations by utilizing industry-leading technologies and
                software.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>
          <mesh
            name="work_prev_04_3"
            geometry={nodes.work_prev_04_3.geometry}
            material={materials["material-10"]}
            position={[2578.795, 0, 0]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={pickle}
              material-depthTest={true}
            />

            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 110, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Pickle
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                All-in-one social application that allows you to assign events,
                sync them to calendars, chat with friends, and leave feedback.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>
          <mesh
            name="work_prev_05_4"
            geometry={nodes.work_prev_05_4.geometry}
            material={materials["material-09"]}
            position={[3438.394, 0, 0]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={creatorset}
              material-depthTest={true}
            />

            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 140, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  CreatorSet
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                This is a store where users can create their own little
                animations and view other people's animations, create text tags,
                add subtitles to video and audio files, and upload their own
                memes (emoji)
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>
          <mesh
            name="work_prev_06_5"
            geometry={nodes.work_prev_06_5.geometry}
            material={materials["material-08"]}
            position={[4297.993, 0, 0]}
          >
            <Decal
              debug={false}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[450, 310]}
              map={mind}
              material-depthTest={true}
            />

            <Html
              className="flex flex-col gap-5"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[250, 90, 0]}
            >
              <div className="w-max">
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Mind Cleanse
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                A meditation app that helps to reduce stress, and anxiety and
                promote inner peace.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View Case</div>
              </div>
            </Html>
          </mesh>
        </group>
        <PerspectiveCamera
          name="Camera_Web"
          makeDefault={false}
          far={10000}
          near={1}
          fov={22.895}
          position={[0, 272.206, 1862.464]}
        />
        <mesh
          name="desktop_arrow_button_main"
          geometry={nodes.desktop_arrow_button_main.geometry}
          material={nodes.desktop_arrow_button_main.material}
          position={[425.709, 148.449, 0.029]}
        />
        <mesh
          name="desktop_descriptor_title_text"
          geometry={nodes.desktop_descriptor_title_text.geometry}
          material={nodes.desktop_descriptor_title_text.material}
          position={[213.851, 148.449, 0.029]}
        />
        <mesh
          name="desktop_wow_title_sign"
          geometry={nodes.desktop_wow_title_sign.geometry}
          material={nodes.desktop_wow_title_sign.material}
          position={[-498.151, 411.845, 0.029]}
        />
        <mesh
          name="contact_form_fitback"
          geometry={nodes.contact_form_fitback.geometry}
          material={nodes.contact_form_fitback.material}
          position={[17355.436, 268.059, 0.029]}
        >
          <Html
            className="contact-form flex flex-col gap-3"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-240, 160, 0]}
          >
           <div className="flex flex-col gap-2">
            <label style={{fontSize:"0.9rem"}} className="">Name</label>
            <input className="contact-input" type="text" name="" id="" />
           </div>

           <div className="flex flex-col gap-2">
            <label style={{fontSize:"0.9rem"}}>Email</label>
            <input className="contact-input" type="email" name="" id="" />
           </div>

           <div className="flex flex-col gap-2">
            <label style={{fontSize:"0.9rem"}}>Question</label>
            <textarea className="textarea" rows={"4"}>
            </textarea>
           </div>

           <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 w-max">
              <div style={{backgroundColor:"#fe6f61"}} className="w-3.375 h-3.375 flex items-center justify-center rounded-lg">
                <FontAwesomeIcon className="text-white" icon={faPaperclip}/>
              </div>
              <div className="attach-file">
                Attach file
              </div>
              <input type="file" name="" id="" className="hidden-input"/>
            </div>

            <div>
              <button className="text-white bg-black h-3.375 rounded-lg w-44">
                Send Request
              </button>
            </div>
           </div>
          </Html>
        </mesh>
        <mesh
          name="about_text_block"
          geometry={nodes.about_text_block.geometry}
          material={nodes.about_text_block.material}
          position={[1715.285, 279.178, 0.029]}
        />
        <mesh
          name="crown_sugn_our_service"
          geometry={nodes.crown_sugn_our_service.geometry}
          material={nodes.crown_sugn_our_service.material}
          position={[12035.32, 385.325, 0.029]}
        >
          <Html
            className="third wall w-max"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-30, 20, 0]}
            prepend
          >
            <img src="/crown.svg" width="50" />
          </Html>
        </mesh>
        <mesh
          name="hello_sign_contact"
          geometry={nodes.hello_sign_contact.geometry}
          material={nodes.hello_sign_contact.material}
          position={[17046.137, 401.206, 0.029]}
        >
          <Html
            className="third wall w-max"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-30, 20, 0]}
            prepend
          >
            <img src="/hello.svg" width="70" />
          </Html>
        </mesh>
        <mesh
          name="omg_sign"
          geometry={nodes.omg_sign.geometry}
          material={nodes.omg_sign.material}
          position={[4320.142, 389.936, 0.029]}
        >
          <Html
            className="third wall w-max"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-60, 40, 0]}
            prepend
          >
            <img src="/omg.svg" width="100" />
          </Html>
        </mesh>
        <mesh
          name="Play_button"
          /* geometry={nodes.Play_button.geometry} */
          material={nodes.Play_button.material}
          position={[2864.844, 275.825, -115.224]}
        >
          <RoundedBox args={[100, 100, 30]} radius={5}>
            <Html
              className="third wall w-max"
              portal={{ current: gl.domElement.parentNode }}
              scale={100}
              position={[-5, 10, 0]}
              prepend
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={faPlay}
                color="#fe6f61"
              />
            </Html>
          </RoundedBox>
        </mesh>
        <mesh
          name="portfolio_text_01"
          geometry={nodes.portfolio_text_01.geometry}
          material={nodes.portfolio_text_01.material}
          position={[6151.875, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_02"
          geometry={nodes.portfolio_text_02.geometry}
          material={nodes.portfolio_text_02.material}
          position={[7004.646, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_03"
          geometry={nodes.portfolio_text_03.geometry}
          material={nodes.portfolio_text_03.material}
          position={[7858.798, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_04"
          geometry={nodes.portfolio_text_04.geometry}
          material={nodes.portfolio_text_04.material}
          position={[8730.079, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_05"
          geometry={nodes.portfolio_text_05.geometry}
          material={nodes.portfolio_text_05.material}
          position={[9580.784, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_06"
          geometry={nodes.portfolio_text_06.geometry}
          material={nodes.portfolio_text_06.material}
          position={[10447.699, 287.038, 0.029]}
        />
        <mesh
          name="screen_showreel"
          geometry={nodes.screen_showreel.geometry}
          material={materials["material-04"]}
          position={[2865.328, 286.533, -343.839]}
        >
          <Decal
            debug={false}
            position={[0, 0, -4]}
            rotation={[0, 0, 0]}
            scale={700}
            map={texture2}
            material-depthTest={true}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
        <mesh
          name="services_text_block"
          geometry={nodes.services_text_block.geometry}
          material={nodes.services_text_block.material}
          position={[14004.598, 252.46, 0.029]}
        >
          <Html
            className="flex gap-20"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-1280, 150, 0]}
          >
            <div className="one flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  01
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Web Design
                </h2>
              </div>
              <div className="w-360 text-base text-neutral-700">
                Gapsy Studio produces high-quality websites that look great on
                all devices. Our website designing services include web design,
                development, e-commerce, SEO, and more.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>

            <div className="two flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  02
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Mobile App Design
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                Custom app design services in Gapsy can help to get your
                business noticed by potential customers. We can create a
                mobile-friendly app that is both user-friendly and visually
                appealing.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>

            <div className="three flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  03
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Web Development
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                Gapsy Studio offers web development services that can help take
                your business to the next level. We create custom websites that
                are both user-friendly and highly functional.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>

            <div className="four flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  04
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Branding Design
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                If you're looking for branding design services, look no further
                than Gapsy Studio. We can help you create a unique and memorable
                brand that will stand out from the competition.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>

            <div className="five flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  05
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  Motion Design
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                Gapsy studio specializes in creating high-quality, innovative,
                and engaging motion graphic services for various clients and
                projects.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>

            <div className="six flex flex-col gap-5">
              <div className="w-max flex flex-col gap-2">
                <div style={{ fontSize: "24px" }} className="font-ppformula">
                  06
                </div>
                <h2 className="font-ppformula-light text-5xl font-thin">
                  UX Audit
                </h2>
              </div>
              <div className="w-324.928 text-base text-neutral-700">
                Gapsy's user experience audit services are designed to help get
                a detailed report highlighting any areas that need improvement
                and fixing on your website or in the app.
              </div>
              <div className=" flex gap-3 items-center">
                <button className="border-2 border-black rounded-lg w-10 h-10">
                  <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
                </button>
                <div className="text-sm">View More</div>
              </div>
            </div>
          </Html>
        </mesh>
        {/* this is the mesh of wall */}
        <mesh
          ref={element}
          name="Tex_01"
          geometry={nodes.Tex_01.geometry}
          material={materials.Tex_01}
          position={[3133.68, 0, 0]}
        >
          <Decal
            debug={false}
            position={[-3640, 420, 7]}
            rotation={[0, 0, 0]}
            scale={115}
            map={texture}
            material-depthTest={false}
            polygonOffset
            polygonOffsetFactor={-1}
          />

          <Html
            className="first-wall"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-3040, 190, 0]}
          >
            <div className="flex w-max items-center">
              <div className="rock-salt-regular first-text">
                A full-service design studio specializing in mobile and web
                design, branding, and animation.
              </div>

              <div>
                <img className="w-24" src="/arrow.svg" alt="" />
              </div>
            </div>
          </Html>

          <Html
            className="second wall"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            position={[-1720, 430, 0]}
          >
            <div className="w-max flex gap-3">
              <h2 className="font-ppformula text-5xl">Who we are</h2>
              <img className="relative bottom-14 w-24" src="/hello.svg" />
            </div>
            <div className="w-599.725 text-base text-neutral-700">
              Gapsy Studio is an innovative web and mobile app design studio
              based in Dnipro. We are a tribe of go-getters with outstanding
              experience and a reputation for building and transforming ideas
              into a global brand. We bring to life your vision by fusing
              creativity, experience, and technology. Whether you need a new
              website or want to upgrade your existing one, we can help turn
              your goals into reality. If you’re looking for an agency to help
              you take your business to the next level, contact us today – we
              will be happy to cooperate!
            </div>
            <div className="mt-6 flex gap-5 items-center">
              <button className="border-2 border-black rounded-lg w-10 h-10">
                <FontAwesomeIcon className="w-2" icon={faGreaterThan} />
              </button>
              <div className="text-sm">About us</div>
            </div>
          </Html>
        </mesh>
        {/* end of mesh of the wall */}

        <mesh
          name="Tex_01001"
          geometry={nodes.Tex_01001.geometry}
          material={materials.Tex_01}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="FloorMirror"
          geometry={nodes.FloorMirror.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0.821, 0]}
        />
        <mesh
          name="Tex_02_011"
          geometry={nodes.Tex_02_011.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_001"
          geometry={nodes.Tex_02_001.geometry}
          material={materials.Tex_02}
          position={[16245.512, 64.865, -444.386]}
        />
        <mesh
          name="Tex_02_003"
          geometry={nodes.Tex_02_003.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_004"
          geometry={nodes.Tex_02_004.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_005"
          geometry={nodes.Tex_02_005.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_006"
          geometry={nodes.Tex_02_006.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_007"
          geometry={nodes.Tex_02_007.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_008"
          geometry={nodes.Tex_02_008.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_009"
          geometry={nodes.Tex_02_009.geometry}
          material={materials.Tex_02}
          position={[11318.145, 120.258, -286.535]}
        />
        <mesh
          name="Tex_02_010"
          geometry={nodes.Tex_02_010.geometry}
          material={materials.Tex_02}
          position={[16045.978, 0, -85.961]}
        />
        <mesh
          name="Tex_02_012"
          geometry={nodes.Tex_02_012.geometry}
          material={materials.Tex_02}
          position={[11605.813, 126, -479.078]}
        />
        <mesh
          name="Tex_02_013"
          geometry={nodes.Tex_02_013.geometry}
          material={materials.Tex_02}
          position={[1081.763, 0.233, -483.224]}
        />
        <mesh
          name="Tex_02_014"
          geometry={nodes.Tex_02_014.geometry}
          material={materials.Tex_02}
          position={[16045.978, 0, -85.961]}
        />
        <mesh
          name="Tex_02_015"
          geometry={nodes.Tex_02_015.geometry}
          material={materials.Tex_02}
          position={[11636.431, 0.8, -348.8]}
        />
        <mesh
          name="Tex_02_016"
          geometry={nodes.Tex_02_016.geometry}
          material={materials.Tex_02}
          position={[11636.431, 0.8, -348.8]}
        />
        <mesh
          name="Tex_02_017"
          geometry={nodes.Tex_02_017.geometry}
          material={materials.Tex_02}
          position={[11664.611, 62.413, -470.158]}
        />
        <mesh
          name="Tex_02_018"
          geometry={nodes.Tex_02_018.geometry}
          material={materials.Tex_02}
          position={[4642.812, 57.755, -441.286]}
        />
        <mesh
          name="Tex_02_019"
          geometry={nodes.Tex_02_019.geometry}
          material={materials.Tex_02}
          position={[1082.439, 21.396, -479.564]}
        />
        <mesh
          ref={logoMesh}
          name="Logo_Rotation"
          geometry={nodes.Logo_Rotation.geometry}
          material={materials.Tex_02}
          position={[860.188, 271.966, -82.812]}
        />
        <mesh
          ref={planetMesh}
          name="Planet_Rotation"
          geometry={nodes.Planet_Rotation.geometry}
          material={materials.Tex_02}
          position={[16045.839, 286.533, -85.96]}
        />
        <mesh
          name="Tex_02_002001"
          geometry={nodes.Tex_02_002001.geometry}
          material={materials.Tex_02}
          position={[2402.937, 33.262, -189.113]}
        />
        <mesh
          name="Tex_02_017001"
          geometry={nodes.Tex_02_017001.geometry}
          material={materials.Tex_02}
          position={[11664.611, 62.413, -470.158]}
        />
        <mesh
          name="Tex_03"
          geometry={nodes.Tex_03.geometry}
          material={materials.Tex_03}
          scale={821.018}
        />
        <mesh
          name="Text_Var_01"
          geometry={nodes.Text_Var_01.geometry}
          material={materials.Tex_03}
          scale={821.018}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/landscape.glb");
