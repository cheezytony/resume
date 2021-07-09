import { Social } from '../../../types/profile';

function SocialItem({ social }: { social: Social }) {
  return (
    <a
      href={ social.url }
      className="app__social__item"
      target="_blank"
      rel="noreferrer"
      title={ social.title }
    >
      <div className="app__social__item__icon">
        <ion-icon name={ social.icon } />
      </div>
      <div className="app__social__item__title">
        { social.title }
      </div>
    </a>
  );
}

export default SocialItem;