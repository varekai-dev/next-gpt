import Chat from '@/components/Chat.jsx'
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query'

const ChatPage = () => {
	const queryClient = new QueryClient()
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Chat />
		</HydrationBoundary>
	)
}

export default ChatPage
