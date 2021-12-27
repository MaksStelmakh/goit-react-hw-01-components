import styled from "@emotion/styled";

export const Section = styled.ul`
  padding: 20px 10px 20px 10px;
  margin: 50px auto;
  list-style: none;
  background-color: #b0e0e6;
  border: 1px solid #111111;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  width: 200px;
  height: 470px;
`;

export const Elements = styled.li`
  margin: 0 auto;
  display: flex;
  border: 1px solid #111111;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #87ceeb;
  width: 190px;
  height: 80px;

  &:not(last-child) {
    margin-bottom: 15px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin: auto 0 auto 10px;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03em;
  margin: auto 0 auto 20px;
`;

export const IsOnlineProfile = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto 0 auto 10px;
`;
