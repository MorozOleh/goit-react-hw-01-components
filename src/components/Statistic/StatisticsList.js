import PropTypes from 'prop-types';
import Statistic from './Statistic';
import Container from '../Container/Container';
import s from './StatisticsList.module.css';

export default function StatisticsList({ items, title }) {
  return (
    <Container>
      <section className={s.statistic}>
        {title && <h2 className={s.title}>Upload stats</h2>}
        <ul className={s.stats}>
          {items.map(item => (
            <li className={s.item} key={item.id}>
              <Statistic label={item.label} percentage={item.percentage} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

StatisticsList.protTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
