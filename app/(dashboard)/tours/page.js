import { ToursPage } from '@/components/ToursPage.jsx'
import { getAllTours } from '@/utils/action.js'
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query'

const AllToursPage = async () => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['tours', ''],
		queryFn: () => getAllTours(),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ToursPage />
		</HydrationBoundary>
	)
}

export default AllToursPage
