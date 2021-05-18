import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../App";

function Logout() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    let logout = async () => {
      const res = await fetch("/logout", {
        method: "get",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          dispatch({ type: "USER", payload: false });
          history.push("/Login", { replace: true });
          if (res.status != 200) {
            throw new Error(res.error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //call function
    logout();
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Logout;
