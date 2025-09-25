import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-1'>
        <Link href="/">
            <div className='relative w-[200px] h-[150px]'>
                <Image src="/img/floodwatch.ph.png" alt="logo" fill-sizes="(max-width:768px) 50vw,(max-width:1200px) 100vw, 100vw" className='object-contain'  />
            </div>      
        </Link>
        {/* SearchInput */}
    </div>
  )
}

export default Header