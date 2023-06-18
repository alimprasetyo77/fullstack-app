import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {
  const {user} = useSelector((state) => state.auth)

  return (
      <div className=" flex items-center justify-center h-full">
        <div className="card w-96 mx-auto bg-white rounded-lg  shadow-xl hover:shadow">
          <img className="w-72 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/619946056?v=4" alt=""/>
          <div className="text-center mt-2 text-3xl font-medium">{user && user.name}</div>
          <div className="text-center mt-2 font-light text-sm">{user && user.email}</div>
          <div className="text-center font-medium text-lg">{user && user.role}</div>
          <div className="px-6 text-center mt-2 font-light text-sm">
            <p>
              Front end Developer, avid reader. Love to take a long walk, swim
            </p>
          </div>
          <hr className="mt-8"/>
          <div className="flex p-4">
            <div className="w-1/2 text-center">
              <span className="font-bold">1.8 k</span> Followers
            </div>
            <div className="w-0 border border-gray-300">
              
            </div>
            <div className="w-1/2 text-center">
              <span className="font-bold">2.0 k</span> Following
            </div>
          </div>
        </div>
      </div>
  )
}

export default Content