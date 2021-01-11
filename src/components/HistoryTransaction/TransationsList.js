import PropTypes from 'prop-types';
import Transaction from './Transaction';
import Container from '../Container/Container';

export default function TransactionsList({ items }) {
  return (
    <Container>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

TransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
