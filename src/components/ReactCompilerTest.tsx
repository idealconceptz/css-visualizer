/**
 * React Compiler Test Component
 *
 * This component demonstrates the React Compiler in action.
 * The compiler will automatically optimize this component by:
 * - Memoizing expensive calculations
 * - Optimizing re-renders
 * - Adding automatic dependency tracking
 */

"use client";

import { useState } from "react";

export default function ReactCompilerTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React Compiler");

  // This expensive calculation will be automatically memoized by React Compiler
  const expensiveValue = count * 1000 + Math.random();

  // This derived state will be optimized automatically
  const message = `${name} count is ${count}`;

  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">React Compiler Test</h3>
      <p className="text-blue-700 mb-4">{message}</p>
      <p className="text-sm text-blue-600 mb-4">Expensive value: {expensiveValue.toFixed(2)}</p>
      <div className="space-x-2">
        <button onClick={() => setCount((c) => c + 1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Increment
        </button>
        <button
          onClick={() => setName(name === "React Compiler" ? "Optimized!" : "React Compiler")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Toggle Name
        </button>
      </div>
    </div>
  );
}
