import  css  from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
export default FriendList;

