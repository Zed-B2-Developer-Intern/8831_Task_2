'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  
  const handleSubmit = async () => {
    console.log('Sending feedback:', feedback);
    // Later: Send to API or DB
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full h-32 border p-2"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
