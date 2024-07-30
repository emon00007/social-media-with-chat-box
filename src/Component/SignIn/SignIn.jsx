import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SignIn = () => {
    const {signIn} =useContext(AuthContext)
    const handelLogin = e => {
        e.preventDefault()
        const from = e.target ;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password);
        signIn(email ,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
        })

      }
    return (
        <div>
              <Helmet><title>Login</title></Helmet>
      <div className=" min-h-screen bg-base-200">

        <div className="text-center md:p-3 lg:p-10 md:text-3xl lg:text-5xl md:font-semibold lg:font-extrabold"><p>Please LogIn</p></div>
        <div className="hero ">

          <div className="card shrink-0  lg:w-2/5 mx-auto  shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    className="input input-bordered w-full py-2 px-4"

                    placeholder="Enter Your Password"
                    name="password"
                    id=""
                    required
                  />

                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>

            </form>

            <div className="p-5 ">
              <button className="btn w-full  btn-ghost border border-black " ><FaGoogle className="text-2xl"></FaGoogle>LogIn with Google </button>
            </div>
            <div className="text-center py-5"><p>Do not Have an Account <Link className="text-blue-600" to="/register">Regester</Link></p></div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignIn;