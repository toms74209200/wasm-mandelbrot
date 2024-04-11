"use client";
import { createContext } from "react";

interface MandelbrotContextProps {
  generate_mandelbrot_set: (
    canvas_w: number,
    canvas_h: number,
    x_min: number,
    x_max: number,
    y_min: number,
    y_max: number,
    max_iter: number
  ) => Uint8Array;
  draw_mandelbrot_set: () => void;
}

export const MandelbrotContext = createContext<MandelbrotContextProps>({
  generate_mandelbrot_set: () => new Uint8Array(),
  draw_mandelbrot_set: () => {},
});

export const MandelbrotProvider = async ({ children }: any) => {
  const { generate_mandelbrot_set, draw_mandelbrot_set } = await import(
    "../../../mandelbrot/pkg/mandelbrot"
  );
  return (
    <MandelbrotContext.Provider
      value={{ generate_mandelbrot_set, draw_mandelbrot_set }}
    >
      {children}
    </MandelbrotContext.Provider>
  );
};
