import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  server: {
    host: '0.0.0.0',
    port: 5173, // use Render's PORT if available
    allowedHosts: ['text-to-speech-frontend-lywk.onrender.com']
  },
});
