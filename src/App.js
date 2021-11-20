import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [quote, setQuote] = useState("");
    console.log(quote);

    const [changeBackground, setChangeBackground] = useState("green");
    const colors = [
        "#FF007F",
        "E0115F",
        "#4C5270",
        "#7A4988",
        "#601A35",
        "#4D0F28",
        "#311432",
        "#228C22",
        "#ff781f",
        "#116DB6",
        "#00239CFF",
        "#FFB03E",
        "#165BAA",
        "0B1354",
        "0b032d",
        "#7584AD",
    ];

    const GetQuote = async () => {
        const quoteResponse = await fetch("https://type.fit/api/quotes");
        const quoteData = await quoteResponse.json();

        const GenerateRandomNumber = () => {
            let randomQuote = Math.floor(Math.random() * quoteData.length);
            setQuote(quoteData[randomQuote]);

            let randomColor = Math.floor(Math.random() * 16);
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
            <div className="containers">
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
                        style={{ color: changeBackground }}
                    ></i>
                </div>
                <div className="quote-content">
                    <h1 style={{ color: changeBackground }}>{quote.text}</h1>
                </div>
                <div className="closing-quote">
                    <i
                        className="fa fa-quote-right"
                        style={{ color: changeBackground }}
                    ></i>
                </div>
                <div className="author">
                    <p
                        style={{ color: changeBackground, fontWeight: "700" }}
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
