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
        {items.map(({id,type,amount,currency}) => {
          return (
            <TrMap key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </TrMap>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })
    ).isRequired,
};
