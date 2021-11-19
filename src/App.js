import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import opening from "./Images/opening.png";
import closing from "./Images/closing.png";

function App() {
    const [quote, setQuote] = useState("");
    console.log(quote);

    const GetQuote = async () => {
        const quoteResponse = await fetch("https://type.fit/api/quotes");
        const quoteData = await quoteResponse.json();

        const GenerateRandomNumber = () => {
            let randomNum = Math.floor(Math.random() * quoteData.length);
            setQuote(quoteData[randomNum]);
        };
        GenerateRandomNumber();
    };

    useEffect(() => {
        GetQuote();
    }, []);

    return (
        <div className="wrapper container-fluid">
            <div className=" containers">
                <div className="tweet-btn">
                    <a
                        href={`https://twitter.com/intent/tweet?text=${quote.text}`}
                    >
                        <button className="tweet">Tweet</button>
                    </a>
                </div>
                <div className="opening-quote">
                    <img src={opening} alt="openingtag" />
                </div>
                <div className="quote-container">
                    <div className="quote-content">{quote.text}</div>
                </div>
                <div className="closing-quote">
                    <img src={closing} alt="closingtag" />
                </div>
                <div className="author">{`~${quote.author}`}</div>
                <div className="quote-btn">
                    <button className="new-quote" onClick={GetQuote}>
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );

}

export default App;
