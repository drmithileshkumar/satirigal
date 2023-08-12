// @ts-nocheck
//@ts-nocheck
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ locals }) {
      // console.log('local user...', locals.user)
	return {
		user: locals.user && {
            publicID: locals.user.publicID,
            name: locals.user.name,
            phone: locals.user.phone,
            profile: locals.user.profile,
            likes: locals.user.likes
		}
	};
}