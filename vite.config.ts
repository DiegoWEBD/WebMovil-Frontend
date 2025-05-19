import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: 'MiBarrio',
				short_name: 'MiBarrio',
				start_url: '/',
				display: 'standalone',
				description:
					'Aplicación para registrar tiendas dentro de un vecindario y gestionar sus ventas y entregas a vecinos registrados como clientes.',
				background_color: '#171823',
				theme_color: '#171823',
				icons: [
					{
						src: '/icons/192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
})
