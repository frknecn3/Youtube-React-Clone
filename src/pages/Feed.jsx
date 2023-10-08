import React from 'react'
import { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'
import { YoutubeContext } from '../context/youtubeContext'
import Loading from '../components/Loading'
import SkeletonLoading from '../components/SkeletonLoading'

const Feed = () => {
  const {videos}=useContext(YoutubeContext)
  return (
    <div className='flex gap-2 overflow-y-hidden'>
    <Sidebar></Sidebar>
    <div className='videos'>
      {!videos? <SkeletonLoading/> : videos.map((video,id)=>(<div key={id} className=''><VideoCard video={video} key={video.videoId}/></div>))}
    </div>
    </div>
  )
}

export {Feed}