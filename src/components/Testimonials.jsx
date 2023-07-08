import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Testimonials = () => {
  return (
    <section>
      <div className='text-center text-4xl md:text-[4rem] mb-8 font-bold'>What Our Customer Say</div>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias ipsum, explicabo quod enim fuga?</p>
      <div className='grid md:grid-cols-2 gap-6 mt-20'>
        {[1,2,3].map(index=>(
          <div key={index} className="bg-green-50 px-8 py-4 hover:shadow-lg">
            <div className='flex items-center gap-4 mb-8'>
              <img src="/img/dev.jpg" width={50} height={50} alt="" className='w-16 h-16 rounded-full object-cover' />
              <div>
                <h1 className='text-2xl'>Jone Doe</h1>
                <h2 className='text-gray-500'>Fullstack Developer</h2>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur facilis nam veniam rem atque eius minima repellat, tempore eveniet asperiores eaque obcaecati assumenda, inventore, tenetur provident porro quia. Veritatis, velit!</p>
            </div>
        </div>
        ))}
      </div>
      <div className='flex items-end justify-end mt-8 text-white'>
        <button className='bg-green-300 px-4 py-2 flex items-center gap-1 hover:bg-green-500'><span>Load More</span><BsArrowRight/></button>
      </div>
    </section>
  )
}

export default Testimonials