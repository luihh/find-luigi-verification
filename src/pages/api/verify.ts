import type { APIContext } from 'astro'

const DISCORD_BOT_TOKEN = import.meta.env.DISCORD_BOT_TOKEN;
const GUILD_ID = import.meta.env.GUILD_ID;
const MEMBER_ROLE_ID = import.meta.env.MEMBER_ROLE_ID;
const NOT_VERIFIED_ROLE_ID = import.meta.env.NOT_VERIFIED_ROLE_ID;

export async function POST({ request }: APIContext): Promise<Response> {
  try {
		const { userId }: { userId: string } = await request.json()

		if (!userId) {
			return new Response('Missing userId in request body', { status: 400 })
		}

		const baseURL = `https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}/roles`

		await fetch(`${baseURL}/${NOT_VERIFIED_ROLE_ID}`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bot ${DISCORD_BOT_TOKEN}`
			}
		})

		const response = await fetch(`${baseURL}/${MEMBER_ROLE_ID}`, {
			method: 'PUT',
			headers: {
				'Authorization': `Bot ${DISCORD_BOT_TOKEN}`
			}
		})

		if (response.ok) {
			return new Response('Verification successful!', { status: 200 })
		} else {
			return new Response('Failed to update role', { status: 500 })
		}
  } catch (error) {
		console.error('Error:', error)
		return new Response('Internal server error', { status: 500 })
	}
}