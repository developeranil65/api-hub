export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center space-x-8">
      <a href="/publisher" className="text-blue-600 font-semibold hover:underline">
        Publisher
      </a>
      <a href="/consumer" className="text-blue-600 font-semibold hover:underline">
        Consumer
      </a>
      <a href="/admin" className="text-blue-600 font-semibold hover:underline">
        Admin
      </a>
    </nav>
  );
}