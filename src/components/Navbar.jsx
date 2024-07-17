import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>  
         <div className="min-h-screen bg-gray-900 -translate-x-80 fixed inset-0 z-50 w-72 transition-transform duration-300 xl:translate-x-0">
          <div className="flex flex-col overflow-y-auto">
            <nav className="flex flex-col flex-none overflow-y-auto px-2 py-4 gap-10 rounded-sm">

              <div className="flex flex-col my-8">
                <img
                  src="/Image/blue-movies11.png"
                  className="px-4 cursor-pointer"
                />
                <span className="font-semibold text-gray-500 text-3xl cursor-pointer ml-8">
                  Blue Movies
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to={'/'}
                  className="flex justify-center px-3 py-2 mx-6 rounded-sm font-semibold text-gray-100 bg-gray-700 hover:border-2 hover:border-blue-600 text-center no-underline"
                >
                  Genres
                </Link>
                <Link
                  to={'#'}
                  className="flex justify-center px-3 py-2 mx-6 rounded-sm font-semibold text-gray-100 bg-gray-700 hover:border-2 hover:border-blue-600 text-center no-underline"
                >
                  Trending
                </Link>
                <Link
                  to={'#'}
                  className="flex justify-center px-3 py-2 mx-6 rounded-sm font-semibold text-gray-100 bg-gray-700 hover:border-2 hover:border-blue-600 text-center no-underline"
                >
                  Upcoming
                </Link>
                <Link
                  to={'#'}
                  className="flex justify-center px-3 py-2 mx-6 rounded-sm font-semibold text-gray-100 bg-gray-700 hover:border-2 hover:border-blue-600 text-center no-underline"
                >
                  Favorites
                </Link>
                <Link
                  to={'#'}
                  className="flex justify-center px-3 py-2 mx-6 rounded-sm font-semibold text-gray-100 bg-gray-700 hover:border-2 hover:border-blue-600 text-center no-underline"
                >
                  Animes
                </Link>
              </div>

              <div className='flex items-end'>
                <Link
                  to="/"
                  className="absolute  inset-x-0 bottom-0 text-center px-3 py-2 my-6 mx-6 font-semibold rounded-xl text-slate-100 bg-gray-500 no-underline"
                >
                  Log in
                </Link>
              </div>
            </nav>
          </div>
        </div> 
        
    </>
  )
}

export default Navbar
