import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": "http://localhost:8080",
		},
	},
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
	},
});
