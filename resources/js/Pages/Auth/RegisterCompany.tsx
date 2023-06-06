import React, {FormEventHandler, memo, useState} from 'react';
import {Head, Link, useForm} from '@inertiajs/react';
import RegisterHeader from "@/Components/Register/RegisterHeader";
import {RegistrationTypes} from "@/Enums/RegistrationTypeEnum";
import InputText from "@/Components/InputText";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";
import RegisterCompanyRequest = App.Http.Requests.Auth.RegisterCompanyRequest;

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import CategoryIcon from "/public/assets/images/icon/category-2.svg";
import InputSelect from "@/Components/InputSelect";

export default function RegisterCompany() {
  const options = ["Digital Agency", "Digital Marketing Agency", "Software Company"];

  const fields: RegisterCompanyRequest = {
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    company_name: "",
    company_type: options[0],
    agreement: false,
  }

  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset,
  } = useForm(fields)

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('register.company'));
  };

  return (
    <>
      <Head title="Register Company" />

      <div className="register-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Register Company</h3>
                  <span></span>
                </div>
                <div className="register-tab">
                  <RegisterHeader type={RegistrationTypes.Company} />
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active"
                         id="nav-profile"
                         role="tabpanel"
                         aria-labelledby="nav-profile-tab"
                    >
                      <form onSubmit={submit}>
                        <div className="row">
                          <InputText
                            onChange={e => setData('first_name', e.target.value)}
                            value={data.first_name}
                            className="col-md-6"
                            name="first_name"
                            title="First Name*"
                            srcIcon={UserIcon}
                            placeholder="Mr. Robert"
                            errors={errors}
                          />

                          <InputText
                            value={data.last_name}
                            onChange={e => setData('last_name', e.target.value)}
                            className="col-md-6"
                            name="last_name"
                            title="Last Name*"
                            srcIcon={UserIcon}
                            placeholder="Jonson"
                            errors={errors}
                          />

                          <InputText
                            value={data.user_name}
                            onChange={e => setData('user_name', e.target.value)}
                            className="col-md-6"
                            name="user_name"
                            title="User Name*"
                            srcIcon={UserIcon}
                            placeholder="Jonson"
                            errors={errors}
                          />

                          <InputText
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="col-md-6"
                            name="email"
                            title="Email*"
                            srcIcon={EmailIcon}
                            placeholder="info@example.com"
                            errors={errors}
                          />

                          <InputText
                            value={data.company_name || ""}
                            onChange={e => setData('company_name', e.target.value)}
                            className="col-md-6"
                            name="company_name"
                            autoComplete="company_name"
                            title="Company Name*" srcIcon={CompanyIcon}
                            placeholder="Mr. Robert"
                            errors={errors}
                          />

                          <InputSelect
                            value={data.company_type || ""}
                            onChange={e => setData('company_type', e.target.value)}
                            className="col-md-6"
                            name="company_type"
                            title="Company Type*"
                            srcIcon={CategoryIcon}
                            options={options}
                            errors={errors}
                          />

                          <InputPassword
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            className="col-md-6"
                            name="password"
                            title="Password*"
                            placeholder="Password"
                            errors={errors}
                          />

                          <InputPassword
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            className="col-md-6"
                            name="password_confirmation"
                            title="Confirm Password*"
                            placeholder="Confirm Password"
                            errors={errors}
                          />

                          <InputCheckBox
                            value={data.agreement || false}
                            onChange={e => setData('agreement', e.target.checked)}
                            className="col-md-12"
                            name="agreement"
                            text="Here, I will agree company terms & conditions."
                            errors={errors}
                          />

                          <div className="col-md-12">
                            <div className="form-inner">
                              <button
                                disabled={processing}
                                className="primry-btn-2"
                                type="submit"
                              >
                                Sign Up
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
          </div>
        </div>
      </div>
    </>
  );
}
