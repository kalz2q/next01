import Link from "next/link";

export default function UserNotFoundPage() {
  return (
    <div>
      <>
        <h1 className="text-lg border-b pb-1 mb-1">Error!</h1>
        <p className="mt-4">User not found!!!!!</p>
        <p className="mt-4">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Go back
          </Link>
        </p>
      </>
    </div>
  );
}
