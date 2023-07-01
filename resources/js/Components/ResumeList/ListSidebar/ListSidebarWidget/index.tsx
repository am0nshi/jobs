import React from 'react'
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
const ListSidebarWidget = () => {
    return (
        <div className="job-widget style-1 mb-20">
            <div className="check-box-item">
                <h5 className="job-widget-title">Job Category</h5>
                <div className="checkbox-container">
                    <ul>
                        {checkboxItems.map((item, index) => {
                            const { field, amount } = item;
                            return (
                                <li>
                                    <label className="containerss">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        <span className="text">{field}</span>
                                        <span className="qty">({amount})</span>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ListSidebarWidget