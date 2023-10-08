import React from 'react'
import { useContext } from 'react'
import { YoutubeContext } from '../context/youtubeContext'
import { categories } from '../utils/constants'

const Sidebar = () => {
    const {selectedCategory,setSelectedCategory} = useContext(YoutubeContext);


  return (
    <nav className='flex flex-col p-1 md:p-4 '>
        {categories.map((item,index)=>(
        <div key={index} className="">
            <div onClick={()=>setSelectedCategory(item)} className={` ${item.name===selectedCategory.name && "bg-[#2b2a2a]"} flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}>
                {item.icon}
                <span className='hidden md:block'>{item.name}</span>
            </div>
            {/* Divider true ise çizgi çek */}
            {item.divider&&<hr/>}
        </div>
        ))}
    </nav>
  )
}

export default Sidebar