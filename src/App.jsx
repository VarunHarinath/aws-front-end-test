import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 5 || count === -5) {
      setMessage("Warning: Range of count should be -5 to +5");
    } else {
      setMessage("");
    }
  }, [count]);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > -5) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="m-5">
        <div className="text-center">
          <h3 className="text-primary fw-semibold text-decoration-underline">
            ASSIGNMENT - 3
          </h3>
          <p className="fs-4 mt-5">
            Count : <span className="text-primary fw-bold">{count}</span>
          </p>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary mx-3"
            type="button"
            onClick={decrement}
            disabled={count <= -5}
          >
            Decrement
          </button>
          <button
            className="btn btn-primary mx-3"
            type="button"
            onClick={increment}
            disabled={count >= 5}
          >
            Increment
          </button>
        </div>
        <div className="text-center mt-3 fs-5 text-danger fw-semibold">
          {message}
        </div>
        <div className="text-center text-info-emphasis mt-5 fw-semibold fs-4  p-3 bg-info bg-opacity-10 border border-info rounded-pill  width">
          test
        </div>
      </div>
    </>
  );
}

export default App;
