define(['react'], (React) => function ({color, fontSize}) {
  return (
    <div>
      <span className="icon">
        <span style={{color, fontSize:"35px", fontWeight:"bold"}}>C</span>a
        <i className="fas fa-dollar-sign" style={{color}}></i>h
        <span style={{color, fontSize:"35px", fontWeight:"bold"}}>F</span>low
      </span>
    </div>
  )
})