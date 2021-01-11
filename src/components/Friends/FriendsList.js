import PropTypes from 'prop-types';
import Friend from './Friend';
import Container from '../Container/Container';
import s from './FriendsList.module.css';

export default function FriendsList({ items }) {
  return (
    <Container>
      <ul className={s.list}>
        {items.map(item => (
          <li className={s.item} key={item.id}>
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
