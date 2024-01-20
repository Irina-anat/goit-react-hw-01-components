import PropTypes from 'prop-types'; 
import { ProfileCard, Description, AvatarImg, UserName, UserTag, UserLocation, Stats, StatsCards, LabelStats, QuantityStats } from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarImg src={avatar} alt={username} width="300"/>
        <UserName >{username}</UserName>
        <UserTag >@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <StatsCards>
          <LabelStats>Followers</LabelStats>
          <QuantityStats>{stats.followers}</QuantityStats>
        </StatsCards>
        <StatsCards>
          <LabelStats>Views</LabelStats>
          <QuantityStats>{stats.views}</QuantityStats>
        </StatsCards>
        <StatsCards>
          <LabelStats>Likes</LabelStats>
          <QuantityStats>{stats.likes}</QuantityStats>
        </StatsCards>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;