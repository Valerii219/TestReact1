export function  Statistics ({title, stats}){
    return (
        <section class="statistics">
  {title && <h2>{title}</h2>}
  <ul className="stat-list">
    {stats.map(stat=>(
      <li key={stat.id} class="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{Number(stat.percentage)}</span>
    </li>
    ))}
    
  </ul>
</section>
    )}