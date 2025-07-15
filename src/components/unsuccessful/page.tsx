export default function Unsuccessful() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-2">❌ Verification Failed</h1>
      <p className="text-gray-700">The verification link is invalid or expired.</p>
    </div>
  );
}
