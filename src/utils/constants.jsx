import { AiFillFire, AiFillHome } from "react-icons/ai";
import {CgMusicNote} from "react-icons/cg"
import {MdLocalFireDepartment} from "react-icons/md"

export const categories = [
    {
        name:"Yeni", 
        icon:<AiFillHome/>,
        type:"home"
    },
    {
        name:"Trend", 
        icon:<MdLocalFireDepartment/>,
        type:"trending"
    },
    {
        name:"Müzik", 
        icon: <CgMusicNote/>,
        type:"category"
    },
    {
        name:"Filmler", 
        icon:<AiFillHome/>,
        type:"category"
    },
    {
        name:"Canlı", 
        icon:<AiFillHome/>,
        type:"category"
    },
    {
        name:"Oyun", 
        icon:<AiFillHome/>,
        type:"category"
    },
    {
        name:"Haberler", 
        icon:<AiFillHome/>,
        type:"category"
    },
    {
        name:"Eğitici", 
        icon:<AiFillHome/>,
        type:"category",
        divider:true
    },
    {
        name:"Ayarlar", 
        icon:<AiFillHome/>,
        type:"settings",
    },
    {
        name:"Report History", 
        icon:<AiFillHome/>,
        type:"settings",
    },
    {
        name:"Yardım", 
        icon:<AiFillHome/>,
        type:"settings",
    },
    {
        name:"Send Feedback", 
        icon:<AiFillHome/>,
        type:"settings",
    },
]