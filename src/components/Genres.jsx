import { Link } from "react-router-dom";
import './Genre.css';

function Genres() {
  

  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="flex flex-col w-full items-center pt-4 gap-4 bg-gradient-to-r from-purple-600 to-sky-500">
          <div className="max-w-[480px] w-full px-4">
            <div className="relative my-12">
              <input
                type="text"
                name="search"
                className="w-full border h-12 p-4 rounded-xl"
                placeholder="Search Movie"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap py-12 gap-4 content-center ml-80">
          <Link
            className="rounded-full sm:text-sm px-4 self-center py-2 bg-gray-600 text-white font-semibold focus:bg-slate-50 focus:text-gray-900 no-underline"
            to={"/"}
          >
            Action
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-50 focus:text-gray-800"
            to={"#"}
          >
            Adventure
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-50 focus:text-gray-800"
            to={"#"}
          >
            Animation
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-50 focus:text-gray-800"
            to={"#"}
          >
            Comedy
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Crime
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Documentary
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Drama
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Family
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Fantasy
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            History
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Horror
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Music
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Mystery
          </Link>

          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Romance
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-8 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Science Fiction
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            TV Movies
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Thriller
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            War
          </Link>
          <Link
            className="rounded-full text-xs sm:text-sm min-w-fit px-4 bg-gray-600 text-white font-semibold self-center py-2 no-underline focus:bg-slate-100 focus:text-gray-800"
            to={"#"}
          >
            Western
          </Link>
        </div>

        <div>
          <h1 className="text-4xl text-center text-blue-300 font-bold">
            Genres
          </h1>

          <div className="flex flex-wrap py-12 gap-4 content-center ml-80">
            <div>
              <Link className="relative">
                <img
                  src="/film/images.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Riposte
                </h2>
                <span className="bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1 p-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/monkeyman.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Monkey man
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Lift.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  LIFT
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/landof.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Land of bad
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Furiosa.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Furiosa : Une saga Mad Max
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/CashO.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Cash Out
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/planetMovie.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  La planete des Singes
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/code8ii.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Code 8
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/chiefof_.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Chief of station
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Damsl.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Damsel
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/rebelmoon2.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-xl font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Rebel Moon
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Beverlyhills.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Le Flic de Beverly Hills 4
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/public/film/Fighter.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Fighter
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Beverlyhills.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Fighter
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/BadeMiyan.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Bade Miyan Chote Miyan
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/heart.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Heart of the hunter
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/sousla.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Under Paris
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/NickLasron.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  City hunter
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Yodha11.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Yodha
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/road.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Road House
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/hatch_protection.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Hatch - Protection rapprochée
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/salaire1.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Salaire de la peur
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/garuda.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Garudan
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/damaged.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Damaged
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/60mins.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  60 MINUTES
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-red-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/Atlas.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  ATLAS
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>
              </Link>
            </div>

            <div>
              <Link className="relative">
                <img
                  src="/film/rathnam.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Rathnam
                </h2>
                <span className="p-1 bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1">
                  9.9
                </span>

                <div
                  className="bg-black w-7 h-7 rounded-full right-0 top-0 absolute group"
                  tabIndex="0"
                >
                  <img
                    className="w-6 h-6 group-focus:bg-slate-50 rounded-full"
                    src="https://img.icons8.com/fluency-systems-regular/48/star--v1.png"
                    alt="star--v1"
                  />
                </div>
              </Link>
            </div>

            <div className="">
              <Link className="relative">
                <img
                  src="/film/badLandHunter.jpg"
                  className="w-60 h-5/6 rounded-lg hover:scale-110"
                />
                <h2 className="text-lg font-bold text-slate-100 text-overlay absolute left-0 bottom-0">
                  Badland hunters
                </h2>

                <span className="bg-black text-md right-0 bottom-0 absolute text-green-600 font-semibold rounded-full h-8 w-8 m-1 p-1">
                  9.9
                </span>

                <div
                  className="bg-black w-7 h-7 rounded-full right-0 top-0 absolute group"
                  tabIndex="0"
                >
                  <img
                    className="w-6 h-6 group-focus:bg-slate-50 rounded-full"
                    src="https://img.icons8.com/fluency-systems-regular/48/star--v1.png"
                    alt="star--v1"
                  />
                </div>
              </Link>
            </div>

            {/* <div className="bg-gray-50 w-20 h-20 rounded-full">
              <div className="star border-2 border-gray-700 w-20 h-10 bg-slate-400"></div>
            
            </div> */}
            <div
                  className="bg-black w-7 h-7 rounded-full right-0 top-0 absolute group"
                  tabIndex="0"
                >
                  <img
                    className="w-6 h-6 group-focus:bg-slate-50 rounded-full"
                    src="https://img.icons8.com/fluency-systems-regular/48/star--v1.png"
                    alt="star--v1"
                  />
                </div>

            

          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
