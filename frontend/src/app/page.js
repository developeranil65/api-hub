export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-bold text-center mb-6">
        Welcome to API Marketplace
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-xl">
        Build, manage, and monetize your APIs.  
        Access developer dashboards, monitor usage, and manage subscriptions — all from one platform.
      </p>
      <a
        href="http://localhost:5000/api/health"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
      >
        Check Backend Health
      </a>
    </div>
  );
}