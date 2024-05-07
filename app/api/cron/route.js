import prisma from '@/utils/db.js'
import { revalidatePath } from 'next/cache.js'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		// update all tokens to 1000
		console.log('cron launched')
		await prisma.token.updateMany({
			data: {
				tokens: 1000,
			},
		})
		revalidatePath('/profile')
		return NextResponse.json({ success: true })
	} catch (error) {
		console.log('error', error)
	}
}
