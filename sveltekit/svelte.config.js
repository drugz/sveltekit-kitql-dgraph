import adapter from '@sveltejs/adapter-auto';
// import staticAdapter from '@sveltejs/adapter-static';
// import cloudflareAdapter from '@sveltejs/adapter-cloudflare';
// import cloudflareWorkersAdapter from '@sveltejs/adapter-cloudflare-workers';
// import netlifyAdapter from '@sveltejs/adapter-netlify';
// import vercelAdapter from '@sveltejs/adapter-vercel';
// import nodeAdapter from '@sveltejs/adapter-node';
// import multiAdapter from '@macfja/svelte-multi-adapter';
// More adapters: https://sveltesociety.dev/components/#adapters
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	experimental: {
		useVitePreprocess: true
	},
	kit: {
		// adapter: multiAdapter([staticAdapter(/* ... */), nodeAdapter(/* ... */)]),
		adapter: adapter(),
        
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		
		// For hot-module reloading in SvelteKit with Vite 
		vite: {
			server: {
			  watch: {
				usePolling: true,
			  },
			  hmr: {
				// port: 15319,
				port: 24678,
			  },
			},
		  },
	}
};

export default config;
