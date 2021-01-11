import PropTypes from 'prop-types';

import defaultImage from './default.jpg';
import Container from '../Container/Container';
import s from './Profile.module.css';
// when we want to use default image we need to import this one like above;

export default function Profile(props) {
  const {
    urlImg = defaultImage,
    name,
    tag,
    location,
    followers,
    views,
    likes,
  } = props;
  return (
    <Container>
      <div className={s.profile}>
        <div className={s.description}>
          <img className={s.avatar} src={urlImg} alt="user avatar" />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stars}>
          <li className={s.item}>
            <span className={s.label}>Followers:</span>
            <span className={s.quantity}> {followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views:</span>
            <span className={s.quantity}> {views}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes:</span>
            <span className={s.quantity}> {likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

Profile.propTypes = {
  urlImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
