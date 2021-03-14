import { useState, useEffect } from "react";

function App() {
    const [quote, setQuote] = useState(" ");

    const requestApi = () => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let randomNum = Math.floor(Math.random() * data.length);
                setQuote(data[randomNum]);
            });
    };

    useEffect(() => {
        requestApi();
    }, []);

    return (
        <>
            <div className="container">
                <div className="subcontainer">
                    <div className="quote">
                        <h5>{`“${quote.text}"`}</h5>
                    </div>
                    <div className="author">
                        <h4>{`~${quote.author}`}</h4>
                    </div>
                    <div className="button">
                        <button type="button" onClick={requestApi}>
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
