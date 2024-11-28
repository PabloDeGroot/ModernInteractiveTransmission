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
		client: {"start":"_app/immutable/entry/start.B5wPd9jr.js","app":"_app/immutable/entry/app.2xCD412p.js","imports":["_app/immutable/entry/start.B5wPd9jr.js","_app/immutable/chunks/entry.D5RI2TeC.js","_app/immutable/chunks/runtime.CiZkIjR8.js","_app/immutable/chunks/index.ba3-T6C2.js","_app/immutable/entry/app.2xCD412p.js","_app/immutable/chunks/runtime.CiZkIjR8.js","_app/immutable/chunks/render.JFRT0jLp.js","_app/immutable/chunks/events.tqK8V5j9.js","_app/immutable/chunks/disclose-version.B6QaIZV3.js","_app/immutable/chunks/index-client.ZnVZiJVA.js","_app/immutable/chunks/snippet.BmNpjhUL.js","_app/immutable/chunks/validate.8uF8prI8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
