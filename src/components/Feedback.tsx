const dummyFeedbacks = [
  { id: 1, text: 'Great app!' },
  { id: 2, text: 'Needs dark mode.' },
];

export default function FeedbackList() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Feedback List</h2>
      <ul className="space-y-2">
        {dummyFeedbacks.map((item) => (
          <li key={item.id} className="border p-2 rounded bg-gray-100">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
