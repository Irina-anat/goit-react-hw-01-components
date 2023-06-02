import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import TransactionItems from 'components/TransactionItems/TransactionItems';
import getRandomHexColor from 'utils/getRandomHexColor';


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
            {items.map(item => (
                   <TransactionItems key={item.id} {...item} />
                )
            )}
        </tbody>
    </table>
};



TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,    
}

export default TransactionHistory;