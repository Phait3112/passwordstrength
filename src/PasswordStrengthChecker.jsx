import React, { useRef, useState } from 'react'

function Psc() {
    let [typo,setTypo] = useState('password')
    let [open,setOpen] = useState('🙈')
    let [ww,setWW] = useState('0%')
    let [bgg,setBgg] = useState("")
    let getval = useRef()
    let [forstength,setForstrength] = useState('weak')

    function typechanger(){
        if (typo == "password") {
            setTypo('text')
            setOpen("🙉")
        } else {
            setTypo('password')
            setOpen("🙈")

        }
    }

    function checker() {
        if (getval.current.value.length <= 4) {
            setWW("30%")
            setBgg("black")
        }else if(getval.current.value.length <= 8){
            setWW("70%")
            setBgg("yellow")
        }
    }
    
  return (
    <div className=' bg-sky-400 w-[max-content] p-[20px]'>
        <div className=' flex gap-[5px] mb-2'>
            <input type={typo} className=' border border-solid border-red-400' ref={getval} onInput={checker}/>
            {/* <button className=' bg-slate-600 p-2 rounded-[3px]' onClick={()=> typo == "password"? setTypo("text") : setTypo('password') }>🙈</button> */}
            <button className=' bg-slate-600 p-2 rounded-[3px]' onClick={typechanger}>{open}</button>
        </div>
        <div className=' flex items-center gap-2'>
            <section className=' bg-zinc-800 w-[170px] h-[7px] rounded-lg'>
                <div className=' h-[inherit] rounded' style={{width:ww,backgroundColor:bgg,transition:"0.5s"}}></div>
            </section>  
            <p>{forstength}</p>
        </div>
    
    </div>
  )
}

export default Psc