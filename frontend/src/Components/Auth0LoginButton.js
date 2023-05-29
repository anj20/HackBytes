import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      class="px-4 py-2 mr-3 md:mr-0 btn btn-primary md:btn-secondary"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default Auth0LoginButton;
