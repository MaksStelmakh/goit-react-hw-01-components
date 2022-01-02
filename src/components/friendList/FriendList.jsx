import PropTypes from "prop-types";
import {
  Section,
  Elements,
  Avatar,
  ProfileName,
  IsOnlineProfile,
} from "./FriendList.styled";

export default function FriendList({ data }) {
  return (
    <Section>
      {data.map(({ id, avatar, name, isOnline }) => {
        return (
          <Elements key={id}>
            {isOnline ? (
              <IsOnlineProfile
                style={{
                  backgroundColor: `#00FF00`,
                }}
              ></IsOnlineProfile>
            ) : (
              <IsOnlineProfile
                style={{
                  backgroundColor: `#FF0000`,
                }}
              ></IsOnlineProfile>
            )}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <ProfileName>{name}</ProfileName>
          </Elements>
        );
      })}
    </Section>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
