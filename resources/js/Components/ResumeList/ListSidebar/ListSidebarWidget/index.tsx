import React from 'react'
interface CheckboxItem {
    field: string;
    amount: number;
  }
const ListSidebarWidget = ({checkboxItems}: {checkboxItems: Array<CheckboxItem>}) => {
    return (
        <div className="job-widget style-1 mb-20">
            <div className="check-box-item">
                <h5 className="job-widget-title">Job Category</h5>
                <div className="checkbox-container">
                    <ul>
                        {checkboxItems.map((item, index) => {
                            const { field, amount } = item;
                            return (
                                <li key={index}>
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