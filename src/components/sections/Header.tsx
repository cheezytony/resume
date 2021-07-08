import { Email, Expertise, Location, Phone } from '../../../types/profile';
import profile from '../../utils/profile';
import avatar from '../../assets/img/avatar/antonio-okoro-goofy.jpg';
import './Header.css';

function  Header() {
  const {
    firstName, lastName, expertise,
    locations, phones, emails, website
  } = profile;
  
  const getFullName = (): string => {
    return `${firstName} ${lastName}`;
  }
  
  const getMostProficientRole = (): Expertise | null => {
    let maxProficiency = 0;
    let mostProficientRole: Expertise | null = null;
    expertise.forEach((position: Expertise) => {
      if (position.proficiency > maxProficiency) {
        maxProficiency = position.proficiency;
        mostProficientRole = position;
      }
    });
    return mostProficientRole;
  }
  
  const getPrimaryLocation = (): Location => {
    return locations[0];
  }

  const getPrimaryPhoneNumber = (): Phone => {
    return phones.find((phone: Phone) => phone.type === 'primary') || phones[0];
  }

  const getPrimaryEmailAddress = (): Email => {
    return emails.find((email: Email) => email.type === 'primary') || emails[0];
  }
  
  const fullName = getFullName();
  const preferredPosition = getMostProficientRole();
  const primaryLocation = getPrimaryLocation();
  const primaryPhone = getPrimaryPhoneNumber();
  const primaryPhoneNumber = `${primaryPhone.countryCode}${primaryPhone?.number}`
  const primaryEmailAddress = getPrimaryEmailAddress();
  
  return (
    <header className="app__header">
      <section className="app__header__brand">
        <div className="app__header__avatar">
          <img
            src={ avatar }
            alt={ fullName }
            className="app__header__avatar__img"
            height="120"
            width="120"
          />
        </div>
      </section>
      <section className="app__header__details">
        <div className="col">
          <h1>{ fullName }</h1>
          <h2>{ preferredPosition?.title }</h2>
        </div>
        <div className="col">
          <p>
            Location: 
            <a
              href="https://goo.gl/maps/DXJ4kkeGBzAiGGvTA"
              target="_blank"
              rel="noreferrer"
            >
              <strong>{primaryLocation.state}, {primaryLocation.country}</strong>
            </a>
          </p>
          <p>
            Phone Number: 
            <a href={ `tel:${primaryPhoneNumber}` }>
              <strong>{ primaryPhoneNumber }</strong>
            </a>
          </p>
          <p>
            Email Address: 
            <a
              href={ `mailto:${primaryEmailAddress.address}?subject=i%20love%20your%20resume` }
              target="_blank"
              rel="noreferrer"
            >
              <strong>{ primaryEmailAddress.address }</strong>
            </a>
          </p>
          <p>
            Website: 
            <a href={ website.url } target="_blank" rel="noreferrer">
              <strong>{ website.url }</strong>
            </a>
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
