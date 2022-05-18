import React from 'react'

export default function Notification() {
  return (
    <>
      <div className="mt-8 mb-12 xl:ml-20 md:mb-0 ">
        <form>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-center ">Thông báo</h1>
          </div>

          <div className="mb-6 space-y-4">
            <div className="text-xl font-bold">Ngày</div>
            <input
              type="text"
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Ngày"
            />
          </div>

          <div className="mb-6 space-y-4">
            <div className="text-xl font-bold">Ngày</div>
            <input
              type="text"
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Ngày"
            />
          </div>

          <div className="mb-6 space-y-4">
            <div className="text-xl font-bold">Ngày</div>
            <input
              type="text"
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Ngày"
            />
          </div>
          
          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Sign Up
            </button>
            <p className="pt-1 mt-4 mb-0 text-sm font-semibold text-center">
              Already have an account
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
