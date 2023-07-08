import React, { useEffect, useState } from 'react'
import {BsHandIndex} from 'react-icons/bs'

const GoUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const listenToScroll = ()=>{
    let winHight = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(winScroll > winHight ? true : false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll)
    return ()=> window.removeEventListener("scroll", listenToScroll)
  }, [])

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && 
        <div className='w-16 h-16 rounded-full flex items-center justify-center bg-gray-200 opacity-80 backdrop-filter backdrop-blur-md shadow-2xl' onClick={()=>window.scroll({left:0, top:0, behavior:"smooth"})}>
          <BsHandIndex className='text-green-500 text-3xl animate-bounce cursor-pointer'/>
        </div>
      }
    </div>
  )
}

export default GoUp