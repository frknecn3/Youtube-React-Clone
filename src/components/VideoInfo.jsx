import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getData } from '../utils/helpers'
import StringArea from './StringArea'
import Loading from './Loading'
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import millify from 'millify'
import moment from 'moment'
import { useLocation } from "react-router-dom"
import 'moment/locale/tr'



const VideoInfo = ({id}) => {
    
  const [detail,setDetail] = useState(null)
  const [channel,setChannel] = useState(null)
  const location = useLocation()

  const getInfos = async ()=>{
        
    const detailRes = await getData(`/video/info?id=${id}`)

    detailRes ? setDetail(detailRes.data) : (console.log("details didnt arrive yet"))
    
    const channelRes = await getData(`/channel/about?id=${detailRes.data.channelId}`)

    channelRes ? setChannel(channelRes.data) : (console.log("channel details didnt arrive yet"))

}

    useEffect(()=>{getInfos()},[location])
    
    if (!detail || !channel) return <Loading></Loading>

  return (
    
    (<>
        <h1 className='mt-3 text-xl font-bold pb-10'>{detail.title}</h1>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='rounded-full w-12 h-12' src={channel.avatar[0].url} alt="" />
                <div>
                    <h4 className='font-bold'>{channel.title}</h4>
                    <p>{channel.subscriberCountText} Abone</p>
                </div>
                <button className='bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]'>Abone Ol</button>
            </div>

            <div className='flex items-center rounded-full py-2 px-8 text-lg bg-[#4b4a4a] cursor-pointer'>
                    <div className='border-r-[1px] pr-3'>
                    <AiFillLike ></AiFillLike>
                    </div>
                    <div className='pl-3'>
                    <AiFillDislike></AiFillDislike>
                    </div>
            </div>
        </div>


        <div className='bg-[#383838] rounded p-2 mt-2 cursor-pointer hover:bg-[#535353]'>
            <div className='flex gap-3' >{/* HAKKINDA KISMI */}
                <p>{millify(detail.viewCount)} görüntülenme</p>
                <p>{moment(detail.publishDate).fromNow()}</p>
            </div>
            <div> {/* yazıiçeriği */}
            <StringArea text={detail.description} max={200}/>
        </div>
        </div>


        
    </>)
  )
}

export default VideoInfo