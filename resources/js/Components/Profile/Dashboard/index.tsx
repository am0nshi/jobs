import CounterArea from "./CounterArea"
import TableArea from "./TableArea"
import {usePage} from "@inertiajs/react";
import {AuthedPageProps, PageProps} from "@/types";

const Dashboard = () => {
  const user = usePage<AuthedPageProps>().props.auth.user || {};

  return (
    <div className="dashboard-inner">
      <div className="author-area">
        <div className="author-img">
          <img src="assets/images/bg/author1.png" alt="" />
        </div>
        <div className="author-content">
          <span>Hello, I’m</span>
          <h4>{ user.first_name.toUpperCase() } { user.last_name }</h4>
        </div>
      </div>
      <CounterArea />
      <TableArea />
    </div>
  )
}

export default Dashboard