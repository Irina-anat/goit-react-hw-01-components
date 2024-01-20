import PropTypes from 'prop-types'; 
import { StatisticsCard, StatTitle, StatList, StatsCard } from './Statistics.styled';
import getRandomHexColor from 'utils/getRandomHexColor';


const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatTitle>{title}</StatTitle>}
            
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsCard
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatsCard>
          );
        })}
      </StatList>
    </StatisticsCard>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;