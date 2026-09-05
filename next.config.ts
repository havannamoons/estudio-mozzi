import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el server de desarrollo desde el celu por la IP de la red.
  // Sin esto Next bloquea los recursos por seguridad y la página carga SIN
  // JavaScript: se ve bien pero nada interactivo funciona.
  // Solo afecta a `next dev`; en producción no cambia nada.
  allowedDevOrigins: ["192.168.0.44"],
};

export default nextConfig;
