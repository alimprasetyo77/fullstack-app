import { FaUser, FaSignInAlt } from 'react-icons/fa'
import { ImPriceTags } from 'react-icons/im'
import { MdLogout, MdDashboard } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../features/authSlice'

const SideBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    const logout = () => {
        dispatch(LogOut())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div>
            <aside className="w-64 " aria-label="Sidebar">
                <div className="min-h-screen px-3 py-4 overflow-y-auto  bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <Link to={'/dashboard'} className="flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg dark:text-white ">
                                <MdDashboard /><span className="ml-3">Dashboard</span>
                            </Link>
                        </li>

                        {user && user.role === 'admin' && (
                            <div>
                                  <li>
                                    <Link to={'/user-list'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FaUser /><span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                    </Link>
                                </li>
                            </div>
                        )}
                      
                        <li>
                            <Link to={'/product-list'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ImPriceTags /> <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                            </Link>
                        </li>
                  
                        <li>
                            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100       dark:hover:bg-gray-700">
                                <MdLogout /><button onClick={logout} className=" focus:outline-none text-white ml-3">Log Out</button>
                            </div>

                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar