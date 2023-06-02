import PropTypes from 'prop-types';
import  css  from './FriendListItem.module.css';


const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return <li className={css.item} key={id}>
     {isOnline ? ( <span className={css.online}></span>) : (
      <span className={css.offline}></span>)
     }
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;





