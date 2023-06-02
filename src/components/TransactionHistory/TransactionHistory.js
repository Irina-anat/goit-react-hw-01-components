import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const TransactionHistory = ({ items }) => {
    return <table className={css.transaction__history}>
        <thead>
            <tr style={{ backgroundColor: getRandomHexColor() }}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,    
}

export default TransactionHistory