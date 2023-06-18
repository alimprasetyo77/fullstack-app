import React from 'react'
import SideBar from '../components/SideBar'
const Layout = ({children}) => {
  return (
    <React.Fragment>
        <div className='gap-8 flex' >
            <div className='flex-none '>
                <SideBar /> 
            </div>
            <div className=' grow mt-4'>
                {children}
            </div>
        </div>
    </React.Fragment>
)
}

export default Layout