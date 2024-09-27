<template>
  <div class="body">
    <header>
      <van-nav-bar title="我的藏品" left-arrow @click-left="toUserCenter" />
    </header>
  </div>
</template>

<script>
// 导入整个three.js核心库
import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "DemoOne",
  data() {
    return {
      cube: null,
      scene: null,
      axesHelper: null, // 坐标辅助器
      camera: null,
      renderer: null, // WebGL渲染器
      control: null, // 轨道控制器
    };
  },
  mounted() {
    this.init();
    this.animat();
  },
  computed: {},
  methods: {
    toUserCenter() {
      this.$router.push("/home");
    },
    init() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#ccc");
      this.scene.environment = new THREE.Color("#ccc");

      const geometry = new THREE.BoxGeometry(6, 4, 0.1);
      // 创建法线网格材质
      const materialFront = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(require("../../assets/长城.png")), //显示前
      });
      const materialBack = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(require("../../assets/长城.png")), //显示后
      });
      const materialOther = new THREE.MeshNormalMaterial(); //显示其他
      // const materialOther = new THREE.MeshBasicMaterial({ color: 0xffffff }); //其余面
      const material = [
        materialOther,
        materialOther,
        materialOther,
        materialOther,
        materialFront, //前img
        materialBack, //后img
      ];

      // 创建网格
      this.cube = new THREE.Mesh(geometry, material);
      this.cube.position.y = 3;
      this.scene.add(this.cube);

      // 创建坐标辅助器
      // let axesHelper = new THREE.AxesHelper(70);
      // this.scene.add(axesHelper);

      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
      this.camera.position.set(5, 5, 15);
      this.camera.lookAt(0, 0, 0);

      // 创建一个WebGL渲染器
      this.renderer = new THREE.WebGLRenderer({
        antialias: true, //抗锯齿
      });
      this.renderer.setSize(width, height); // 设置渲染画布的尺寸
      document.body.appendChild(this.renderer.domElement); // 把渲染结果添加到页面上

      // 创建轨道控制器,添加阻尼效果
      this.control = new OrbitControls(this.camera, this.renderer.domElement);
      this.control.enableDamping = true;

      // 添加直线光源
      const light1 = new THREE.DirectionalLight(0xffffff, 1);
      light1.position.set(0, 10, 10);
      const light2 = new THREE.DirectionalLight(0xffffff, 1);
      light2.position.set(10, 10, -10);
      const light3 = new THREE.DirectionalLight(0xffffff, 1);
      light3.position.set(0, 10, 10);
      this.scene.add(light1, light2, light3);

      //添加网格地面
      const grid = new THREE.GridHelper(10, 10);
      this.scene.add(grid);

      //监听画面变化，更新渲染画面,实现尺寸适配
      window.addEventListener("resize", () => {
        //更新摄像头
        this.camera.aspect = window.innerWidth / window.innerHeight;
        //更新摄像机的投影矩阵
        this.camera.updateProjectionMatrix();

        //更新渲染器
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        //设置渲染器的像素比
        this.renderer.setPixelRatio(window.devicePixelRatio);
      });
    },
    animat() {
      // 渲染场景
      this.renderer.render(this.scene, this.camera);
      // requestAnimationFrame - 周期性执行，默认每秒60次
      // 渲染下一帧 - 再次执行渲染函数
      requestAnimationFrame(this.animat);

      // 让物体沿着Y轴不断旋转;
      this.cube.rotation.y += 0.001;

      this.control.update();
      this.renderer.render(this.scene, this.camera);
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.body {
  overflow: hidden;
}
</style>
