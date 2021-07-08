import { Job } from "../../../types/profile";
import profile from "../../utils/profile";
import WorkHistoryItem from "./WorkHistoryItem";
import "./WorkHistory.css";

function WorkHistory() {

  const { workHistory } = profile;

  return (
    <section className="app__section">
      <h3>Work History</h3>

      <div className="app__work__history">
        { workHistory.map((job: Job, index: number) => (
          <WorkHistoryItem key={ index } job={ job } />
        )) }
      </div>
    </section>
  );
}

export default WorkHistory;
