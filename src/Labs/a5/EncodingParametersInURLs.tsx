import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);

  const fetchSum = async (a: Number, b: Number) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: Number, b: Number) => {
    const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6 className="text-danger">{welcome}</h6>

      <h4>Calculator</h4>
      <input
        type="number"
        className="form-control"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <br />

      <input
        type="number"
        className="form-control"
        onChange={(e) => setB(parseInt(e.target.value))}
        value={b}
      />
      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-sm btn-primary"
      >
        Add {a} + {b}
      </a>

      <a
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-sm btn-danger mx-2"
      >
        Substract {a} - {b}
      </a>

      <a
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
        className="btn btn-sm btn-success"
      >
        Multiply {a} * {b}
      </a>

      <a
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
        className="btn btn-sm btn-warning mx-2"
      >
        Divide {a} / {b}
      </a>
      <br />
      <br/>
      <input value={result} type="number" readOnly className="form-control" />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} className="btn btn-sm btn-primary">
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} className="btn btn-sm btn-danger mx-2">
        Fetch Substraction of {a} - {b}
      </button>
    </div>
  );
}
export default EncodingParametersInURLs;
