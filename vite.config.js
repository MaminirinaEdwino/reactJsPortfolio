import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
			manifest: {
				display: "standalone",
				scope: "/",
				start_url: "/",
				theme_color: "f69435",
				icons: [
					{
						src: "/logo.svg",
						sizes: "512x512",
						type: "image/svg+xml",
						purpose: "any maskable"
					}
				]
			},
			workbox: {
				runtimeCaching: [{
					urlPattern: ({ url }) => {
						return url.pathname.startsWith("/");
					},
					handler: "CacheFirst",
					options: {
						cacheName: "api-cache",
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}],
				globPatterns: ["**/*"]
			}
		})
  ]
  
})
