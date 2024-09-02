import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your  income 🤑",
];

export default function App() {
  //^ STATE
  const [step, setStep] = useState(1); //^ Hooks
  const [isOpen, setIsopen] = useState(true);
  const [name, setName] = useState({ name: "akshay singh" });

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      setName({ name: "akshay" });
    }
  }

  if (isOpen) {
    return (
      <div className="steps">
        <button className="close" onClick={() => setIsopen(false)}>X</button>

        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]} {name.name}
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Oops!</h1>;
  }
}
