"use client";

import { useState } from "react";

export const Terminal = () => {
  const [command, setCommand] = useState("");

  const executeCommand = () => {
    console.log(`Executing command: ${command}`);
  };

  return (
    <div className="h-full w-full bg-blue-500">
      <h1>Terminal</h1>
      <input
        type="text"
        placeholder="Type your command here > "
        className="w-full bg-green-400"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
    </div>
  );
};
