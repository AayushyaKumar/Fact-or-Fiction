import React,{useState} from "react"
const port = process.env.REACT_APP_PORT
function Forms() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
const App=async(event)=>{
  event.preventDefault();
  const response = await fetch(`${port}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
    },
    body: JSON.stringify({ inputText }),
  
  }); 
  const text = await response.text();
   const formatText= text.split('.').map((paragraph, index) => (
    <span key={index}>{paragraph}.<br /></span>
  ))
    setOutputText(formatText);
  console.log(outputText)
}

  return(
   
    <div>
     <form action="flex items-center space-x-2" onSubmit={App}>
        <input type="text" 
        placheholder="Search"
        className="border border-gray-500 py-2 px-4 rounded-l-md   placeholder-black"
        value={inputText} 
        onChange={handleInputChange} 
        />

        <button  className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700"  type="submit">Check Factos</button>
        <div className="text-black" >{outputText && <p>{outputText}</p>}</div>
    {console.log(outputText)}
    </form>
    
    </div>
  )

}

export default Forms;