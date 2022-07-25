import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: separate;
  width: 400px;
  border-spacing: 1;
  box-shadow: 11px 11px 11px rgba(0, 0, 0, 0.1);
`;
export const THead = styled.thead`
  text-align: center;
  background-color: #0eb9df;
  color: white;
`;
export const Th = styled.th`
  width: calc(100% / 3);
  text-align: flex-start;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 15px;
  padding-left: 35px;
`;
export const TrMap = styled.tr`
  &:nth-child(2n) {
    background-color:#d2cccc;
  }
`;
export const Td = styled.td`
  width: calc(100% / 3);
  padding: 15px;
   text-align: flex-start;
  color: #aa8ea7;
  border: 1px solid #45ebeb;
   padding-left: 35px;
`;
