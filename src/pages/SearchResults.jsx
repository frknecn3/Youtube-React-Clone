import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { getData } from "../utils/helpers"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Loading from "../components/Loading"
import VideoCard from "../components/VideoCard"
import SkeletonLoading from "../components/SkeletonLoading"

const SearchResults = () => {

    const [params,setParams] = useSearchParams()
    const [results,setResults] = useState(null)

    const query = params.get('search_query')

    useEffect(() => {
        getData(`/search?query=${query}&type=video`).then((res)=>{setResults(res.data.data)})
        console.log(results)
    }, [query])
    
    
  return (
    <div className="flex w-[100%]">
        <Sidebar></Sidebar>
        <div className="flex flex-col items-center gap-5 p-5 overflow-auto h-screen w-[100%]">
            {!results?<SkeletonLoading/>:results.map((item,i)=>{
                if(item.type!=='video') return;
                return <VideoCard design={'max-w-[700px] grid grid-cols-2 gap-5'} key={i} video={item}/>
            })}
        </div>
    </div>
  )
}

export default SearchResults