"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthCpn = () => {
  const { authStatus } = useAuthenticator();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authStatus === "authenticated") {
      fetchAuthSession().then((session) => {
        router.replace(`/home?session=${session.tokens?.idToken}`);
      });
    }
    setLoading(false);
  }, [authStatus, router]);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return <Authenticator loginMechanisms={["email"]}></Authenticator>;
};

export default AuthCpn;
