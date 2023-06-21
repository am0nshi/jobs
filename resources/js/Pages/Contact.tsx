import { useForm } from "@inertiajs/react";

function Contact() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        company_name: "",
        message: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        //// logic
        //////////
        console.log(data);
        //////////
    };

    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content text-center">
                                <h1>Contact</h1>
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
                                            Contact
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-support-area mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-6">
                            <div className="contect-content">
                                <h4>Need Any Help? Contact Us</h4>
                                <p>
                                    Alternatively you can also check for the
                                    Company email, phone number and address in
                                    the official website.
                                </p>
                                <div className="support">
                                    <div className="icon">
                                        <img
                                            src="assets/images/icon/footer-support-icon.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h5>Support Line:</h5>
                                        <a href="tel:+099-03573983465">
                                            +099-035 7398 3465
                                        </a>
                                    </div>
                                </div>
                                <div className="service-available">
                                    <span>N:B</span>
                                    <p>
                                        Our Customer Service Available from 9 am
                                        to 6 pm (Saturday to Thursday){" "}
                                    </p>
                                </div>
                            </div>
                            <div className="office-location-area pt-20 mb-20">
                                <div className="container p-0">
                                    <div className="row mb-20">
                                        <div className="col-lg-12">
                                            <div className="office-location">
                                                <div className="row g-lg-4 gy-5">
                                                    <div className="col-lg-12">
                                                        <div className=" border-4 border-gray-400 border-radius-15 single-location p-1 ">
                                                            <h5>
                                                                Dhaka,
                                                                Bangladesh
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <img
                                                                            src="assets/images/icon/phone-5.svg"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <a href="tel:+8801873468987">
                                                                        +880-187
                                                                        346 8987
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <img
                                                                            src="assets/images/icon/location.svg"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <a>
                                                                        Mirpur
                                                                        DOSH,
                                                                        Avenue-01,
                                                                        Road-02,
                                                                        House-147/148
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="office-location-map">
                                                {/* FIXME need to add Google Maps. Need API key */}
                                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1675482960370!5m2!1sen!2sbd"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form form-wrapper">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-inner mb-25">
                                                <label htmlFor="name">
                                                    Your Name*
                                                </label>
                                                <div className="input-area">
                                                    <img
                                                        src="assets/images/icon/user-2.svg"
                                                        alt=""
                                                    />
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Mr. Jackson Mile"
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner mb-25">
                                                <label htmlFor="email">
                                                    Email*
                                                </label>
                                                <div className="input-area">
                                                    <img
                                                        src="assets/images/icon/email-2.svg"
                                                        alt=""
                                                    />
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="info@example.com"
                                                        value={data.email}
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner mb-25">
                                                <label htmlFor="phonenumber">
                                                    Phone*
                                                </label>
                                                <div className="input-area">
                                                    <img
                                                        src="assets/images/icon/phone-2.svg"
                                                        alt=""
                                                    />
                                                    <input
                                                        type="text"
                                                        id="phonenumber"
                                                        name="phonenumber"
                                                        placeholder="+880-17 *** *** **"
                                                        value={data.phone}
                                                        onChange={(e) =>
                                                            setData(
                                                                "phone",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner mb-25">
                                                <label htmlFor="jobplace">
                                                    Company Name (Optional)
                                                </label>
                                                <div className="input-area">
                                                    <img
                                                        src="assets/images/icon/company-2.svg"
                                                        alt=""
                                                    />
                                                    <input
                                                        type="text"
                                                        id="jobplace"
                                                        name="jobplace"
                                                        placeholder="Company Name"
                                                        value={
                                                            data.company_name
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "company_name",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner mb-40">
                                                <label htmlFor="description">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    placeholder="Message..."
                                                    value={data.message}
                                                    onChange={(e) =>
                                                        setData(
                                                            "message",
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <button
                                                    className="primry-btn-2 lg-btn w-unset"
                                                    type="submit"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
