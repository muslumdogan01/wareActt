export default function AlreadyVerified() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-yellow-600 mb-2">⚠️ Already Verified</h1>
      <p className="text-gray-700 mb-4">This email has already been verified.</p>
      <a
        href="/login"
        className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
      >
        Go to Login
      </a>
    </div>
  );
}
