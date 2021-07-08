import Bio from "./Bio";
import Expertise from "./Expertise";
import Interests from "./Interests";
import Socials from "./Socials";
import Stack from "./Stack";

function Summary() {
  return (
    <div>
      <Bio />

      <Expertise />

      <Stack />

      <Interests />

      <Socials />
      {/* Positions / Expertise */}
    </div>
  );
}

export default Summary;
