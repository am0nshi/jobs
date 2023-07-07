import React, { PropsWithChildren, ReactNode } from "react"
import Vacancie from "../Profile/Vacansie";
export interface TableAreaProps {
  tableHeaders: Array<string>;
  children: ReactNode
}
const TableArea: React.FC<TableAreaProps> = ({
  tableHeaders,
  children
}) => {
  return (
    <div className="table-wrapper">
      <h5 className="title">Current Applied Jobs:</h5>
      <div className="scroll-table">
        <table className="eg-table table category-table mb-0">
          <thead>
            <tr>
              {tableHeaders.map((item, index) => (<th className=" text-center" key={index}>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default TableArea