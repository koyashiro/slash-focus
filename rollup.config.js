import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/content-script.ts",
  output: [
    {
      file: "dist/content-script.js",
      format: "es",
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" },
        { src: "images/icon-*.png", dest: "dist/images" },
      ],
    }),
    typescript(),
    terser(),
  ],
};
