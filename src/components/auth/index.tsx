"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import AuthCpn from "./auth-cpn";
import '@/source/ampify-config'

const Auth = () => {
  return (
    <Authenticator.Provider>
      <AuthCpn />
    </Authenticator.Provider>
  );
};

export default Auth;
