/* eslint-disable array-callback-return */
import SocialItem from "./SocialItem";
import profile from "../../utils/profile";
import { Social } from "../../../types/profile";
import "./Socials.css";

function Socials() {
  const { socials } = profile;
  
  
  return (
    <section className="app__section">
      <h3>Connect with me</h3>

      <div className="app__social">
        {socials.map((social: Social, index: number) => (
          <SocialItem key={index} social={social} />
        )) }
      </div>
    </section>
  );
}

export default Socials;
