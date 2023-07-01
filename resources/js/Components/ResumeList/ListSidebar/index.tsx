import React from 'react'
import ListSidebarWidget from './ListSidebarWidget'

const ListSidebar = () => {
    return (
        <div className="job-sidebar">
            <ListSidebarWidget />
            <ListSidebarWidget />
            <ListSidebarWidget />
            <ListSidebarWidget />
            <ListSidebarWidget />
            <div className="job-widget-btn">
                <a className="primry-btn-2 lg-btn text-center" href="">Go to Job Alert</a>
            </div>
        </div>
    )
}

export default ListSidebar
