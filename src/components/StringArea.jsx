import React from 'react'
import { useState } from 'react'

const StringArea = ({text,max}) => {

    const [expanded,setExpanded] = useState(false)

    let shortText = text

    if(text.length>max && !expanded){
        shortText= text.slice(0,max)+'...daha fazla'
    }


  return (
    <p onClick={()=>setExpanded(!expanded)}>{shortText.split('\n').map((line,i)=><span key={i}>{line}<br></br></span>)}</p>
  )
}

export default StringArea