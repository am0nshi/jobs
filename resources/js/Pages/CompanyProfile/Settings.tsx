import { CompanySidebarTypes } from "@/Enums/CompanySidebarTypeEnum"
import CompanySidebar from '@/Components/CompanyProfile/CompanySidebar'
import CompanySettings from "@/Components/CompanyProfile/CompanySettings"
const CompanyProfile = () => {
  return (
    <div className="dashboard-area company-dashboard pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4">
          <div className="col-lg-12 mb-20">
            <CompanySidebar
              activeSide={CompanySidebarTypes.Settings}
            />
          </div>
          <div className="col-lg-12">
            <CompanySettings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile