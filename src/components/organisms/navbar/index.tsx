import { MenuItems } from "../../molecules"
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import { useAppContext } from "../../../context/useContext"
import Logo from "../../../assets/Logo/bagusLaundry.jpg"

const NavBar = () => {

  const {
    setOpenCart
  } = useAppContext()

  const handleSetCartOpen = () => setOpenCart(prev => !prev)

  return (
    <div className="flex flex-row items-center w-full px-20 py-10">
        <div className="rounded-full overflow-hidden">
          <img src={Logo} alt="logo" className='w-16 h-16 object-cover'/>
        </div>
        <MenuItems />
        <div className="flex flex-row items-center">
            <LocalLaundryServiceIcon className="text-gray-500 hover:text-white transition duration-150 cursor-pointer" fontSize="large" 
            onClick={handleSetCartOpen} />
        </div>
    </div>
  )
}

export default NavBar