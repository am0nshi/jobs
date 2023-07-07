import { useState } from "react";

function FaqColumn(props: any) {
    const { header, data } = props;

    const defaultState = {
        buttonClass: "accordion-button collapsed",
        ariaExpanded: "false",
        divClass: "accord-collapse",
    };

    const [drawerStates, setDrawerStates] = useState(
        Array(data.length).fill(defaultState)
    );

    console.log(drawerStates);

    // const [expanded, setExpanded] = useState(false);

    const onClick = (index: any) => {
        if (drawerStates[index].buttonClass === defaultState.buttonClass) {
            setDrawerStates((prevDrawerStates) => {
                const newDrawerStates = [...prevDrawerStates];
                newDrawerStates[index] = {
                    buttonClass: "accordion-button",
                    areaExpanded: "true",
                    divClass: "accord-collapse open",
                };
                return newDrawerStates;
            });
        } else {
            setDrawerStates((prevDrawerStates) => {
                const newDrawerStates = [...prevDrawerStates];
                newDrawerStates[index] = defaultState;
                return newDrawerStates;
            });
        }
    };

    return (
        <div className="col-lg-6">
            <div className="genarel-qustions-area">
                <h4>{header}</h4>
                <div className="accordion" id="accordionExample">
                    {data.map((item: any, index: any) => {
                        return (
                            <div className="accordion-item mb-20" key={index}>
                                <h2
                                    className="accordion-header"
                                    id="headingOne"
                                >
                                    <button
                                        onClick={() => {
                                            onClick(index);
                                        }}
                                        className={
                                            drawerStates[index].buttonClass
                                        }
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded={
                                            drawerStates[index].areaExpanded
                                        }
                                        aria-controls="collapseOne"
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className={drawerStates[index].divClass}
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FaqColumn;
