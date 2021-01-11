import PropTypes from 'prop-types';
import Friend from './Friend';
import Container from '../Container/Container';

export default function FriendsList({ items }) {
  return (
    <Container>
      <ul className="friend-list">
        {items.map(item => (
          <li key={item.id}>
            <Friend
              imageUrl={item.avatar}
              nameFriend={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
