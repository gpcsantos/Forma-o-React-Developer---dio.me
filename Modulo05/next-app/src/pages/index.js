import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.name}
        <img
          src={session.user.image}
          alt='image Profile'
          width={50}
          height={50}
        />
        <br />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('githb')}>Sign in</button>
    </>
  );
}
