import React from "react";
import FaqColumn from "./Faq/FaqColumn";

const header1 = "General Questions";
const data1 = [
    {
        question: "What services do job agencies offer?",
        answer: "A job agency, also known as an employment agency or staffing agency, is a company that helps match job seekers with the employers job agencies specialize.",
    },
    {
        question: "How do job agencies match job seekers with employers?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Are job agencies regulated by any government agency?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "What are some of the best job agencies?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Can I find permanent job by using a job agency?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Do job agencies only provide jobs for short-term?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
];
const header2 = "Payment Question";
const data2 = [
    {
        question: "Do easy to use Interface for job seekers and employers?",
        answer: "A job agency, also known as an employment agency or staffing agency, is a company that helps match job seekers with the employers job agencies specialize.",
    },
    {
        question: "Do multiple payment options?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Does Report and Analytic for financial monitoring?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Automated payment reminders and follow-ups?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Can I find permanent job by using a job agency?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
    {
        question: "Do job agencies only provide jobs for short-term?",
        answer: "Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal\nmolestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna.\nVivamus blandit,",
    },
];

function Faq() {
    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content text-center">
                                <h1>FAQ’s</h1>
                                <span></span>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            FAQ
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-page pt-120 mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <FaqColumn header={header1} data={data1} />
                        <FaqColumn header={header2} data={data2} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
