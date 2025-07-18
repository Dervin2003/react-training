import { useState, useDeferredValue, useMemo } from "react";

function DefferedValue() {
  const [input, setInput] = useState("");

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
  }

  // Delay the input value for non-urgent updates (like list rendering)
  const deferredInput = useDeferredValue(input);

  // Memorize the heavy computation so it's only recalculated when deferredInput changes
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {list}
    </div>
  );
}

export default DefferedValue;
