import PropTypes from 'prop-types';

export default function Friend(props) {
  const { imageUrl, nameFriend, isOnline } = props;
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={imageUrl} alt="" width="48" />
      <p className="name">{nameFriend}</p>
    </>
  );
}

Friend.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nameFriend: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
