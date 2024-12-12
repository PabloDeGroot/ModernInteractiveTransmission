export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.tny2QMym.js","app":"_app/immutable/entry/app.B9VHznfT.js","imports":["_app/immutable/entry/start.tny2QMym.js","_app/immutable/chunks/entry.BgSlpjBw.js","_app/immutable/chunks/index-client.DD-Ij52M.js","_app/immutable/entry/app.B9VHznfT.js","_app/immutable/chunks/index-client.DD-Ij52M.js","_app/immutable/chunks/render.CFtxiOwO.js","_app/immutable/chunks/disclose-version.CPmkv18M.js","_app/immutable/chunks/validate.B20TBq7P.js","_app/immutable/chunks/this.DmrdE6PX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
