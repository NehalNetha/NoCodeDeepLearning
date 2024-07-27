import React from 'react'

function Navbar() {
  return (
    <nav  className="flex flex-row justify-between px-11 pt-7 pb-6 border-b-[1px] border-gray-700 ">
        <div className="flex flex-col gap-1 text-white">
            <h1 className="text-sm text-gray-400">No Code</h1>
            <h1>Deep Learning</h1>
        </div>

        <div className="flex flex-row gap-3">
            <button type="button" class="text-black bg-[#F6E6CB] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Create</button>

             <button type="button" class="text-black bg-[#F6E6CB] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Export</button>

        </div>
    </nav>
  )
}

export default Navbar