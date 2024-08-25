import { useEffect, useState} from "react";
function Home() {
 const [img,setImg] = useState('')
 
 useEffect(()=>{
  const ImageURL = "https://dl.dropboxusercontent.com/scl/fi/fnnxjm7c8rzdh75nds6xo/file.png?rlkey=becq8hokxxc9trnpinkzothtq&st=prqziiuo" 
  setImg(ImageURL)
 },[])

  return (
    <div className=" flex flex-row items-center justify-center " >
      
        <img src={img}  alt="home-img" className="w-1/2"/>
      
         <center className="font-semibold dark:text-white text-2xl">
           Welcome to the App

         </center>

    </div>
  )
}

export default Home;