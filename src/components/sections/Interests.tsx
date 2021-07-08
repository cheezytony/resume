/* eslint-disable array-callback-return */
import InterestItem from "./InterestItem";
import profile from "../../utils/profile";
import { Interest } from "../../../types/profile";
import "./Interests.css";

function Interests() {
  const { interests } = profile;
  
  
  return (
    <section className="app__section">
      <h3>Interests</h3>

      <div className="app__interest">
        {interests.map((interest: Interest, index: number) => (
          <InterestItem key={ index } interest={ interest } />
        )) }
      </div>
    </section>
  );
}

export default Interests;
