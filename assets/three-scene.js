import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js";

const stage = document.getElementById("webgl-stage");

if (stage && window.WebGLRenderingContext) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  stage.appendChild(renderer.domElement);

  camera.position.set(0, 0.25, 8.5);

  const graduationGroup = new THREE.Group();
  const capGroup = new THREE.Group();
  graduationGroup.add(capGroup);
  scene.add(graduationGroup);

  const darkMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x10172c,
    metalness: 0.7,
    roughness: 0.25,
    clearcoat: 0.75,
    clearcoatRoughness: 0.24,
  });
  const boardMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x17213e,
    metalness: 0.72,
    roughness: 0.2,
    clearcoat: 0.95,
    clearcoatRoughness: 0.18,
  });
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xf6c866,
    emissive: 0x5e3b08,
    emissiveIntensity: 0.28,
    metalness: 0.9,
    roughness: 0.24,
  });

  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.95, 0.88, 4, 1, false), darkMaterial);
  crown.position.y = -0.13;
  crown.rotation.y = Math.PI / 4;
  capGroup.add(crown);

  const board = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.14, 2.62), boardMaterial);
  board.position.y = 0.47;
  board.rotation.y = Math.PI / 4;
  capGroup.add(board);

  const boardEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(board.geometry),
    new THREE.LineBasicMaterial({ color: 0xf6c866, transparent: true, opacity: 0.5 }),
  );
  boardEdges.position.copy(board.position);
  boardEdges.rotation.copy(board.rotation);
  capGroup.add(boardEdges);

  const button = new THREE.Mesh(new THREE.SphereGeometry(0.105, 22, 16), goldMaterial);
  button.position.y = 0.62;
  capGroup.add(button);

  const tasselCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.02, 0.66, 0.01),
    new THREE.Vector3(0.42, 0.73, 0.18),
    new THREE.Vector3(0.95, 0.54, 0.52),
    new THREE.Vector3(1.13, -0.2, 0.65),
  ]);
  const tassel = new THREE.Mesh(new THREE.TubeGeometry(tasselCurve, 40, 0.026, 9, false), goldMaterial);
  capGroup.add(tassel);

  const tasselEnd = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.14, 0.45, 18), goldMaterial);
  tasselEnd.position.set(1.13, -0.42, 0.65);
  tasselEnd.rotation.z = -0.08;
  capGroup.add(tasselEnd);

  const haloMaterial = new THREE.MeshBasicMaterial({ color: 0x65dcff, transparent: true, opacity: 0.14 });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(2.28, 0.011, 8, 150), haloMaterial);
  halo.rotation.x = Math.PI / 2.35;
  halo.rotation.z = -0.28;
  graduationGroup.add(halo);

  const goldHalo = new THREE.Mesh(
    new THREE.TorusGeometry(1.82, 0.008, 8, 140),
    new THREE.MeshBasicMaterial({ color: 0xf6c866, transparent: true, opacity: 0.21 }),
  );
  goldHalo.rotation.x = Math.PI / 2.1;
  goldHalo.rotation.y = 0.42;
  graduationGroup.add(goldHalo);

  const particleCount = coarsePointer ? 420 : 820;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const goldColor = new THREE.Color(0xf6c866);
  const blueColor = new THREE.Color(0x65dcff);

  for (let index = 0; index < particleCount; index += 1) {
    const radius = 2.5 + Math.random() * 5.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const offset = index * 3;
    positions[offset] = radius * Math.sin(phi) * Math.cos(theta);
    positions[offset + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
    positions[offset + 2] = radius * Math.cos(phi);

    const mixedColor = goldColor.clone().lerp(blueColor, Math.random());
    colors[offset] = mixedColor.r;
    colors[offset + 1] = mixedColor.g;
    colors[offset + 2] = mixedColor.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      size: coarsePointer ? 0.024 : 0.018,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.72,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  scene.add(particles);

  function createCodeSprite(text, color) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 96;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "500 32px monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = color;
    context.fillText(text, 128, 48);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.34, depthWrite: false });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.28, 0.48, 1);
    return sprite;
  }

  const codeSprites = [
    ["</>", "#65dcff", -2.3, 1.35, -0.8],
    ["{ 2026 }", "#f6c866", 2.45, 1.58, -1.3],
    ["0101", "#65dcff", 2.52, -1.42, -0.5],
    ["commit: dream", "#f6c866", -2.28, -1.52, -1.4],
  ].map(([text, color, x, y, z]) => {
    const sprite = createCodeSprite(text, color);
    sprite.position.set(x, y, z);
    graduationGroup.add(sprite);
    return sprite;
  });

  scene.add(new THREE.HemisphereLight(0x8cdfff, 0x050713, 1.8));

  const keyLight = new THREE.PointLight(0xffd57e, 42, 18, 2);
  keyLight.position.set(3.7, 4.4, 4.6);
  scene.add(keyLight);

  const rimLight = new THREE.PointLight(0x3ccfff, 34, 15, 2);
  rimLight.position.set(-4.2, 0.4, 2.4);
  scene.add(rimLight);

  const pointer = new THREE.Vector2(0, 0);
  const pointerTarget = new THREE.Vector2(0, 0);
  let scrollPosition = window.scrollY;
  let previousTime = 0;

  function placeScene() {
    const mobile = window.innerWidth <= 960;
    const narrow = window.innerWidth <= 640;
    const pixelRatioCap = coarsePointer ? 1.25 : 1.6;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioCap));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    if (narrow) {
      graduationGroup.position.set(1.55, 2.72, -1.25);
      graduationGroup.scale.setScalar(0.75);
    } else if (mobile) {
      graduationGroup.position.set(2.5, 2.08, -0.55);
      graduationGroup.scale.setScalar(0.94);
    } else {
      graduationGroup.position.set(2.45, 0.48, -0.3);
      graduationGroup.scale.setScalar(1.08);
    }
    graduationGroup.userData.baseY = graduationGroup.position.y;

    if (reducedMotion) {
      renderer.render(scene, camera);
    }
  }

  function handlePointer(event) {
    pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
  }

  function render(time) {
    const elapsed = time * 0.001;
    const delta = Math.min((time - previousTime) * 0.001, 0.1);
    previousTime = time;

    pointer.lerp(pointerTarget, 0.055);
    const pageProgress = Math.min(scrollPosition / Math.max(window.innerHeight, 1), 2.5);

    capGroup.rotation.x = -0.18 + pointer.y * 0.08 + Math.sin(elapsed * 0.62) * 0.035;
    capGroup.rotation.y = -0.44 + pointer.x * 0.13 + pageProgress * 0.18 + elapsed * 0.055;
    capGroup.rotation.z = 0.08 + Math.sin(elapsed * 0.38) * 0.025;
    graduationGroup.position.y = graduationGroup.userData.baseY + Math.sin(elapsed * 0.55) * 0.045 - pageProgress * 0.16;

    halo.rotation.z += delta * 0.075;
    goldHalo.rotation.z -= delta * 0.052;
    particles.rotation.y = elapsed * 0.012 + pageProgress * 0.035;
    particles.rotation.x = Math.sin(elapsed * 0.12) * 0.025;
    codeSprites.forEach((sprite, index) => {
      sprite.material.opacity = 0.25 + Math.sin(elapsed * 0.7 + index) * 0.1;
    });

    renderer.render(scene, camera);
  }

  window.addEventListener("resize", placeScene, { passive: true });
  window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;
  }, { passive: true });

  if (!coarsePointer && !reducedMotion) {
    window.addEventListener("pointermove", handlePointer, { passive: true });
  }

  placeScene();

  if (reducedMotion) {
    capGroup.rotation.set(-0.18, -0.32, 0.08);
    renderer.render(scene, camera);
  } else {
    renderer.setAnimationLoop(render);
  }

  document.addEventListener("visibilitychange", () => {
    if (reducedMotion) return;
    renderer.setAnimationLoop(document.hidden ? null : render);
  });
}
