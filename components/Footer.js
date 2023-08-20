import UserContext from "./Utils/UserContext";
import { useContext } from "react";

export const Footer = () => {
  const {user}= useContext(UserContext)
    return <>
    <h1>footer</h1>
    <h1>{user.name}</h1>
    </>
  };