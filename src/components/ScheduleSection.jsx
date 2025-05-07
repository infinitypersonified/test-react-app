import React from 'react'
import scheduleImage from "../assets/stats.webp"
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-12 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
            {/* left */}
            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="Schedule" className='w-full h-auto rounded-lg shadow-lg' />
            </div>


            {/* right */}
            <div className='md:w-1/2 w-full'>
                 <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                 <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business 
                    <br/>
                    With Start Scheduling Solutions</h2>

                <p className='text-gray-600 mb-8'>Take control of your time and boodt productivity with our intelligent scheduling system.
                    Automate appointments, manage team availability, and deliver exceptional customer experiences 
                    through seamless calender management.
                </p>

                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 gap'>
                    Explore scheduling features
                    <FaLongArrowAltRight className='w-5 h-5'/>
                </a>
            </div>
        </div>

    </section>
  )
}

export default ScheduleSection
