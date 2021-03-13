import { useState } from "react";

function App() {
    const [quote, setQuote] = useState("");


    const requestApi = () => {
        fetch("https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((data)=>{
        let randomNum=Math.floor(Math.random()*data.length);
        setQuote(data[randomNum])
        }
        )

    };




    return (
        <>
            <button type="button" onClick={requestApi}>next quote</button>
            <h1>{quote.text}</h1>
        </>
    );
}

export default App;
