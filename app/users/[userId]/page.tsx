interface Props {
  params: { userId: string };
}

import { users } from "@/app/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function UserPage(props: Props) {
  const user = users[Number(props.params.userId)];
  if (user === undefined) {
    notFound();
  }
  return (
    <div>
      <>
        <h1 className="text-lg border-b pb-1 mb-1">{user.name}</h1>
        <p>{user.prof}</p>
        <p className="mt-4">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Go back
          </Link>
        </p>
      </>
    </div>
  );
}
