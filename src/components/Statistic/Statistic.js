import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistic(props) {
  const { label, percentage } = props;
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}> {percentage} %</span>
    </>
  );
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
