import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div>
      <div className="w-full md:w-2/3 lg:w-1/3 mx-auto">
        <div className="py-24">
          <div className="flex-col">
            <div className="mb-10">
              <h1 className="text-5xl font-bold text-center text-white">
                Login now!
              </h1>
            </div>
            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl">
              <div className="card-body">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label flex flex-wrap gap-4">
                      <Link className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                      <span className="text-sm">Or</span>
                      <div>
                        <span className="label-text-alt link link-hover">
                          New to this site?
                        </span>
                        <button
                          type="button"
                          className="py-1.5 px-4 border ms-2 rounded-lg bg-gradient-to-r from-[#ff2259] to-[#ff6339] text-white"
                        >
                          <Link to="/register">Register</Link>
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="text-xl font-bold md:text-xl py-4 px-8 md:px-10 text-white bg-gradient-to-r from-[#ff6339] to-[#ff2259] rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* <ToastContainer autoClose={2000} position="top-center" /> */}
              </div>
            </div>
            <div
              // onClick={handleGoogleLoginClick}
              className="flex justify-center items-center gap-4 mt-6 w-full md:max-lg:w-1/2 mx-auto py-4 px-6 rounded-lg border-2 border-[#ff2259d7] cursor-pointer font-bold md:text-xl text-slate-800 hover:bg-gradient-to-r from-[#ff2259b0] to-[#ff6439b4] hover:border-transparent"
            >
              <FcGoogle className="text-2xl" />
              <button className="text-lg">Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
