import { CompanySidebarTypes } from "@/Enums/CompanySidebarTypeEnum"
import CompanySidebar from '@/Components/CompanyProfile/CompanySidebar'
import CompanyDashboard from '@/Components/CompanyProfile/CompanyDashboard'
const CompanyProfile = () => {
  return (
    <div className="dashboard-area company-dashboard pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4">
          <div className="col-lg-12 mb-20">
            <CompanySidebar
              activeSide={CompanySidebarTypes.Dashboard}
            />
          </div>
          <div className="col-lg-12">
            <CompanyDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile