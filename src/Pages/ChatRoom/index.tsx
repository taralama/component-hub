import { useEffect, useState } from 'react';
import useSocket from '../../components/hooks/Socket';

const Chat = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!socket) return; // Only attach listeners if socket is connected

    socket.on('message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.emit('welcome', 'Hi this is tara');

    return () => {
      socket.off('message');
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket) socket.emit('welcome', 'Hello from client!');
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{`${m} `}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
