import React from 'react'
import img12 from '../image/img12.png'
import img13 from '../image/img13.png'
import img14 from '../image/img14.png'
import img15 from '../image/img15.png'
import img16 from '../image/img16.png'
import img17 from '../image/img17.png'


const Feature = () => {
  return (
    <div className='min-h-screen w-full bg-[#0f172a] relative'>

      <div className="absolute inset-0 z-0 flex justify-center items-center gap-10 lg:px-20 md:px-10 px-2"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}>
        <div className='flex items-center flex-col'>
          <div>
            <h1 className='text-[3.5rem] tracking-tight leading-none mt-10 font-semibold bg-gradient-to-tl from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text md:text-center lg:text-6xl md:text-4xl text-3xl'>Simple Steps to Uleashe Creativity</h1>
            <p className='text-center text-xl mt-2 bg-gradient-to-tl from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text'>Unlock the full Potential of your Prompts with Powerful Feature</p>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 p-4 lg:w-3/5 md:w-full w-full  text-gray-400
 '>

            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4] ">
              <img src={img12} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>Organize & Discover</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Tag categories and search your prompt instantly</p>
            </div>
            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4] ">
              <img src={img13} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>AI Powered Creation</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Genearte new prompts and refine Existing ones</p>
            </div>
            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4]">
              <img src={img14} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>Collaboraite & Share</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Tag categories and search your prompt instantly</p>
            </div>
            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4]">
              <img src={img15} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>SignUp & Import</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Create your Free account and efficiently import your existing prompts instantly</p>
            </div>
            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4]">
              <img src={img16} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>Organize & Refine</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Categorize, Tags and use AI tool to enhance and restoring your Prompts</p>
            </div>
            <div className="bg-white shadow rounded p-2 flex flex-col items-center bg-gradient-to-tl from-[#3b4e81] via-[#283970] to-[#4765a4]">
              <img src={img17} alt='imgi' className='h-30 mt-3' />
              <h2 className='mt-3 text-xl font-semibold'>Generate & Deploy</h2>
              <p className='mt-3 text-lg mb-3 text-center leading-6'>Seamlessly generate with favorite model and share your creations</p>
            </div>
          </div>


        </div>




      </div>
    </div>
  )
}

export default Feature