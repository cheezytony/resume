import { Stack } from "../../../types/profile";
import Progress from "../primitives/Progress";

function StackItem({ stack }: { stack: Stack }) {
  return (
    <tr className="app__stack__item">
      <td>
        <div className="app__stack__item__title">
          <span className="app__stack__item__title__language">
            { stack.language }
          </span>
          <span className="app__stack__item__title__framework">
            { stack.framework }
          </span>
        </div>
      </td>
      <td>
        <Progress value={ stack.proficiency } max={ 100 } />
      </td>
    </tr>
  );
}

export default StackItem;
