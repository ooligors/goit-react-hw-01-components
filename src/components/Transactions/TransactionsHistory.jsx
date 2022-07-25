import React from 'react';
import { PropTypes } from 'prop-types';
import { Table, THead , Th, TrMap, Td, } from './TransactionsHistory.styled';


export const TransactionsHistory = ({ items }) => {
  console.log(items);
  return (
    <Table className="transaction-history">
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>
      <tbody>
        {items.map(item => {
          return (
            <TrMap key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </TrMap>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
