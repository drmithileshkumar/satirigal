const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android/add.jpg","android/add2.jpg","android/app.jpg","android/appview.jpg","android/menu.jpg","app.css","avatar.svg","background.svg","banner.png","banner.svg","common.css","facebook.svg","favicon.png","favicon.svg","help.svg","icons/Apple_logo.svg","icons/chapter.svg","icons/shapes1.svg","instagram.svg","iOS/add.jpg","iOS/add2.jpg","iOS/app.jpg","iOS/share.jpg","landing/banner.svg","mithileshkumar.png","robots.txt","satirigalManifest.json","scorecard.svg","smui-dark.css","smui.css","telegram.svg","twitter.png","user.svg","youtube.svg","service-worker.js"]),
	mimeTypes: {".jpg":"image/jpeg",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.63506482.js","app":"_app/immutable/entry/app.9b50b31b.js","imports":["_app/immutable/entry/start.63506482.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/singletons.35efc5d6.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.66d34cb2.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.9b50b31b.js","_app/immutable/chunks/index.fe0a1c86.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-bc234b49.js')),
			__memo(() => import('./chunks/1-1c9a4bb3.js')),
			__memo(() => import('./chunks/2-9b4438bd.js')),
			__memo(() => import('./chunks/3-2237754c.js')),
			__memo(() => import('./chunks/4-d979a7f1.js')),
			__memo(() => import('./chunks/5-97d4e8fb.js')),
			__memo(() => import('./chunks/6-ed1250ed.js')),
			__memo(() => import('./chunks/7-e0295e5b.js')),
			__memo(() => import('./chunks/8-a0eed156.js')),
			__memo(() => import('./chunks/9-4aa36abb.js')),
			__memo(() => import('./chunks/10-f373b7b5.js')),
			__memo(() => import('./chunks/11-ef14a490.js')),
			__memo(() => import('./chunks/12-06dfb93f.js')),
			__memo(() => import('./chunks/13-c79651b5.js')),
			__memo(() => import('./chunks/14-4e48b7e2.js')),
			__memo(() => import('./chunks/15-c9e177d7.js')),
			__memo(() => import('./chunks/16-a0c431c9.js')),
			__memo(() => import('./chunks/17-60641d3a.js')),
			__memo(() => import('./chunks/18-c7778dad.js')),
			__memo(() => import('./chunks/19-c6a71776.js')),
			__memo(() => import('./chunks/20-f3875099.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/android",
				pattern: /^\/android\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/admin",
				pattern: /^\/api\/admin\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5cc1d56b.js'))
			},
			{
				id: "/api/bannerpic",
				pattern: /^\/api\/bannerpic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-befb260a.js'))
			},
			{
				id: "/api/comment/[commentID]",
				pattern: /^\/api\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-7340d22f.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2abcb373.js'))
			},
			{
				id: "/api/payments",
				pattern: /^\/api\/payments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d382dbff.js'))
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9af7d356.js'))
			},
			{
				id: "/api/post/[postID]",
				pattern: /^\/api\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-cd144783.js'))
			},
			{
				id: "/api/post/[postID]/comments",
				pattern: /^\/api\/post\/([^/]+?)\/comments\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-7ee2e65c.js'))
			},
			{
				id: "/api/profilepic",
				pattern: /^\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d4cc1e3c.js'))
			},
			{
				id: "/api/profile",
				pattern: /^\/api\/profile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-c555fc6c.js'))
			},
			{
				id: "/api/search",
				pattern: /^\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-1f88c8b4.js'))
			},
			{
				id: "/api/sendImage",
				pattern: /^\/api\/sendImage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-576ae9b8.js'))
			},
			{
				id: "/api/sendProfile",
				pattern: /^\/api\/sendProfile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-0c179a29.js'))
			},
			{
				id: "/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-769c8bb4.js'))
			},
			{
				id: "/api/subscription",
				pattern: /^\/api\/subscription\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f4291209.js'))
			},
			{
				id: "/api/upload",
				pattern: /^\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9689e172.js'))
			},
			{
				id: "/api/userDetail",
				pattern: /^\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-910cf606.js'))
			},
			{
				id: "/api/whatsapp",
				pattern: /^\/api\/whatsapp\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-14bde56c.js'))
			},
			{
				id: "/api/[publicID]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5aff87d0.js'))
			},
			{
				id: "/api/[publicID]/bannerpic",
				pattern: /^\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-c9febcc3.js'))
			},
			{
				id: "/api/[publicID]/comments",
				pattern: /^\/api\/([^/]+?)\/comments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-525f29bf.js'))
			},
			{
				id: "/api/[publicID]/compose",
				pattern: /^\/api\/([^/]+?)\/compose\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-4d4b42ab.js'))
			},
			{
				id: "/api/[publicID]/compose/comment",
				pattern: /^\/api\/([^/]+?)\/compose\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e145558c.js'))
			},
			{
				id: "/api/[publicID]/followers",
				pattern: /^\/api\/([^/]+?)\/followers\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f0ad6924.js'))
			},
			{
				id: "/api/[publicID]/followings",
				pattern: /^\/api\/([^/]+?)\/followings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-80bd8ff9.js'))
			},
			{
				id: "/api/[publicID]/invoices",
				pattern: /^\/api\/([^/]+?)\/invoices\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2321e9c2.js'))
			},
			{
				id: "/api/[publicID]/invoices/[invoiceID]",
				pattern: /^\/api\/([^/]+?)\/invoices\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"invoiceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-c13ee4fc.js'))
			},
			{
				id: "/api/[publicID]/likes",
				pattern: /^\/api\/([^/]+?)\/likes\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-48f20967.js'))
			},
			{
				id: "/api/[publicID]/likes/[postID]",
				pattern: /^\/api\/([^/]+?)\/likes\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-bee93360.js'))
			},
			{
				id: "/api/[publicID]/media",
				pattern: /^\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9f9f2dfc.js'))
			},
			{
				id: "/api/[publicID]/posts",
				pattern: /^\/api\/([^/]+?)\/posts\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-084a53de.js'))
			},
			{
				id: "/api/[publicID]/profilepic",
				pattern: /^\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-29004e91.js'))
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/comment/[commentID]",
				pattern: /^\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/compose",
				pattern: /^\/compose\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/iOS",
				pattern: /^\/iOS\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/legal/privacy",
				pattern: /^\/legal\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/legal/refund",
				pattern: /^\/legal\/refund\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/legal/terms",
				pattern: /^\/legal\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/post/[postID]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/settings/profile",
				pattern: /^\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/shipping",
				pattern: /^\/shipping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/[publicID]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/[publicID]/edit",
				pattern: /^\/([^/]+?)\/edit\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/[publicID]/edit/comment",
				pattern: /^\/([^/]+?)\/edit\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
