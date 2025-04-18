'use client';
import { useEffect, useState } from 'react';

export default function BackendTestPage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error: ' + err.message));
  }, []);

  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Test Backend Call</h1>
      <p>{message}</p>
    </main>
  );
}
