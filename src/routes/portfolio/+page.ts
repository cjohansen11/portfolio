import supabase from '$lib/db/db.js';
import { json } from '@sveltejs/kit';

export async function load({ params }) {
	console.log({ params });
}
