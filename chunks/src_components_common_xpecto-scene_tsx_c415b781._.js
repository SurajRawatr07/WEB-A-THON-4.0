(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/common/xpecto-scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XpectoScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function XpectoScene() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "XpectoScene.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                canvas,
                alpha: true,
                antialias: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](38, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
            camera.position.z = 7;
            const machine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const outer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WireframeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1.45, 28, 18)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: "#f0ecdc",
                transparent: true,
                opacity: 0.65
            }));
            const inner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WireframeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.92, 18, 12)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: "#6366f1",
                transparent: true,
                opacity: 0.9
            }));
            inner.rotation.set(Math.PI / 2, 0.25, 0);
            machine.add(outer, inner);
            const rings = [
                [
                    1.75,
                    0.018,
                    "#f0ecdc",
                    [
                        Math.PI / 2,
                        0.2,
                        0
                    ]
                ],
                [
                    2.05,
                    0.012,
                    "#6366f1",
                    [
                        0.35,
                        Math.PI / 3,
                        0
                    ]
                ],
                [
                    2.35,
                    0.008,
                    "#f0ecdc",
                    [
                        0.8,
                        0.1,
                        Math.PI / 4
                    ]
                ]
            ];
            rings.forEach({
                "XpectoScene.useEffect": (param)=>{
                    let [radius, tube, color, rotation] = param;
                    const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](radius, tube, 8, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color,
                        transparent: true,
                        opacity: 0.75
                    }));
                    ring.rotation.set(rotation[0], rotation[1], rotation[2]);
                    ring.userData.spin = 0.00015 + radius * 0.000025;
                    machine.add(ring);
                }
            }["XpectoScene.useEffect"]);
            const equator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.48, 0.018, 8, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: "#f0ecdc",
                transparent: true,
                opacity: 0.7
            }));
            equator.rotation.x = Math.PI / 2;
            machine.add(equator);
            scene.add(machine);
            const points = Array.from({
                length: 130
            }, {
                "XpectoScene.useEffect.points": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 5)
            }["XpectoScene.useEffect.points"]);
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: "#f0ecdc",
                size: 0.025,
                transparent: true,
                opacity: 0.7
            }));
            scene.add(particles);
            const pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
            const onPointerMove = {
                "XpectoScene.useEffect.onPointerMove": (event)=>{
                    pointer.x = event.clientX / window.innerWidth * 2 - 1;
                    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
                }
            }["XpectoScene.useEffect.onPointerMove"];
            const resize = {
                "XpectoScene.useEffect.resize": ()=>{
                    const width = canvas.clientWidth;
                    const height = canvas.clientHeight;
                    if (!width || !height) return;
                    renderer.setSize(width, height, false);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            }["XpectoScene.useEffect.resize"];
            const observer = new ResizeObserver(resize);
            observer.observe(canvas);
            window.addEventListener("pointermove", onPointerMove);
            let frame = 0;
            const animate = {
                "XpectoScene.useEffect.animate": (time)=>{
                    const seconds = time * 0.001;
                    machine.rotation.x = Math.sin(seconds * 0.45) * 0.12 + pointer.y * 0.18;
                    machine.rotation.y = seconds * 0.42 + pointer.x * 0.24;
                    machine.rotation.z = Math.sin(seconds * 0.32) * 0.08;
                    machine.scale.setScalar(1 + Math.sin(seconds * 1.4) * 0.035);
                    machine.position.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(machine.position.x, pointer.x * 0.25, 0.025);
                    machine.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(machine.position.y, pointer.y * 0.2, 0.025);
                    machine.children.forEach({
                        "XpectoScene.useEffect.animate": (child)=>{
                            if (typeof child.userData.spin === "number") child.rotation.z += child.userData.spin;
                        }
                    }["XpectoScene.useEffect.animate"]);
                    particles.rotation.y = time * 0.000025;
                    renderer.render(scene, camera);
                    frame = requestAnimationFrame(animate);
                }
            }["XpectoScene.useEffect.animate"];
            frame = requestAnimationFrame(animate);
            return ({
                "XpectoScene.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    observer.disconnect();
                    window.removeEventListener("pointermove", onPointerMove);
                    renderer.dispose();
                    scene.traverse({
                        "XpectoScene.useEffect": (object)=>{
                            if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] || object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"] || object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"]) {
                                object.geometry.dispose();
                                if (Array.isArray(object.material)) object.material.forEach({
                                    "XpectoScene.useEffect": (material)=>material.dispose()
                                }["XpectoScene.useEffect"]);
                                else object.material.dispose();
                            }
                        }
                    }["XpectoScene.useEffect"]);
                }
            })["XpectoScene.useEffect"];
        }
    }["XpectoScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "xpecto-scene",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/common/xpecto-scene.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, this);
}
_s(XpectoScene, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = XpectoScene;
var _c;
__turbopack_context__.k.register(_c, "XpectoScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/xpecto-scene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/common/xpecto-scene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_common_xpecto-scene_tsx_c415b781._.js.map