import React from 'react'
import './login.css'
import bgImage from '../../assets/images/login.png'
const Login = () => {
    return (
        <section class="vh-100 m-4">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 text-black">

                        {/* <div class="px-5 ms-xl-4">
                            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={color:"#709085"}></i>
                            <span class="h1 fw-bold mb-0">Logo</span>
                        </div> */}

                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form>

                                <h3 class="fw-normal mb-3 pb-3 cm-color fw-bold">Log in</h3>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" />
                                    <label class="form-label" for="form2Example18">Email address</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                    <label class="form-label" for="form2Example28">Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn button bg-primary px-4 btn-block" type="button">Login</button>
                                </div>

                                <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                                <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

                            </form>

                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src={bgImage} alt="Login" class="w-100 img-fluid vh-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login