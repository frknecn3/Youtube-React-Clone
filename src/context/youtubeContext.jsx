// context temelini oluştur

import { useState,useEffect } from "react";
import { createContext } from "react";
import { categories } from "../utils/constants";
import { getData } from "../utils/helpers";

export const YoutubeContext = createContext();

// contextte tutulan verileri uygulamaya aktarcak

export const YoutubeProvider = ({children})=>{
    const [selectedCategory,setSelectedCategory] = useState(categories[0]);
    const [videos,setVideos]=useState(null)

    useEffect(() =>{
        if (selectedCategory.type==='home' || selectedCategory.type==='trending') {
            getData(`/${selectedCategory.type}`).then((res)=>{

                setVideos(null)

                const filtered = res.data.data.filter((curData)=>curData.type==="video")

            setVideos(filtered)
            })
        }
        else if(selectedCategory.type==='category')
        {
            getData("/home")
        }
        else{}
    },[selectedCategory])
    

    return (
        <YoutubeContext.Provider value={{selectedCategory,setSelectedCategory,videos}}>
            {children}
        </YoutubeContext.Provider>
    )
}