const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between box-border w-full flex-wrap">
        <div className="flex justify-between item-center flex-shrink-0 text-white ml-6">
          <span
            className="font-bold text-3xl item-center mr-6 mt-3 ml-1 drop-shadow-xl 
           tracking-widest"
          >
            ASTER + DEV.
          </span>
        </div>
        <div className="flex justify-between item-center flex-shrink-0 text-white mr-6">
          <a href="/" className="font-normal text-2xl p-4 mt-2">
            Home
          </a>

          <a href="#About" className="font-normal text-2xl p-4 mt-2">
            Journey
          </a>
          {/* <a to="/" className="font-normal text-2xl p-4 mt-2">
            Projects
          </a> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
