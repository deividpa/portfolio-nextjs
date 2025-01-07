import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
        <h2 className="heading">
            A small Section of {' '}
            <span className="text-purple">Recent Projects</span>
        </h2>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-12 mt-4'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[520px] w-[80vw]">
                    <PinContainer title={link} href={link} >
                        <div className="relative flex items-center justify-center sm:w-[520px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt={title} className="z-10 absolute bottom-0" />
                        </div>
                        <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h3>
                        <p className="lg:text-xl font-light text-sm line-clamp-2 mt-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon) => (
                                    <div 
                                        key={icon} 
                                        className="border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 bg-black p-1 mr-3 flex justify-center items-center"
                                    >
                                        <img src={icon} alt={icon} className="p-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <p className='flex md:text-xs text-base'>Check Live Site</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects