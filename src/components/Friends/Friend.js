import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend(props) {
  const { imageUrl, nameFriend, isOnline} = props;
  return (
    <>
      <span className={isOnline ? s.green : s.red}></span>
      <img className={s.avatar} src={imageUrl} alt="" width="48" />
      <p className={s.name}>{nameFriend}</p>
    </>
  );
}

Friend.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nameFriend: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
