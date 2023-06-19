import { useEffect, useState } from "react";

function App (){
  const [text, setText] = useState("");
  const [len, setLen] = useState(0);

  useEffect(() => {
    console.log(text, text.length)
    if (text.length === 0) {
      setLen(0); return;
    }
    setLen(text.trim().split(' ').length)
  }, [text]);

  return(
    <div>
      <h1>Reponsive Paragraph Word Counter</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <p>Word Count {len}</p>
    </div>
  )
}

export default App;