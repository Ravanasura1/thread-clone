import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPages = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return (
    <div>{authScreenState === "Login" ? <LoginCard /> : <SignupCard />}</div>
  );
};

export default AuthPages;
