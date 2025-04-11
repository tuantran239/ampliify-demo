"use client";

import "@/source/ampify-config";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

interface HomeProps {
  message: string;
  session: string;
}

const Home: React.FC<HomeProps> = ({ message: mess, session }) => {
  const [message, setMessage] = useState(mess);
  const router = useRouter();
  const inputRef = useRef<any>(null);

  const onClickSignOut = () => {
    signOut().then(() => {
      router.push("/");
    });
  };

  const onSendMessage = async () => {
    try {
      const data = await fetch(
        "https://gx4ppg428c.execute-api.us-east-1.amazonaws.com/dev/hello",
        {
          method: 'POST',
          headers: {
            Authorization: session,
          },
          body: JSON.stringify({
            message: inputRef?.current?.value,
          }),
        }
      );

      const dataJson = await data.json()

      setMessage(dataJson.message)
    } catch (error: any) {
      alert(error.message)
    }
  };

  return (
    <div>
      <p>{message}</p>
      <div className="flex my-3">
        <input placeholder="sendMessage" ref={inputRef} />
        <button onClick={onSendMessage}>Send</button>
      </div>
      <button onClick={onClickSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
