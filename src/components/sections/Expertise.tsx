import ExpertiseItem from "./ExpertiseItem";
import profile from "../../utils/profile";
import { Expertise as ExpertiseType } from "../../../types/profile";
import "./Expertise.css";

function Expertise() {
  const { expertise } = profile;

  return (
    <section className="app__section">
      <h3>Expertise</h3>

      <ul className="app__expertise">
        { expertise.map((expertise: ExpertiseType, index: number) => (
          <ExpertiseItem key={ index } expertise={ expertise } />
        )) }
      </ul>
    </section>
  );
}

export default Expertise;
