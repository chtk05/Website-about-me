// import { Box, Card, CardContent, CardMedia, IconButton } from '@mui/material'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow'
const Proj = () => {
  return (
    <div className="mt-16 mb-32 h-full">
      {/* <h1 className="flex justify-center text-3xl mt-6 mb-6 ">Projects</h1> */}
      <h1 className="text-4xl mb-16 mt-16  drop-shadow-4xl font-extrabold flex justify-center">Projects</h1>
      <div className="grid grid-cols-2 gap-6 max-h-min mt-16 ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 group hover:shadow transform transition duration-500 hover:scale-110">
          <img className="rounded-t-lg h-56 mx-auto" src="studywithcoffee-preview.png" alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TODO APP</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Let's be motivate by recording everyday task! The project is created using MERN Stack
            </p>
            <a
              href="https://genuine-hotteok-4fb5a0.netlify.app/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm max-h-min bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 group hover:shadow transform transition duration-500 hover:scale-110">
          <img className="rounded-t-lg h-56 mx-auto" src="livey.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Livey Healthy Platform
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Happiness comes with good health, enjoy exercises with us!
            </p>
            <a
              href="https://livey.cleverse.academy/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 group hover:shadow transform transition duration-500 hover:scale-110">
          <a href="#">
            <img className="rounded-t-lg h-56 mx-auto" src="/public/studywithcoffee-preview.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Learning Hub</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              LearnHub is a hub full with videos that user interested
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div> */}
      </div>
      <a href="https://github.com/chtk05?tab=repositories">
        <h1 className="text-2xl mb-16 mt-10  drop-shadow-3xl font-bold flex justify-center text-slate-50 hover:underline transform transition duration-500 hover:scale-110">
          Finds out more project at <img className="drop-shadow-3xl w-10 h-10 ml-4 " src="9919.png" alt="" />
        </h1>
      </a>
    </div>
  )
}

export default Proj
