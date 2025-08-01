export default function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <div className="font-bold">My App</div>
      <div className="space-x-4">
        <a href="/feedback">Feedback</a>
        <a href="/admin">Admin</a>
      </div>
    </nav>
  );
}
