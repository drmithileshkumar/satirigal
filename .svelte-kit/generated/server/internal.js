
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: true,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon.png\" />\n\t<link rel=\"manifest\" crossorigin=\"use-credentials\" href=\"" + assets + "/satirigalManifest.json\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\t<meta name=\"mobile-web-app-capable\" content=\"yes\" />\n\t<!-- <meta name=\"description\" content=\"Practice mathematics for all ages\" />\n\t\t<meta name=\"keywords\" content=\"Mathematics\" /> -->\n\t<meta name=\"author\" content=\"Dr Mithilesh Kumar\" />\n\t<link rel=\"stylesheet\" href=\"/app.css\" />\n\t<link rel=\"stylesheet\" href=\"/common.css\" />\n\t<meta name=\"p:domain_verify\" content=\"bde3ab272bd04116c2f70dab0a1db0f8\" />\n\t<!-- <script type=\"text/javascript\" src=\"https://otpless.com/auth.js\"></script> -->\n\t<script defer src=\"https://checkout.razorpay.com/v1/checkout.js\"></script>\n\t<!-----------------------------------MATHJAX----------------------------->\n\t<script defer src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>\n\t<script type=\"text/javascript\" id=\"MathJax-script\" async\n\t\tsrc=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js\"></script>\n\t<!-------------------------------------KATEX----------------------------->\n\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css\"\n\t\tintegrity=\"sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0\" crossorigin=\"anonymous\">\n\t<script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js\"\n\t\tintegrity=\"sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4\"\n\t\tcrossorigin=\"anonymous\"></script>\n\t<script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js\"\n\t\tintegrity=\"sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05\" crossorigin=\"anonymous\"\n\t\tonload=\"renderMathInElement(document.body);\"></script>\n\t<!-- Material Icons -->\n\t<link href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" rel=\"stylesheet\" />\n\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t<link href=\"https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&display=swap\" rel=\"stylesheet\">\n\t<!-- Roboto -->\n\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap\" />\n\t<!-- Roboto Mono -->\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto+Mono\" />\n\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" media=\"(prefers-color-scheme: light)\" />\n\t\t<link rel=\"stylesheet\" href=\"/dark.css\" media=\"screen and (prefers-color-scheme: dark)\"/> -->\n\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" id=\"theme\" />\n\t\t<link rel=\"stylesheet\" href=\"/app.css\" id=\"theme\" /> -->\n\t" + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "us2qpr"
};

export function get_hooks() {
	return import("../../../src/hooks.server.js");
}

export { set_assets, set_building, set_private_env, set_public_env };