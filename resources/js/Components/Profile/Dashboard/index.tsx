import CounterArea from "./CounterArea"
import TableArea from "./TableArea"

const Dashboard = () => {
  return (
    <div className="dashboard-inner">
      <div className="author-area">
        <div className="author-img">
          <img src="assets/images/bg/author1.png" alt="" />
        </div>
        <div className="author-content">
          <span>Hello, I’m</span>
          <h4>JACOLINE  Frankly</h4>
        </div>
      </div>
      <CounterArea />
      <TableArea />

    </div>
  )
}

export default Dashboard