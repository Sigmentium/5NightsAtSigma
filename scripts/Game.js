const canvas = document.getElementById('Main');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

let camera;

let MainScene = () => {
    // Камера
    camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 2, -5), scene);
    camera.attachControl(canvas, true);
    camera.speed = 0.1;

    // Свет
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1.0;

    // Земля
    // const ground = BABYLON.MeshBuilder.CreateGround('ground', {width:20, height:20}, scene);

    // Объект
    // BABYLON.SceneLoader.ImportMesh(
    //     null,
    //     "assets/models/map/",
    //     "",
    //     scene
    // );

    engine.runRenderLoop(() => {
        scene.render();
    });
}

MainScene();

window.addEventListener('resize', () => {
    engine.resize();
});

window.addEventListener('keydown', (event) => {
    if (event.key === "w" || event.key === "ц") {
        camera.position.z += 0.1;
    }
    else if (event.key === "s" || event.key === "ы") {
        camera.position.z -= 0.1;
    }
    else if (event.key === "a" || event.key === "ф") {
        camera.position.x -= 0.1;
    }
    else if (event.key === "d" || event.key === "в") {
        camera.position.x += 0.1;
    }
    else if (event.key === "q" || event.key === "й") {
        camera.position.y += 0.1;
    }
    else if (event.key === "e" || event.key === "у") {
        camera.position.y -= 0.1;
    }
});