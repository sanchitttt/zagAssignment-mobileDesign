import { Link } from 'react-router-dom'
import { CartIcon, HomeNavbar, NotificationIcon, ProfileIcon } from '../icons'

function NavbarBottom() {
    return (
        <div className='fixed bottom-[0px] bg-[#fff] w-[100%] h-[75px] gap-[20px] flex items-center justify-around' style={{
            zIndex:'1000',
            borderRadius: '30px 30px 0px 0px',
            boxShadow: '0px -2px 7px rgba(0, 0, 0, 0.1)'
        }}
        >
            <Link to=''>
                <HomeNavbar />
            </Link>
            <Link to=''>
                <CartIcon />
            </Link>
            <Link to=''>
                <NotificationIcon />
            </Link>
            <Link to=''>
                <ProfileIcon />
            </Link>
        </div>
    )
}

export default NavbarBottom