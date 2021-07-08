import "./Progress.css";

function Progress({ value, max }: { value: number, max: number }) {
  const percentage = value / max * 100;
  const dots = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .map((dot) => percentage >= dot ? 1 : 0);
  
  return (
    <div className="progress">
      { dots.map((dot, index) => (
        <i key={ index } className={ `progress__dot ${dot ? 'progress__dotted' : ''}` }></i>
      )) }
    </div>
  );
}

export default Progress;
