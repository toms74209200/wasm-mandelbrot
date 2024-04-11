"use client";

import { useContext, useRef } from "react";
import { MandelbrotContext } from "@/app/_components/MandelbrotProvider";

const X_MIN = -1.5;
const X_MAX = 0.5;
const Y_MIN = -1.0;
const Y_MAX = 1.0;
const MAX_ITER = 64;

const draw = (
  ctx: CanvasRenderingContext2D,
  canvas_w: number,
  canvas_h: number,
  data: Uint8Array
) => {
  const img = new ImageData(new Uint8ClampedArray(data), canvas_w, canvas_h);
  ctx.putImageData(img, 0, 0);
};

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { generate_mandelbrot_set, draw_mandelbrot_set } =
    useContext(MandelbrotContext);

  const onClick = () => {
    draw_mandelbrot_set();
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const generateStartTime = Date.now();
    const data = generate_mandelbrot_set(
      canvas.width,
      canvas.height,
      X_MIN,
      X_MAX,
      Y_MIN,
      Y_MAX,
      MAX_ITER
    );
    const generateEndTime = Date.now();
    const darwStartTime = Date.now();
    draw(context, canvas.width, canvas.height, data);
    const darwEndTime = Date.now();
    const elapsed = generateEndTime - generateStartTime;
    console.log(`\tgenerate:wasm\tgenerate_elapsed:${elapsed}[ms]`);
    console.log(`\tdraw: js\tdraw_elapsed:${darwEndTime - darwStartTime}[ms]`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <button onClick={onClick} className="border rounded p-1">
        render
      </button>
      <canvas id="canvas_wasm" width={1200} height={1200}></canvas>
      <canvas
        id="canvas_hybrid"
        width={1200}
        height={1200}
        ref={canvasRef}
      ></canvas>
    </main>
  );
};

export default Home;
