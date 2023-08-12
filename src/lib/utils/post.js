// @ts-ignore
export async function post(endpoint, data) {
	try {
		const r = await fetch(endpoint, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(data || {}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return await r.json();
	} catch (error) {
		return alert(error);
	}
}