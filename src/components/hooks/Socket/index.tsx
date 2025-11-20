import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = (url: string = 'http://localhost:8080') => {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Create socket
    const socket: Socket = io(url);
    socketRef.current = socket;

    // Connection success
    socket.on('connect', () => {
      console.log('Connected to server!');
      setConnected(true);
    });

    socket.on('message', () => {
      console.log('d');
    });

    socket.emit('asdf');

    // Connection error
    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
      setConnected(false);
    });

    return () => {
      socket.disconnect();
      setConnected(false);
    };
  }, [url]);

  // Return socket only if connected
  return connected ? socketRef.current : null;
};

export default useSocket;
