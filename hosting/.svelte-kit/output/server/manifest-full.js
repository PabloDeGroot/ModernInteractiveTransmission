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
		client: {"start":"_app/immutable/entry/start.Cy2UOdZf.js","app":"_app/immutable/entry/app.BpBERnSF.js","imports":["_app/immutable/entry/start.Cy2UOdZf.js","_app/immutable/chunks/entry.D18sHJ30.js","_app/immutable/chunks/index-client.XXwnQe8w.js","_app/immutable/entry/app.BpBERnSF.js","_app/immutable/chunks/index-client.XXwnQe8w.js","_app/immutable/chunks/render.DhwvbnaU.js","_app/immutable/chunks/utils.D3f7tEyi.js","_app/immutable/chunks/disclose-version.D_axkUVd.js","_app/immutable/chunks/if.DAExgGtJ.js","_app/immutable/chunks/props.BEqNIZBi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
