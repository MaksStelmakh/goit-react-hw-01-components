import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  margin-top: 28px;
`;

export const Items = styled.li`
  width: 80px;
  height: 70px;
`;

export const Dives = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03em;
`;
