import MemberProfile from './MemberProfile.jsx'
import NavLinks from './NavLinks.jsx'
import SidebarHeader from './SidebarHeader.jsx'

const Sidebar = () => {
	return (
		<div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto_1f_auto]">
			<SidebarHeader />
			<NavLinks />
			<MemberProfile />
		</div>
	)
}

export default Sidebar
