import { useState, useEffect } from "react";

function App() {
    const [quote, setQuote] = useState(" ");
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
        "#000000",
    ];

    const requestApi = () => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuote(data[randomNum]);
                let randomQuote = Math.floor(Math.random() * 17);
                setChangeBackground(colors[randomQuote]);
            });
    };

    useEffect(() => {
        requestApi();
    }, []);

    return (
        <>
            <div
                className="container"
                style={{ backgroundColor: changeBackground }}
            >
                <div className="subcontainer">
                    <div className="quote" style={{ color: changeBackground }}>
                        <i class="fa fa-quote-left">{`  ${quote.text}"`}</i>
                    </div>
                    <div className="author" style={{ color: changeBackground }}>
                        <h4>{`~${quote.author}`}</h4>
                    </div>
                    <div className="button">
                        <button style={{ backgroundColor: changeBackground }}>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${quote.text}`}
                            >
                                Tweet
                            </a>
                        </button>
                        <button
                            type="button"
                            onClick={requestApi}
                            style={{ backgroundColor: changeBackground }}
                        >
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
