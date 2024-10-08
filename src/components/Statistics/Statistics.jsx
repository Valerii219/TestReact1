import css from './Statistics.module.css'
export function  Statistics ({title, stats}){
    return (
        <section className={css.static}>
  {title && <h2>{title}</h2>}
  <ul className={css.statList}>
    {stats.map(stat=>(
      <li key={stat.id} className={`${css.item} ${stat.percentage >=10 && stat.percentage <=20 ? css.grey : (stat.percentage <= 10 ? '' : css.yellow)}`}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{Number(stat.percentage)}</span>
    </li>
    ))}
    
  </ul>
</section>
    )}