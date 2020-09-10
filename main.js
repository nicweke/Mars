const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({

});

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);

const starsGeometry = new THREE.SphereGeometry(4, 32, 32);
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

const light = new THREE.DirectionalLight(0xCCCCCC, 1);



//renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

light.position.set(5, 3, 5);


material.map = new THREE.TextureLoader().load('mars.jpg');
material.bumpMap = new THREE.TextureLoader().load('bump.jpg');
material.bumpScale = 0.015;


starsMaterial.map = new THREE.TextureLoader().load('stars.jpg');
starsMaterial.side = THREE.BackSide;


scene.add(light);
scene.add(starsMesh);
scene.add(mesh);



document.addEventListener('mousemove', (e) => {
    camera.position.x = (e.x - (window.innerWidth / 2)) * 0.005;
    camera.lookAt(scene.position);
});



const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y -= 0.01;
};



animate();