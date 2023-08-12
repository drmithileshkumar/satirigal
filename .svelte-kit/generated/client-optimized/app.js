export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/android": [4],
		"/auth": [~5],
		"/comment/[commentID]": [6],
		"/compose": [7],
		"/iOS": [8],
		"/legal/privacy": [9],
		"/legal/refund": [10],
		"/legal/terms": [11],
		"/post/[postID]": [12],
		"/search": [13],
		"/settings": [14],
		"/settings/profile": [15],
		"/shipping": [16],
		"/[publicID]": [18],
		"/[publicID]/edit": [19],
		"/[publicID]/edit/comment": [20],
		"/[...catchAll]": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';