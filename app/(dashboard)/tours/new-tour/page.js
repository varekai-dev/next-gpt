import Chat from '@/components/Chat.jsx'
import NewTour from '@/components/NewTour.jsx'
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query'

const NewTourPage = () => {
	const queryClient = new QueryClient()
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NewTour />
		</HydrationBoundary>
	)
}

export default NewTourPage
