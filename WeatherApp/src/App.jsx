import "./App.css";

function App() {
  return (
    <>
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="City" />
          <button>Go</button>
        </div>
        <div className="info">
          <img src="/Assets/cloud.png" alt="" />
        </div>
      </div>
      <img src="wind.png" alt="" />
    </>
  );
}

export default App;
