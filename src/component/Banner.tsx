import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-3xl text-cyan-50">I am</h1>
      </div>
      <div>
        <TypeAnimation
          sequence={['Frontend Developer', 1000, 'Backend Developer', 1000, 'Fullstack Developer', 1000]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '2em', color: 'cornsilk', backgroundColor: 'black' }}
        />
      </div>
    </>
  )
}
export default Banner
