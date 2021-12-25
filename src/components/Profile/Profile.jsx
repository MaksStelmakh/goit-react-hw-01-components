import PropTypes from "prop-types"
import { Card, Photo, NameUser, OtherInfo, List, LiPosition, NameStatics, Numbers } from "./Profile.styled"

export default function Profile({ username, tag, avatar, location, stats }) { 
  return <Card>
  <div>
    <Photo
      src={avatar}
      alt={username}
    />
    <NameUser>{username}</NameUser>
    <OtherInfo>@{tag}</OtherInfo>
    <OtherInfo>{location}</OtherInfo>
  </div>

  <List>
    <LiPosition>
      <NameStatics>Followers</NameStatics>
      <Numbers>{stats.followers}</Numbers>
    </LiPosition>
    <LiPosition>
      <NameStatics>Views</NameStatics>
      <Numbers>{stats.views}</Numbers>
    </LiPosition>
    <LiPosition>
      <NameStatics>Likes</NameStatics>
      <Numbers>{stats.likes}</Numbers>
    </LiPosition>
  </List>
</Card>
}

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
}