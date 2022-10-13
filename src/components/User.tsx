import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/future/image";

export default function User() {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <button
          onClick={() => signIn()}
          className="btn bg-blue-500 hover:bg-blue-600"
        >
          Sign in
        </button>
      )}
      {session?.user && (
        <>
          {session.user.image ? (
            <button onClick={() => signOut()}>
              <Image
                src={session.user.image}
                alt={session.user.name!}
                width={60}
                height={60}
                className="w-10 h-10 p-0.5 hover:bg-slate-300 rounded-full object-cover cursor-pointer"
              />
            </button>
          ) : (
            <div className="w-10 h-10 bg-blue-500 rounded-full" />
          )}
        </>
      )}
    </>
  );
}
