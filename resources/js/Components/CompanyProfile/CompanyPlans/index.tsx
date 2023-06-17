import CompanyPlansCard from '@/Components/CompanyProfile/CompanyPlans/CompanyPlansCard';
import { CompanyPlansStatusTypes } from "@/Enums/CompanyPlansStatusEnum";
import CompanyPlansPagination from '@/Components/CompanyProfile/CompanyPlans/CompanyPlansPagination';
const CompanyPlans = () => {
  return (
    <div className="table-wrapper2">
      <div className="title-and-btn">
        <div className="title">
          <h4>Plan & Invoice List:</h4>
        </div>
        <div className="job-post-btn">
          <a className="primry-btn-2" href="job-post.html">Upgrade Plan</a>
        </div>
      </div>
      <table className="eg-table table plan-invoice-table mb-0">
        <thead>
          <tr>
            <th>(#) Number</th>
            <th>Date</th>
            <th>Package</th>
            <th>Amount</th>
            <th>Payment Through</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.Pending}
          />
          <CompanyPlansCard
            id='#837bg73j833k3'
            date='07/01/2023'
            amount='$1000'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.Unpaid}
          />
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.PaidFee}
          />
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.PaidFee}
          />
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.Pending}
          />
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.Pending}
          />
          <CompanyPlansCard
            id='#83c8h9s88ee4'
            date='03/01/2023'
            amount='$720'
            paymentThrought='Online Method '
            status={CompanyPlansStatusTypes.Pending}
          />
        </tbody>
      </table>
      <CompanyPlansPagination />
    </div>
  )
}

export default CompanyPlans