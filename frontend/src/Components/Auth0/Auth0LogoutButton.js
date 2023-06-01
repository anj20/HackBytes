import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LogoutButton = ({ value }) => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        class="px-4 py-2 mr-3 md:mr-0 btn btn-primary md:btn-secondary"
        onClick={() => logout()}
      >
        {value}
      </button>
    )
  );
};

export default Auth0LogoutButton;
