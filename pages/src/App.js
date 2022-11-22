import {rangeStep} from "ramda-adjunct";
import {useEffect, useRef} from "react";
import {concatAll, of, Subject, switchMap, tap} from 'rxjs'
import {
	EquirectangularReflectionMapping,
	Mesh,
	MeshPhysicalMaterial,
	PerspectiveCamera,
	Scene,
	SphereGeometry,
	WebGLRenderer
} from 'three'

import {RGBELoader} from 'three/addons/loaders/RGBELoader'
import SectionBox1 from "./components/section1";
import Navbar from "./components/section1/Navbar";
import SectionsBox2 from "./components/section2";
import SectionBox3 from "./components/section3";
import SectionBox4 from "./components/section4";
import SectionBox5 from "./components/section5";
import Footer from "./components/section6";

import {DivAppBoxSC, DivAppRelativeBoxSC,} from "./styled-components/styled.app";

function App() {

	const bottomRefCollection = useRef(null);
	const bottomRefBox = useRef(null);
	const bottomRefHome = useRef(null);
	const onClickScrollCollection = () => {
		bottomRefCollection.current?.scrollIntoView({behavior: "smooth"});
	};
	const onClickScrollBox = () => {
		bottomRefBox.current?.scrollIntoView({behavior: "smooth"});
	};
	const onClickScrollHome = () => {
		bottomRefHome.current?.scrollIntoView({behavior: "smooth"});
	};


	let bubbles_initialized = false

	function InitBubbles() {
		if (bubbles_initialized) return
		bubbles_initialized = true

		const renderer_width = window.innerWidth
		const renderer_height = window.innerHeight
		const scene = new Scene()
		const camera = new PerspectiveCamera(45, renderer_width / renderer_height, 1, 32)
		camera.position.set(0, 0, 30)

		const renderer = new WebGLRenderer({
			antialias: true,
			alpha: true,
			opacity: 0
		})

		renderer.setSize(renderer_width, renderer_height)
		document.getElementById('canvas').appendChild(renderer.domElement)

		const envMap = new RGBELoader()
			.setPath('/')
			.load('royal_esplanade_1k.hdr', () => {
				envMap.mapping = EquirectangularReflectionMapping
			})

		const black_material = new MeshPhysicalMaterial({
			color: 0x000000,
			clearcoat: 1,
			metalness: 1,
			roughness: 1,
			specularColor: 0xffffff,
			envMap,
			envMapIntensity: 1
		})

		const pre_render$ = new Subject()

		let width = Math.floor(renderer_width / 40)
		let height = Math.floor(renderer_height / 40)
		let half_width = (width / 2)
		let half_height = (height / 2)

		const spheres = []

		for (let x of rangeStep(2, 0, width)) {
			for (let y of rangeStep(2, 0, height)) {
				if (Math.random() > 0.9) {
					let size = Math.random()
					const geometry = new SphereGeometry(0.1 < size > 0.9 ? size : 0.1, 64, 64)
					const sphere = new Mesh(geometry, black_material)
					scene.add(sphere)

					sphere.position.x = Math.random() * (x - half_width)
					sphere.position.y = Math.random() * (y - half_height)
					sphere.position.z = Math.random() * 4

					spheres.push(sphere)
				}
			}
		}

		pre_render$
			.pipe(switchMap(() => of(spheres)))
			.pipe(concatAll())
			.pipe(tap(sphere => {
				sphere.position.x += Math.random() > 0.5 ? 0.001 * Math.random() : -0.001 * Math.random() + 0.002
				sphere.position.y += Math.random() > 0.5 ? 0.001 * Math.random() : -0.001 * Math.random() + 0.002
				sphere.position.z += Math.random() > 0.5 ? 0.001 * Math.random() : -0.001 * Math.random()
			}))
			.subscribe()

		function animate(t) {
			pre_render$.next(t)
			requestAnimationFrame(animate)
			renderer.render(scene, camera)
		}

		window.onresize = function () {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);

		};

		animate()

	}

	useEffect(() => {
		InitBubbles()
	}, [])


	return (
		<>
			<DivAppRelativeBoxSC>
				<DivAppBoxSC>
					<Navbar
						onClickButtonCollection={ onClickScrollCollection }
						onClickButtonBox={ onClickScrollBox }
						onClickButtonHome={ onClickScrollHome }

					/>
					<SectionBox1 bottomRefHome={ bottomRefHome }/>
					<SectionsBox2/>
					<SectionBox3/>

					<SectionBox4 bottomRefBox={ bottomRefBox }/>
					<SectionBox5 bottomRefCollection={ bottomRefCollection }/>
					<Footer/>
				</DivAppBoxSC>

				{/* <DivBubblesBoxSC>
          <Canvas camera={{ position: [0, 0, 0], zoom: 1 }}>
            <OrbitControls />
            <hemisphereLight intensity={0.35} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.3}
              penumbra={1}
              intensity={2}
              castShadow
            />
            <Suspense fallback={null}>
              <Bubbles scale={14.1} />
            </Suspense>
          </Canvas>
        </DivBubblesBoxSC> */ }
			</DivAppRelativeBoxSC>
		</>
	);
}

export default App;
