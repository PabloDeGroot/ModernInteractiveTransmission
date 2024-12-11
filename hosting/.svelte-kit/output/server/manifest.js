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
		client: {"start":"_app/immutable/entry/start.fNoqOm_Q.js","app":"_app/immutable/entry/app.DWU81-1l.js","imports":["_app/immutable/entry/start.fNoqOm_Q.js","_app/immutable/chunks/entry.Fri9A38i.js","_app/immutable/chunks/index-client.BWQulaWm.js","_app/immutable/entry/app.DWU81-1l.js","_app/immutable/chunks/index-client.BWQulaWm.js","_app/immutable/chunks/render.CVDWhjdf.js","_app/immutable/chunks/disclose-version.DV00E0Cu.js","_app/immutable/chunks/validate.DuR7ZZ00.js","_app/immutable/chunks/this.CiMcAgOw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
