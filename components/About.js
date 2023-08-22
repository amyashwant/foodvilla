import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import ProfileClass from "./ProfileClass"
// import Profile from "./Profile"
const About = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      console.log("clean  up");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div>
        this is About page_type
        {/* <ProfileClass name={"yaash"}/> */}
        <Outlet />
      </div>
      <Link to="/about/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};
export default About;
