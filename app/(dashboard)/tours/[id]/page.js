import TourInfo from '@/components/TourInfo.jsx'
import { generateTourImage, getSingleTour } from '@/utils/action.js'
import axios from 'axios'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { redirect } from 'next/navigation.js'

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`

const SingleTourPage = async ({ params }) => {
	const tour = await getSingleTour(params.id)

	if (!tour) {
		redirect('/tours')
	}

	// ai generation
	// const tourImage = await generateTourImage({
	// 	city: tour.city,
	// 	country: tour.country,
	// })

	const { data } = await axios.get(`${url}${tour.city}`)
	const tourImage = data?.results[0]?.urls?.raw
	return (
		<div>
			<Link href="/tours" className="btn btn-secondary mb-12">
				back tou tours
			</Link>
			{tourImage && (
				<Image
					src={tourImage}
					width={300}
					height={300}
					className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
					alt={tour.title}
					priority
				/>
			)}
			<TourInfo tour={tour} />
		</div>
	)
}

export default SingleTourPage
