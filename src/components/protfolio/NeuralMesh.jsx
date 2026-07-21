import { useEffect, useRef } from "react";
import * as THREE from "three";

const NeuralMesh = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const COUNT = 140;
    const positions = new Float32Array(COUNT * 3);
    const nodes = [];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 60;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const nodeMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 1.4,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(nodeGeo, nodeMat);
    scene.add(points);

    // Connection lines between nearby nodes
    const linePositions = [];
    const lineColors = [];
    const c1 = new THREE.Color(0x00f5ff);
    const c2 = new THREE.Color(0xbd00ff);
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 18) {
          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
          const mix = (dist / 18);
          const col = c1.clone().lerp(c2, mix);
          lineColors.push(col.r, col.g, col.b, col.r, col.g, col.b);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.add(group);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!reduceMotion) {
        group.rotation.y += 0.0008;
        group.rotation.x += 0.0003;
        mouse.x += (mouse.tx - mouse.x) * 0.04;
        mouse.y += (mouse.ty - mouse.y) * 0.04;
        group.position.x = mouse.x * 6;
        group.position.y = -mouse.y * 4;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      nodeGeo.dispose();
      lineGeo.dispose();
      nodeMat.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default NeuralMesh;