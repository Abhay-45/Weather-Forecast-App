import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex item-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Tuesday, 20 February 2023 | Local time: 2:20 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Berlin, DE
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation