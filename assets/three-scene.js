import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js";

const stage = document.getElementById("three-stage");

if (stage && window.WebGLRenderingContext) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  stage.appendChild(renderer.domElement);
  camera.position.set(0, 0.15, 8.6);

  const world = new THREE.Group();
  world.rotation.z = -0.025;
  scene.add(world);

  const gold = new THREE.MeshStandardMaterial({
    color: 0xe8b631,
    emissive: 0x513000,
    emissiveIntensity: 0.2,
    metalness: 0.9,
    roughness: 0.22,
  });
  const blue = new THREE.MeshPhysicalMaterial({
    color: 0x0756cf,
    metalness: 0.55,
    roughness: 0.21,
    clearcoat: 0.95,
    clearcoatRoughness: 0.15,
  });
  const blueDark = new THREE.MeshPhysicalMaterial({
    color: 0x062d73,
    metalness: 0.7,
    roughness: 0.24,
    clearcoat: 0.75,
  });
  const wax = new THREE.MeshPhysicalMaterial({
    color: 0xd94d0d,
    emissive: 0x4c1000,
    emissiveIntensity: 0.18,
    metalness: 0.62,
    roughness: 0.3,
    clearcoat: 0.9,
    clearcoatRoughness: 0.2,
  });
  const paper = new THREE.MeshPhysicalMaterial({
    color: 0xf8f3e8,
    roughness: 0.82,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  // Phong bì gấp bằng các mặt phẳng Three.js, nằm phía sau con dấu.
  const envelope = new THREE.Group();
  envelope.position.set(0.05, -1.6, -0.5);
  envelope.rotation.x = -0.08;
  world.add(envelope);

  const envelopeBack = new THREE.Mesh(new THREE.PlaneGeometry(5.3, 2.6), paper);
  envelopeBack.position.z = -0.12;
  envelope.add(envelopeBack);

  function triangle(points, material) {
    const shape = new THREE.Shape();
    shape.moveTo(points[0][0], points[0][1]);
    shape.lineTo(points[1][0], points[1][1]);
    shape.lineTo(points[2][0], points[2][1]);
    shape.closePath();
    return new THREE.Mesh(new THREE.ShapeGeometry(shape), material);
  }

  const leftFold = triangle([[-2.65, -1.3], [-2.65, 1.3], [0.15, -0.35]], paper);
  leftFold.position.z = 0.01;
  envelope.add(leftFold);

  const rightFold = triangle([[2.65, -1.3], [2.65, 1.3], [0.15, -0.35]], paper);
  rightFold.position.z = 0.015;
  envelope.add(rightFold);

  const bottomFold = triangle([[-2.65, -1.3], [2.65, -1.3], [0.15, 0.45]], paper);
  bottomFold.position.z = 0.03;
  envelope.add(bottomFold);

  const foldEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.PlaneGeometry(5.3, 2.6)),
    new THREE.LineBasicMaterial({ color: 0xc7bca8, transparent: true, opacity: 0.42 }),
  );
  foldEdges.position.z = 0.04;
  envelope.add(foldEdges);

  // Con dấu sáp 3D.
  const seal = new THREE.Group();
  seal.position.set(0.12, -0.75, 0.25);
  world.add(seal);

  const sealBody = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.03, 0.24, 72), wax);
  sealBody.rotation.x = Math.PI / 2;
  seal.add(sealBody);

  const sealBorder = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.052, 15, 80), gold);
  sealBorder.position.z = 0.14;
  seal.add(sealBorder);

  const sealFace = new THREE.Mesh(
    new THREE.CircleGeometry(0.69, 64),
    new THREE.MeshStandardMaterial({ color: 0xb93606, metalness: 0.48, roughness: 0.4 }),
  );
  sealFace.position.z = 0.135;
  seal.add(sealFace);

  for (let index = 0; index < 20; index += 1) {
    const angle = (index / 20) * Math.PI * 2;
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.023, 9, 7), gold);
    bead.position.set(Math.cos(angle) * 0.6, Math.sin(angle) * 0.6, 0.17);
    seal.add(bead);
  }

  // Mũ tốt nghiệp 3D.
  const cap = new THREE.Group();
  cap.position.set(0.05, 1.37, 0.25);
  cap.rotation.set(-0.56, -0.48, 0.05);
  world.add(cap);

  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.61, 0.82, 0.72, 4), blueDark);
  crown.position.y = -0.13;
  crown.rotation.y = Math.PI / 4;
  cap.add(crown);

  const board = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.13, 2.25), blue);
  board.position.y = 0.38;
  board.rotation.y = Math.PI / 4;
  cap.add(board);

  const boardEdge = new THREE.LineSegments(
    new THREE.EdgesGeometry(board.geometry),
    new THREE.LineBasicMaterial({ color: 0xffd55e, transparent: true, opacity: 0.78 }),
  );
  boardEdge.position.copy(board.position);
  boardEdge.rotation.copy(board.rotation);
  cap.add(boardEdge);

  const capButton = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 14), gold);
  capButton.position.y = 0.5;
  cap.add(capButton);

  const tasselCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.02, 0.53, 0),
    new THREE.Vector3(0.45, 0.57, 0.18),
    new THREE.Vector3(0.9, 0.31, 0.48),
    new THREE.Vector3(1.04, -0.3, 0.5),
  ]);
  cap.add(new THREE.Mesh(new THREE.TubeGeometry(tasselCurve, 38, 0.025, 8, false), gold));
  const tasselEnd = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.12, 0.37, 16), gold);
  tasselEnd.position.set(1.04, -0.48, 0.5);
  cap.add(tasselEnd);

  // Các quỹ đạo ánh sáng và hạt lấp lánh.
  const orbitA = new THREE.Mesh(
    new THREE.TorusGeometry(2.55, 0.014, 8, 140),
    new THREE.MeshBasicMaterial({ color: 0xe9b72e, transparent: true, opacity: 0.4 }),
  );
  orbitA.rotation.set(1.15, 0.18, -0.22);
  world.add(orbitA);

  const orbitB = new THREE.Mesh(
    new THREE.TorusGeometry(2.08, 0.01, 8, 130),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 }),
  );
  orbitB.rotation.set(1.38, -0.27, 0.35);
  world.add(orbitB);

  const particleCount = coarsePointer ? 110 : 210;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const goldColor = new THREE.Color(0xffd45e);
  const blueColor = new THREE.Color(0x168af4);

  for (let index = 0; index < particleCount; index += 1) {
    const offset = index * 3;
    positions[offset] = (Math.random() - 0.5) * 7;
    positions[offset + 1] = (Math.random() - 0.5) * 7;
    positions[offset + 2] = (Math.random() - 0.5) * 3 - 0.6;
    const color = goldColor.clone().lerp(blueColor, Math.random() * 0.62);
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      size: coarsePointer ? 0.034 : 0.027,
      transparent: true,
      opacity: 0.72,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  world.add(particles);

  scene.add(new THREE.HemisphereLight(0xeafaff, 0x08265d, 2.2));
  const warmLight = new THREE.PointLight(0xffcf64, 48, 16, 2);
  warmLight.position.set(3.4, 4.3, 4.2);
  scene.add(warmLight);
  const rimLight = new THREE.PointLight(0x168af4, 34, 15, 2);
  rimLight.position.set(-3.6, 0.2, 3.2);
  scene.add(rimLight);

  const pointer = new THREE.Vector2();
  const target = new THREE.Vector2();
  let previousTime = 0;

  function resize() {
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.2 : 1.55));
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();

    if (rect.width < 480) {
      world.scale.setScalar(0.82);
      world.position.set(0.15, 0.08, 0);
    } else {
      world.scale.setScalar(1);
      world.position.set(0, 0, 0);
    }
    if (reducedMotion) renderer.render(scene, camera);
  }

  function move(event) {
    const rect = stage.getBoundingClientRect();
    target.x = THREE.MathUtils.clamp(((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2, -1, 1);
    target.y = THREE.MathUtils.clamp(((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2, -1, 1);
  }

  function animate(time) {
    const elapsed = time * 0.001;
    const delta = Math.min((time - previousTime) * 0.001, 0.1);
    previousTime = time;
    pointer.lerp(target, 0.055);

    cap.rotation.x = -0.56 + pointer.y * 0.06 + Math.sin(elapsed * 0.68) * 0.035;
    cap.rotation.y = -0.48 + pointer.x * 0.15 + Math.sin(elapsed * 0.38) * 0.07;
    cap.position.y = 1.37 + Math.sin(elapsed * 0.7) * 0.08;
    envelope.rotation.y = pointer.x * 0.018;
    seal.rotation.z = Math.sin(elapsed * 0.4) * 0.025;
    orbitA.rotation.z += delta * 0.1;
    orbitB.rotation.z -= delta * 0.075;
    particles.rotation.y = elapsed * 0.024;
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", resize, { passive: true });
  if (!coarsePointer && !reducedMotion) window.addEventListener("pointermove", move, { passive: true });
  resize();

  if (reducedMotion) renderer.render(scene, camera);
  else renderer.setAnimationLoop(animate);

  document.addEventListener("visibilitychange", function () {
    if (!reducedMotion) renderer.setAnimationLoop(document.hidden ? null : animate);
  });
}
