import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [quote, setQuote] = useState("");
    console.log(quote);

    const [changeBackground, setChangeBackground] = useState();

    const colors = [
        "RGBA(76,82,112,.7)",
        "rgba(49,20,50,.7)",
        "rgba(34,140,34,.7)",
        "rgba(255,120,31,.7)",
        "rgba(6,45,76,.7)",
        "rgba(76,52,18,.7)",
        "rgba(29,41,56,.7)",
        "rgba(0,0,0,.7)",
        "rgba(127,23,52,.7)",
        "rgba(89,39,32,.7)",
        "rgba(102,93,30,.7)",
        "rgba(75,83,32,.7)",
    ];

    const GetQuote = async () => {
        const quoteResponse = await fetch("https://type.fit/api/quotes");
        const quoteData = await quoteResponse.json();

        const GenerateRandomNumber = () => {
            let randomQuote = Math.floor(Math.random() * quoteData.length);
            setQuote(quoteData[randomQuote]);

            let randomColor = Math.floor(Math.random() * 12);
            setChangeBackground(colors[randomColor]);
        };
        GenerateRandomNumber();
    };

    useEffect(() => {
        GetQuote();
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className="wrapper container-fluid"
            style={{ backgroundColor: changeBackground }}
        >
            <div
                className="containers"
                style={{ backgroundColor: changeBackground }}
            >
                <div className="tweet-button">
                    <a
                        href={`https://twitter.com/intent/tweet?text=${quote.text}`}
                    >
                        <button
                            className="tweet"
                            style={{
                                color: changeBackground,
                                fontWeight: "900",
                            }}
                        >
                            Tweet
                        </button>
                    </a>
                </div>
                <div className="opening-quote">
                    <i
                        className="fa fa-quote-left"
                        style={{ color: "white" }}
                    ></i>
                </div>
                <div className="quote-content">
                    <h1 style={{ color: "white" }}>{quote.text}</h1>
                </div>
                <div className="closing-quote">
                    <i
                        className="fa fa-quote-right"
                        style={{ color: "white" }}
                    ></i>
                </div>
                <div className="author">
                    <p
                        style={{ color: "white", fontWeight: "700" }}
                    >{`~ ${quote.author}`}</p>
                </div>
                <div className="quote-button">
                    <button
                        className="new-quote"
                        onClick={GetQuote}
                        style={{ color: changeBackground, fontWeight: "900" }}
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
