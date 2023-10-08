import millify from "millify"
import { useState } from "react"
import {useNavigate } from "react-router-dom"

const VideoCard = ({video,design}) => {
    const navigate = useNavigate()
    const [isHover,setIsHover] = useState(false)


  return (
    <div onClick={()=>{navigate(`/watch?v=${video.videoId}`)}} className={`${design} cursor-pointer`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
        <div>
            <img className="rounded-lg w-full h-full object-contain" src={isHover&&video.richThumbnail ? /*video?.richThumbnail[0]?.url*/video.thumbnail[0]?.url : video.thumbnail[0]?.url} alt="" />
        </div>

        <div className="flex gap-4 mt-5" >
            <img className="w-14 h-14 rounded-full" style={{display:design?'none':''}} src={video.channelThumbnail[0]?.url} />
            <div>
                <h4 className="font-bold text-white">{video?.title}</h4>
                <p>{video?.channelTitle}</p>
                <div className="flex gap-2">
                    <p>{millify(video.viewCount)}</p>
                    <p>{video.publishedTimeText}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default VideoCard