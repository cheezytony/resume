import { Stack as StackType } from "../../../types/profile";
import profile from "../../utils/profile";
import StackItem from "./StackItem";
import "./Stack.css";

function Stack() {
  const { stack } = profile;
  const getMainStack = (): StackType[] => {
    return stack.filter((singleStack: StackType) => singleStack.isMainStack);
  }
  const mainStack = getMainStack();

  return (
    <section className="app__section">
      <h3>My Stack</h3>

      <table className="app__stack">
        <tbody>
          { mainStack.map((singleStack: StackType, index: number) => (
            <StackItem key={ index } stack={ singleStack } />
          )) }
        </tbody>
      </table>
    </section>
  );
}

export default Stack;
