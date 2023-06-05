import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputText from "@/Components/InputText";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset
    } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
      <>
          <Head title="Log in" />
          <div className="login-area pt-120 mb-120">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="form-wrapper">
                              <div className="form-title">
                                  <h3>Log In Here!</h3>
                                  <span></span>
                              </div>
                              {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                              <form onSubmit={submit}>
                                  <div className="row">
                                      <InputText
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="col-lg-12"
                                        name="email"
                                        title="Email*"
                                        srcIcon={EmailIcon}
                                        isFocused={true}
                                        errors={errors}
                                        placeholder="Jonson" />

                                      <InputPassword
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        className="col-lg-12"
                                        name="password"
                                        title="Password*"
                                        errors={errors}
                                        placeholder="Password"
                                      />

                                      <InputCheckBox
                                        onChange={e => setData('remember', e.target.checked)}
                                        value={data.remember}
                                        className="col-lg-12"
                                        name="remeber"
                                        text="Remember Me"
                                      >
                                          <a href="#" className="forgot-pass">Forget Password?</a>
                                      </InputCheckBox>

                                      <div className="col-lg-12">
                                          <div className="form-inner">
                                              <button
                                                disabled={processing}
                                                className="primry-btn-2" type="submit">LogIn</button>
                                          </div>
                                      </div>
                                      <h6>
                                          Don’t have an account?&nbsp;
                                          <Link
                                            href={route('register')}
                                          >
                                              Sign Up
                                          </Link>
                                      </h6>
                                  </div>
                              </form >
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}
