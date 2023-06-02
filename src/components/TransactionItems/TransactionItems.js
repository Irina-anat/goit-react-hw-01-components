import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/getRandomHexColor';


const TransactionItems = ({ id, type, amount, currency }) => {
    return <tr key={id} style={{ backgroundColor: getRandomHexColor() }}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
};

TransactionItems.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionItems;