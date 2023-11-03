import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="flex flex-col" >
                {/* copyright */}
            <div className="flex flex-row justify-between pl-12 pr-2  mt-12 pb-1">
                <p className="text-lg font-semibold">© 2023 Bildad owuor</p>
                <p className='text-lg font-semibold text-right'>
                    <a href='/'><FaArrowCircleUp className='text-3xl'/></a>
                </p>
                </div>
        </div>
    )
}

export default Footer
