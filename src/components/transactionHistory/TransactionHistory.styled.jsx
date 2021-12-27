import styled from "@emotion/styled";

export const Table = styled.table`
  margin: 0 auto;
  width: 900px;
  height: 800px;
  border: 1px solid #111111;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #87ceeb;
  width: 900px;
  height: 50px;
  padding: 0;
`;

export const Names = styled.td`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-align: center;
`;

export const Values = styled.td`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #757575;
  text-align: center;
  text-transform: capitalize;
`;

export const Lines = styled.tr`
  &:nth-child(2n) {
    background-color: #d3d3d3;
  }
`;
