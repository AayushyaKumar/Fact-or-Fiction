import {useState} from "react"


export default function Forms(){
    const[input,setInput]=useState("")
const [output,setOutput]=useState("")


const handleInputChange = (e) => {

setInput(e.target.value)}
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
     const response= await fetch(`${import.meta.env.VITE_PORT}news`,{
      method:'POST',
        
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
      },  body: JSON.stringify({ input}),
     })
     const text=await response.text();
     
    if(text){
      setOutput(text)
    }}catch(err){
      console.error(err)
    }
    
    }

return(
  <div>
 

<div className="">
 
<div className="">
  <form action="" onSubmit={handleSubmit}>
<label htmlFor=""></label>
    <input type="text"  placeholder="Is this really true news?" className="mb-10 outline-double rounded py-6 px-3 w-full min-w-0 overflow-x-auto whitespace-nowrap flex flex-col p-2" value={input} onChange={handleInputChange}/>

    <div className="bg-green-600 rounded-lg py-3 px-3 font-semibold hover:bg-green-700  max-w-60 flex-row items-center justify-center">
        <button className=" " > Check Factos </button>
    </div>
  
  </form></div>
 <div className="mt-12 bg-yellow-200 border-4  border-sky-500 rounded" style={{ whiteSpace: 'pre-wrap' }}>
 {output &&<p className="p-6 font-customTwo font-semibold ">{output} </p>}
</div>
</div>
</div>
    )
}
