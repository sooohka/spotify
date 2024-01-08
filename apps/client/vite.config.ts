import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        {
          find: "panda",
          replacement: path.resolve(__dirname, "styled-system"),
        },
      ],
    },
  };
});
