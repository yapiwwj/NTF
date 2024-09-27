<template>
	<view class="content">
		<!-- three -->
		<view id="threeView"></view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view id="three" class="three" @click="three.onClick"></view>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS || H5 -->
		<view>非 APP、H5 环境不支持</view>
		<!-- #endif -->
	</view>
</template>

<script>
// export default {
// 	data() {
// 		return {
		
// 		};
// 	},
// 	onLoad() {
	
// 	},
// 	methods: {
	
// 	}
// };
</script>

<script module="three" lang="renderjs">
const THREE = require('static/three/build/three.min.js')
import {OrbitControls} from 'static/three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'static/three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'static/three/examples/jsm/loaders/RGBELoader.js';
const ThreeBSP = require('static/three/build/ThreeBSP.js')(THREE)
var renderer;
var scene,GLTFloader;
var camera;
var controls;
let pmremGenerator,envMap;
let renderEnabled = false;
let timeOut = null;
export default {
	mounted() {
		this.initThree();
	},
	methods: {
		
		initThree() {
			let that = this
			// 如果返回的不是未定义，说明threejs成功引入
			console.log('打印场景API', THREE.Scene);
			/* 创建场景对象Scene */
			scene = new THREE.Scene();
			/*
			    相机设置
			 */
			var width = window.innerWidth; // 窗口宽度
			var height = window.innerHeight; // 高度
			camera = new THREE.PerspectiveCamera( 20, width / height, 0.1, 10000 );
			camera.position.set( 0, 30, 100 );
			scene.add( camera );
			/*
			    创建渲染器对象
			 */
			const element = document.getElementById('threeView')
			renderer = new THREE.WebGLRenderer( { antialias: true,alpha: true } );
			renderer.physicallyCorrectLights = true;
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			pmremGenerator = new THREE.PMREMGenerator( renderer );
			pmremGenerator.compileEquirectangularShader();
			element.appendChild(renderer.domElement); // body元素中插入canvas对象
			/*
			    光源设置
			 */
			// 半球光
			const hemiLight = new THREE.HemisphereLight();
			hemiLight.intensity = 0.3
			scene.add( hemiLight );
			// 环境光
			const ambientLight = new THREE.AmbientLight( 0xffffff, 1);
			scene.add( ambientLight );
			//平行光
			const light = new THREE.DirectionalLight( 0xffffff, 0.3);
			light.position.set( -10, -1, 100 );
			scene.add( light );
			/*
			    控制器
			 */
			controls = new OrbitControls( camera, renderer.domElement );
			controls.enablePan = false;//滑动
			controls.enableDamping = true;
			controls.dampingFactor = 0.05;
			controls.screenSpacePanning = false;
			controls.autoRotate = true; //场景自动旋转
			controls.autoRotateSpeed  = 1;//旋转的速度
			// controls.minDistance = 60;
			// controls.maxDistance = 100;
			controls.maxPolarAngle = Math.PI /2;//2.8 1.8 Math.PI / 1
			// controls.minPolarAngle = Math.PI /2;//相同的角度禁止垂直旋转
			controls.addEventListener('change', function(){
			    that.timeRender();
			});
			//设置鼠标，触摸的操作方式
			// controls.mouseButtons = {
			// 	LEFT: THREE.MOUSE.PAN,
			// 	MIDDLE: THREE.MOUSE.DOLLY,
			// 	RIGHT: THREE.MOUSE.ROTATE
			// }
			// controls.touches = {
			// 	ONE: THREE.TOUCH.PAN,
			// 	TWO: THREE.TOUCH.DOLLY_ROTATE
			// }
			/*
			    环境纹理
			 */
			this.getfile("./static/images/venice_sunset_1k.hdr").then(res=>{
				new RGBELoader()
				.setDataType( THREE.UnsignedByteType )
				.load( res, ( texture ) => {
				
					envMap = pmremGenerator.fromEquirectangular( texture ).texture;
					pmremGenerator.dispose();
					scene.environment = envMap;
					// scene.background = envMap;
				}, );
			})
			// new RGBELoader()
			// .setDataType( THREE.UnsignedByteType )
			// .load( 'http://qiniu.3fwallet.com/venice_sunset_1k.hdr', ( texture ) => {
			
			// 	envMap = pmremGenerator.fromEquirectangular( texture ).texture;
			// 	pmremGenerator.dispose();
			// 	scene.environment = envMap;
			// 	// scene.background = envMap;
			// }, );
			/*
			    模型导入http://qiniu.3fwallet.com/Aries.glb
				./static/Soldier.glb
				可使用网络路径或者本地路径
			 */
			that.animate();
			GLTFloader = new GLTFLoader();
			this.getfile("./static/modules/vase.glb").then(res=>{
				GLTFloader.load( res, function ( gltf ) {
					const model1 = gltf.scene;
					model1.position.set( 0,0,0 );
					model1.scale.set( 0.02, 0.02, 0.02 );
					model1.name = 'model1';
					scene.add( model1 );
					that.timeRender();
				}, undefined, function ( e ) {
					console.error( e );
				} );
			})
			// this.getfile("./static/yifu.gltf").then(res=>{
			// 	GLTFloader.load( res, function ( gltf ) {
			// 		const model2 = gltf.scene;
			// 		model2.position.set( 3,0,0 );
			// 		model2.scale.set( 0.02, 0.02, 0.02 );
			// 		model2.name = 'model2';
			// 		scene.add( model2 );
			// 		that.timeRender();
			// 	}, undefined, function ( e ) {
			// 		console.error( e );
			// 	} );
			// })
			// 执行渲染操作，指定场景，相机作为参数
			renderer.render(scene, camera);
			console.log(1);
		},
		/*
			读取文件
		    在ios端会存在文件读取不到的问题，可以使用plus5+的方法读取到需要的文件
			如果不考虑ios端，可以不使用这个方法
		 */
		getfile(e){
			// #ifdef APP-PLUS
			let url = plus.io.convertLocalFileSystemURL( e )
			return new Promise((resolve,reject)=>{
				plus.io.resolveLocalFileSystemURL(url, entry => {
					var reader = null;
					entry.file( file => {
						reader = new plus.io.FileReader();
						reader.onloadend =  ( read )=> {
							resolve(read.target.result)
						};
						reader.readAsDataURL( file );
					}, function ( error ) {
						alert( error.message );
					} );
				},err=>{
					resolve(e)
				})
			})
			// #endif
			// #ifndef APP-PLUS
			return new Promise((resolve,reject)=>{
				resolve(e)
			})
			// #endif
		},
		animate() {
			if (renderEnabled) {
				controls.update();
				this.render();
			}
			requestAnimationFrame( ()=>{
				this.animate()
			} );
		},
		// 动画
		render(){
			renderer.render(scene,camera);//执行渲染操作
		},
		/*
			渲染判断
		    在没有动画的情况下，可以在有需要的时候渲染，提高性能
		 */
		timeRender() {
			//设置为可渲染状态
		    renderEnabled = true;
		    //清除上次的延迟器
		    if (timeOut) {
		        clearTimeout(timeOut);
		    }
			//开启动画时需要一直渲染，不能暂停渲染操作
		    // timeOut = setTimeout(function () {
		    //     renderEnabled = false;
		    // }, 3000);
		},
	}
}
</script>

<style>

.content {
	margin: 0;
	overflow: hidden;
}

.three {
	width: 100%;
}
#threeView{
	width: 100%;
	height: 90vh;
}

</style>
