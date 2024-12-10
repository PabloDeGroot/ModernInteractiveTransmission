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
		client: {"start":"_app/immutable/entry/start.CUoMoaI4.js","app":"_app/immutable/entry/app.Ba6McUQ-.js","imports":["_app/immutable/entry/start.CUoMoaI4.js","_app/immutable/chunks/entry.CDpEjqJc.js","_app/immutable/chunks/index-client.BzkbKV1k.js","_app/immutable/entry/app.Ba6McUQ-.js","_app/immutable/chunks/index-client.BzkbKV1k.js","_app/immutable/chunks/render.DbjVZGEq.js","_app/immutable/chunks/disclose-version.D-beVrye.js","_app/immutable/chunks/validate.D8cR6DIS.js","_app/immutable/chunks/this.BQNVXBWA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
