import React from 'react'
import { Link } from 'react-router-dom';

const MobileSubMenu = () => {
    return (
        <div className='border-b-[1px] border-white/25 mb-6 block md:hidden'>
            <div className='container mx-auto px-5 py-2 flex justify-between uppercase opacity-25' style={{ fontSize: '9px' }}>
                <Link to={`Overview`}>
                    Overview</Link>
                <Link to={`Structure`}>Structure</Link>
                <Link to={`Surface`}>Surface</Link>
            </div>
        </div >
    )
}

export default MobileSubMenu