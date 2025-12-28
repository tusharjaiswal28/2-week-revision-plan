import { useState, useEffect } from "react";

function AutoSaveNotes() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Saved");

  useEffect(() => {
    if (!text) return;

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Saved:", text);
      setStatus("Saved ✓");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div>
      <h2>Auto-save Notes</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes..."
        rows={6}
        cols={40}
      />

      <p>{status}</p>
    </div>
  );
}

export default AutoSaveNotes;
