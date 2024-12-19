'use client';

import { useState } from 'react';

export default function TextReverser() {
  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleReverse = () => {
    setReversedText(inputText.split('').reverse().join(''));
    setBackgroundColor(getRandomColor());
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {reversedText && (
        <>
          <div
            style={{ backgroundColor }}
            className="px-6 py-2 rounded-lg shadow-lg transition-colors duration-300"
          >
            {reversedText}
          </div>
          <h1 className="text-2xl font-bold">Text Reverser</h1>
        </>
      )}
      
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="px-4 py-2 border rounded-lg w-64"
        placeholder="Enter text to reverse"
        spellCheck="false"
        autoComplete="off"
      />
      
      <button
        onClick={handleReverse}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Reverse Text
      </button>
    </div>
  );
}