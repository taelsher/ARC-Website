import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    copy({
      targets: [
        { src: "Projects/*", dest: "dist/Projects" },
        { src: "Media_1/*", dest: "dist/Media_1" },
        {src: "Software/*", dest: "dist/Software"},
        {src: "Projects/personal-pages/*", dest: "dist/Projects/personal-pages"}
      ],
      hook: "writeBundle", // Ensures files are copied after the bundle is written
    }),
  ],
  build: {
    // Your other build configurations here
    outDir: "dist",
  },
});
