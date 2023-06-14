import React, {FormEventHandler, memo, useState} from 'react';
import {Head, Link, useForm} from '@inertiajs/react';
import RegisterHeader from "@/Components/Register/RegisterHeader";
import {RegistrationTypes} from "@/Enums/RegistrationTypeEnum";
import RegisterUserRequest = App.Http.Requests.Auth.RegisterUserRequest;
import InputText from "@/Components/InputText";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";

export default function RegisterUser() {
  const fields: RegisterUserRequest = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
    post(route('register'));
  };

  return (
    <>
      <Head title="Register"  />

      <div className="register-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Register Account</h3>
                  <span></span>
                </div>
                <div className="register-tab">
                  <RegisterHeader type={RegistrationTypes.Person} />
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
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="col-md-12"
                            name="email"
                            title="Email*"
                            srcIcon={EmailIcon}
                            placeholder="info@example.com"
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
