function App() {
    const requestApi = async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        console.log(data);
    };
    requestApi();
    return (
        <button type="button" onClick={handleChangeQuote}>
            next quote
        </button>
    );
}

export default App;
