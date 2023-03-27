import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

export function SearchPlayer() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="h-screen w-full bg-background">
      <h1 className="text-body-bold">Hello world! {currentUser?.email}</h1>
    </div>
  );
}
