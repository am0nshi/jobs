import React, { useEffect, useState } from 'react';
import { CompanyPlansStatusTypes } from "@/Enums/CompanyPlansStatusEnum";
export interface CompanyPlansCardProps {
  id: string;
  date: string;
  amount: string;
  paymentThrought: string;
  status: string;
}
const CompanyPlansCard: React.FC<CompanyPlansCardProps> = ({
  id,
  date,
  amount,
  paymentThrought,
  status
}) => {
  const [statusStyle, setStatusStyle] = useState("");

  useEffect(() => {
    switch (status) {
      case CompanyPlansStatusTypes.Pending:
        setStatusStyle("yellow-color");
        break;
      case CompanyPlansStatusTypes.Unpaid:
        setStatusStyle("red-color");
        break;
      case CompanyPlansStatusTypes.PaidFee:
        setStatusStyle("green-color");
        break;
      default:
        break;
    }
  }, [])
  return (
    <tr className="style-2">
      <td data-label="(#) Number">{id}</td>
      <td data-label="Date">{date}</td>
      <td data-label="Package"><button className="eg-btn light-sky-btn">Default</button></td>
      <td data-label="Amount">{amount}</td>
      <td data-label="Payment Through">{paymentThrought}</td>
      <td data-label="Payment Status"><button className={`status ${statusStyle}`}>{status} <i className="bi bi-download"></i></button></td>
    </tr>
  )
}

export default CompanyPlansCard