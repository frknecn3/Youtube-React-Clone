import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getData } from "../utils/helpers"
import ReactPlayer from "react-player"
import { useState } from "react"
import Loading from "../components/Loading"
import VideoInfo from "../components/VideoInfo"
import VideoCard from "../components/VideoCard"
import { useLocation } from "react-router-dom"


const VideoDetail = () => {
  const [searchParam] = useSearchParams()
  const [related,setRelated] = useState(null)
  const id = searchParam.get('v')

  const location = useLocation()

  useEffect(()=>{
    getData(`/related?id=${id}`).then((res)=>setRelated(res.data.data))
  },[location])

  

  // videoyla alakalı içerikleri getirir.



  return (
    <div className="h-screen overflow-auto lg:overflow-hidden flex flex-col sm:flex-col md:flex-row lg:px-[100p] w-[100%] gap-5 p-4 min-h-[150vh]">
      <div className="md:w-[65%] w-[100%]">
        <ReactPlayer 
        controls
        url={`https://www.youtube.com/watch?v=${id}`}
        width={'100%'}
        height={'70vh'}
        />
        <VideoInfo id={id}/>
      </div>

      <div className="flex flex-col gap-10 max-w-[400px] md:w-[100%] md:mt-0 m-auto lg:overflow-auto lg:h-screen">
        {!related?'...':related.map((item)=>{
          if(item.type!=='video') return;
          return(
            <VideoCard video={item}></VideoCard>
          )
        })}
      </div>

    </div>
  )
}

export default VideoDetail