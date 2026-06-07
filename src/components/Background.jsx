import { useEffect, useRef } from "react";
import * as THREE from "three";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.z = 40;

    /* ── 3000 colored particles ── */
    const count = 3000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colors = [
      [0.36, 0.54, 0.96],  // blue
      [0.67, 0.55, 0.98],  // violet
      [0.20, 0.83, 0.60],  // green
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      const c = colors[Math.floor(Math.random() * colors.length)];
      col[i * 3]     = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const stars = new THREE.Points(geo, mat);
    scene.add(stars);

    /* ── Wireframe ring 1 ── */
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(8, 0.5, 16, 80),
      new THREE.MeshBasicMaterial({
        color: 0x5b8af5,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
    );
    torus.position.set(20, -10, -15);
    scene.add(torus);

    /* ── Wireframe ring 2 ── */
    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(5, 0.3, 16, 60),
      new THREE.MeshBasicMaterial({
        color: 0xa78bfa,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      })
    );
    torus2.position.set(-18, 8, -20);
    scene.add(torus2);

    /* ── Mouse parallax ── */
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouseMove);

    /* ── Animation loop ── */
    let t = 0;
    let rafId;
    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.003;

      stars.rotation.y  += 0.0002;
      stars.rotation.x  += 0.0001;

      torus.rotation.x   = t * 0.4;
      torus.rotation.y   = t * 0.3;

      torus2.rotation.x  = -t * 0.25;
      torus2.rotation.z  =  t * 0.35;

      camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    /* ── Resize handler ── */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default Background;
