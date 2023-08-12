// @ts-nocheck

import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	// if (locals.user) throw redirect(307, `/${locals.user.publicID}`);
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
		throw redirect(300,'/auth');
	}

	// save: async ({ cookies, locals, request }) => {
	// 	if (!locals.user) throw error(401);

	// 	const data = await request.formData();

	// 	const user = {
	// 		username: data.get('username'),
	// 		email: data.get('email'),
	// 		password: data.get('password'),
	// 		image: data.get('image'),
	// 		bio: data.get('bio')
	// 	};

	// 	const body = await api.put('user', { user }, locals.user.token);
	// 	if (body.errors) return fail(400, body.errors);

	// 	const value = btoa(JSON.stringify(body.user));
	// 	cookies.set('jwt', value, { path: '/' });

	// 	locals.user = body.user;
	// }
};