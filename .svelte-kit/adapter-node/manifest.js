export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.60c826e2.js","app":"_app/immutable/entry/app.b81e3a73.js","imports":["_app/immutable/entry/start.60c826e2.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.b81e3a73.js","_app/immutable/chunks/index.fe0a1c86.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/api/admin/_server.js'))
			},
			{
				id: "/api/bannerpic",
				pattern: /^\/api\/bannerpic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/bannerpic/_server.js'))
			},
			{
				id: "/api/comment/[commentID]",
				pattern: /^\/api\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/comment/_commentID_/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/payments",
				pattern: /^\/api\/payments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/payments/_server.js'))
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.js'))
			},
			{
				id: "/api/post/[postID]",
				pattern: /^\/api\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/post/_postID_/_server.js'))
			},
			{
				id: "/api/post/[postID]/comments",
				pattern: /^\/api\/post\/([^/]+?)\/comments\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/post/_postID_/comments/_server.js'))
			},
			{
				id: "/api/profilepic",
				pattern: /^\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/profilepic/_server.js'))
			},
			{
				id: "/api/profile",
				pattern: /^\/api\/profile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/profile/_server.js'))
			},
			{
				id: "/api/search",
				pattern: /^\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/search/_server.js'))
			},
			{
				id: "/api/sendImage",
				pattern: /^\/api\/sendImage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/sendImage/_server.js'))
			},
			{
				id: "/api/sendProfile",
				pattern: /^\/api\/sendProfile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/sendProfile/_server.js'))
			},
			{
				id: "/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/signup/_server.js'))
			},
			{
				id: "/api/subscription",
				pattern: /^\/api\/subscription\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/subscription/_server.js'))
			},
			{
				id: "/api/upload",
				pattern: /^\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/upload/_server.js'))
			},
			{
				id: "/api/userDetail",
				pattern: /^\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/userDetail/_server.js'))
			},
			{
				id: "/api/whatsapp",
				pattern: /^\/api\/whatsapp\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/whatsapp/_server.js'))
			},
			{
				id: "/api/[publicID]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/_server.js'))
			},
			{
				id: "/api/[publicID]/bannerpic",
				pattern: /^\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/bannerpic/_server.js'))
			},
			{
				id: "/api/[publicID]/comments",
				pattern: /^\/api\/([^/]+?)\/comments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/comments/_server.js'))
			},
			{
				id: "/api/[publicID]/compose",
				pattern: /^\/api\/([^/]+?)\/compose\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/compose/_server.js'))
			},
			{
				id: "/api/[publicID]/compose/comment",
				pattern: /^\/api\/([^/]+?)\/compose\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/compose/comment/_server.js'))
			},
			{
				id: "/api/[publicID]/followers",
				pattern: /^\/api\/([^/]+?)\/followers\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/followers/_server.js'))
			},
			{
				id: "/api/[publicID]/followings",
				pattern: /^\/api\/([^/]+?)\/followings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/followings/_server.js'))
			},
			{
				id: "/api/[publicID]/invoices",
				pattern: /^\/api\/([^/]+?)\/invoices\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/invoices/_server.js'))
			},
			{
				id: "/api/[publicID]/invoices/[invoiceID]",
				pattern: /^\/api\/([^/]+?)\/invoices\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"invoiceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/invoices/_invoiceID_/_server.js'))
			},
			{
				id: "/api/[publicID]/likes",
				pattern: /^\/api\/([^/]+?)\/likes\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/likes/_server.js'))
			},
			{
				id: "/api/[publicID]/likes/[postID]",
				pattern: /^\/api\/([^/]+?)\/likes\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/likes/_postID_/_server.js'))
			},
			{
				id: "/api/[publicID]/media",
				pattern: /^\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/media/_server.js'))
			},
			{
				id: "/api/[publicID]/posts",
				pattern: /^\/api\/([^/]+?)\/posts\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/posts/_server.js'))
			},
			{
				id: "/api/[publicID]/profilepic",
				pattern: /^\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_publicID_/profilepic/_server.js'))
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

export const prerendered = new Set([]);
