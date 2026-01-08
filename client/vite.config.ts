import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils")
        }
    },
    server: {
        port: 5173,
       hmr: {
         overlay: false,
       },
       allowedHosts: [
        "fhs2466-01",
        "fhs2466-02",
        "fhs2466-03",
        "fhs2466-04",
        "fhs2466-05",
        "fhs2466-06",
        "fhs2466-07",
        "fhs2466-08",
        "fhs2466-09",
        "fhs2466-10",
        "fhs2466-11",
        "fhs2466-12",
        "fhs2466-13",
        "fhs2466-14",
        "fhs2466-15",
        "fhs2466-16",
        "fhs2466-17",
        "fhs2466-18"
       ]
    },
})
