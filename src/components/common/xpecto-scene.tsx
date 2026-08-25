"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function XpectoScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 7;

    const machine = new THREE.Group();
    const outer = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.45, 28, 18)),
      new THREE.LineBasicMaterial({ color: "#f0ecdc", transparent: true, opacity: 0.65 }),
    );
    const inner = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(0.92, 18, 12)),
      new THREE.LineBasicMaterial({ color: "#6366f1", transparent: true, opacity: 0.9 }),
    );
    inner.rotation.set(Math.PI / 2, 0.25, 0);
    machine.add(outer, inner);

    const rings = [
      [1.75, 0.018, "#f0ecdc", [Math.PI / 2, 0.2, 0]],
      [2.05, 0.012, "#6366f1", [0.35, Math.PI / 3, 0]],
      [2.35, 0.008, "#f0ecdc", [0.8, 0.1, Math.PI / 4]],
    ] as const;
    rings.forEach(([radius, tube, color, rotation]) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 8, 96),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75 }),
      );
      ring.rotation.set(rotation[0], rotation[1], rotation[2]);
      ring.userData.spin = 0.00015 + radius * 0.000025;
      machine.add(ring);
    });
    const equator = new THREE.Mesh(
      new THREE.TorusGeometry(1.48, 0.018, 8, 96),
      new THREE.MeshBasicMaterial({ color: "#f0ecdc", transparent: true, opacity: 0.7 }),
    );
    equator.rotation.x = Math.PI / 2;
    machine.add(equator);
    scene.add(machine);

    const points = Array.from({ length: 130 }, () => new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 5,
    ));
    const particles = new THREE.Points(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.PointsMaterial({ color: "#f0ecdc", size: 0.025, transparent: true, opacity: 0.7 }),
    );
    scene.add(particles);

    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointerMove);

    let frame = 0;
    const animate = (time: number) => {
      const seconds = time * 0.001;
      machine.rotation.x = Math.sin(seconds * 0.45) * 0.12 + pointer.y * 0.18;
      machine.rotation.y = seconds * 0.42 + pointer.x * 0.24;
      machine.rotation.z = Math.sin(seconds * 0.32) * 0.08;
      machine.scale.setScalar(1 + Math.sin(seconds * 1.4) * 0.035);
      machine.position.x = THREE.MathUtils.lerp(machine.position.x, pointer.x * 0.25, 0.025);
      machine.position.y = THREE.MathUtils.lerp(machine.position.y, pointer.y * 0.2, 0.025);
      machine.children.forEach((child) => {
        if (typeof child.userData.spin === "number") child.rotation.z += child.userData.spin;
      });
      particles.rotation.y = time * 0.000025;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="xpecto-scene" aria-hidden="true" />;
}
