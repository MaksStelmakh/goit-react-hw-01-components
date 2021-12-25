import PropTypes from "prop-types"
import { Card, Photo, NameUser, OtherInfo, List, LiPosition, NameStatics, Numbers } from "./Profile.styled"

export default function Profile({ username, tag, avatar, location, followers, views, likes }) { 
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
      <Numbers>{followers}</Numbers>
    </LiPosition>
    <LiPosition>
      <NameStatics>Views</NameStatics>
      <Numbers>{views}</Numbers>
    </LiPosition>
    <LiPosition>
      <NameStatics>Likes</NameStatics>
      <Numbers>{likes}</Numbers>
    </LiPosition>
  </List>
</Card>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}