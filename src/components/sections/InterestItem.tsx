import { Interest } from '../../../types/profile';

function InterestItem({ interest }: { interest: Interest }) {
  return (
    <div className="app__interest__item">
      <div className="app__interest__item__icon">
        <ion-icon name={interest.icon} />
      </div>
      <div className="app__interest__item__title">
        {interest.title}
      </div>
    </div>
  );
}

export default InterestItem;