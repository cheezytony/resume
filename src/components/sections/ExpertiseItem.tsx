import { Expertise } from '../../../types/profile';

function ExpertiseItem({ expertise }: { expertise: Expertise }) {
  return (
    <li className="app__expertise__item">
      <div className="app__expertise__item__title">
        { expertise.title }
      </div>
    </li>
  );
}

export default ExpertiseItem;
