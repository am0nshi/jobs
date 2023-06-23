import React, { useState } from 'react'
import CandidateResume from './CandidateResume';
import { motion, AnimatePresence } from 'framer-motion';
import ShortListIcon from "/public/assets/images/icon/shortlist-icon.svg"
/* import PDFIcon from "/public/assets/images/icon/pdf2.svg" */
import RejectIcon from "/public/assets/images/icon/rejected-icon.svg"
import EmployeeIcon from "/public/assets/images/bg/employee-img1.png"
import CompanyIcon from "/public/assets/images/icon/company-2.svg"
import Modal from '@/Components/Modal';

export interface CandidateCardProps {
  candidateName: string;
  position: string;
  salary: string;
  experience: string;
  companyName: string
  educationPlace: string;
  appliedOn: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  candidateName,
  position,
  salary,
  experience,
  companyName,
  appliedOn,
  educationPlace, }) => {

  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const toggleModal = () => {
    setIsOpenedModal(state => !state)
  }

  return (
    <tr>
      <td data-label="Candidate Name">
        <div className="employee-info">
          <div className="employee-img">
            <img src={EmployeeIcon} alt="" />
          </div>
          <div className="employee-content">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={toggleModal}
            >
              {candidateName}
            </button>
            {/* Modal */}
            <Modal
              maxWidth='6xl'
              show={isOpenedModal}
              onClose={toggleModal}>
              <div className="modal-content h-[95vh] w-full overflow-y-auto">
                <div className="modal-header">
                  <div className="button-groups">
                    <ul>
                      <li className='flex gap-2 flex-wrap'>
                        <button className="primary-bg"><img src="" alt="" /> Download PDF</button>
                        <button><img src={ShortListIcon} alt="" /> Shortlist</button>
                        <button className="red-bg"><img src={RejectIcon} alt="" /> reject</button>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setIsOpenedModal(false)}
                  ></button>
                </div>
                <CandidateResume />
              </div>

            </Modal>
            <span><img src={CompanyIcon} alt="" /> {educationPlace}</span>
            <p><span>Applied On:</span> {appliedOn}</p>
          </div>
        </div>
      </td>
      <td data-label="Carrer Summary">
        <div className="carrer-summary">
          <h6>{companyName} <span> {position}</span></h6>
          <ul>
            <li><span>Experience:</span>{experience}</li>
            <li><span>Salary:</span>  {salary}</li>
          </ul>
        </div>
      </td>
      <td data-label="Actions">
        <div className="action-btn-group">
          <ul>
            <li><button><img src={ShortListIcon} alt="" /> Shortlist</button></li>
            <li><button className="reject"><img src={RejectIcon} alt="" /> Rejected</button></li>
          </ul>
        </div>
      </td>
    </tr>
  )
}

export default CandidateCard