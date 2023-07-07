import React from 'react'
import ListSidebarWidget from './ListSidebarWidget'
const checkboxItems = [
    { field: "Health Care", amount: 80 },
    { field: "Account & Finance", amount: 80 },
    { field: "Transportation", amount: 80 },
    { field: "Medical & Finance", amount: 80 },
    { field: "Development", amount: 999 },
    { field: "Engineering", amount: 80 },
    { field: "Health Care", amount: 125 },
    { field: "Health Care", amount: 125 },
    { field: "Health Care", amount: 125 },
    { field: "Health Care", amount: 125 },
    { field: "Health Care", amount: 125 },
]
const ListSidebar = () => {
    return (
        <div className="job-sidebar">
            <ListSidebarWidget checkboxItems={checkboxItems}/>
            <ListSidebarWidget checkboxItems={checkboxItems}/>
            <ListSidebarWidget checkboxItems={checkboxItems}/>
            <ListSidebarWidget checkboxItems={checkboxItems}/>
            <ListSidebarWidget checkboxItems={checkboxItems}/>
            <div className="job-widget-btn">
                <a className="primry-btn-2 lg-btn text-center" href="">Go to Job Alert</a>
            </div>
        </div>
    )
}

export default ListSidebar
