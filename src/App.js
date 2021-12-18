import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import "./styles.scss";

export default function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  const active = input.length > 0 ? "active" : "";

  const error = input.length < 4 && "Name must be at least 4 characters long";

  return (
    <div className="form">
      <div className="form-top-label">
        <label className={`form-top-label-text ${active}`}>Project Name</label>
      </div>
      <div>
        <input
          type="text"
          className={`form-input ${active}`}
          value={input}
          onChange={handleChange}
        />
        <label className={`form-label ${active}`}>Enter something here</label>
      </div>
      {active && error && (
        <div className="form-error">
          <div className="form-error-container">
            <BiErrorAlt className="form-error-container-icon" />
            <span className="form-error-container-text">{error}</span>
          </div>
        </div>
      )}
    </div>
  );
}
