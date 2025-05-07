import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp"
import { FaLongArrowAltRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-12 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
            {/* left */}
           <div className='md:w-1/2 w-full'>
                 <p className='text-green-500 font-semibold'>MONITOR</p>
                 <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Introducing best mobile
                    <br/>
                    carousels</h2>

                <p className='text-gray-600 mb-8'>Before rhe ship is really back.Round, round, all the world
                    is round. The ship is really back. Round, round, all the world is round. The ship is really back. 
                </p>

                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 gap'>
                    Learn more about monitoring
                    <FaLongArrowAltRight className='w-5 h-5'/>
                </a>
            </div>


            {/* right */} 
            <div className='md:w-1/2 w-full'>
                <img src={monitorCardImg} alt="Schedule" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
            
        </div>

    </section>
  )
}

export default MonitorSection
