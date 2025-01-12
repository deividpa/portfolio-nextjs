import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-20 mb-[2rem]" id="contact">
        <div className='flex flex-col items-center'>
            <h2 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> digital presence to the next level?
            </h2>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let&apos;s get started on your next project.
            </p>
            <a href="mailto:perezdavid2236@gmail.com">
                <MagicButton 
                    title='Get in touch'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyrigth &copy; 2025 David Perez. All rights reserved.
            </p>
            <div className="flex items-center my-3 md:gap-3 gap-6">
                {socialMedia.map(({id, link, img}) => (
                    <a key={id} href={link} target="_blank" rel="noreferrer">
                        <div  className="flex justify-center items-center w-10 h-10 cursor-pointer backdrop-filer backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">                       
                            <img src={img} alt={link} />  
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer