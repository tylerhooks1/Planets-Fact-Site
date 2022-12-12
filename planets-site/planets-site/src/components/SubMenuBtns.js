import React from 'react'
import { Link } from 'react-router-dom';


const SubMenuBtns = () => {
    return (

        <div className='hidden md:block grid grid-row-3 justify-self-center uppercase bold'>
            <Link to='../Overview'>
                <div className='border border-white/25 w-72 py-2 mb-3'>
                    <div className='text-left ml-4' >
                        <span className='opacity-50 mr-3'>01 </span>
                        Overview
                    </div>
                </div>
            </Link>
            <Link to="../Structure">
                <div className='border border-white/25 w-72 py-2 mb-3'>
                    <div className='text-left ml-4' >
                        <span className='opacity-50 mr-3'>02 </span>
                        Internal Structure
                    </div>
                </div>
            </Link>
            <Link to="../Surface">
                <div className='border border-white/25 w-72 py-2 mb-3'>
                    <div className='text-left ml-4' >
                        <span className='opacity-50 mr-3'>03 </span>
                        Surface Geology
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SubMenuBtns