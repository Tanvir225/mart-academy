
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import usePublicAxios from "../../Hook/usePublicAxios";
import toast from "react-hot-toast";

const Login = () => {

    //useContext
    const { loginUser, googleLogin } = useAuth();

    //axios hook
    const axios = usePublicAxios();

    //navigation
    const navigate = useNavigate();

    //location
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    //login handler
    const handleLogin = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("logging in ....");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //login function 
        loginUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                form.reset();
                toast.success("Login successful", { id: toastId });

                //send last logged time into database
                //send to database user information
                // const dataUser = {
                //   logged: user?.metadata?.lastSignInTime,
                // };

                // //api call
                // axios.patch(`/users/${user?.email}`, dataUser).then((result) => {
                //   console.log(result.data);
                // });

                //redirect to the previous page
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message.slice(10, error.message.length), {
                    id: toastId,
                });
            });

    };

    //sign in with google
    const handleMedia = (media) => {
        const toastId = toast.loading("sign in ...");
 
        media()
            .then((result) => {
                console.log(media);
                const user = result.user;
                console.log(user);
                toast.success("signed in", { id: toastId });
                navigate("/");

                // //send to database user information
                // const dataUser = {
                //     name: user?.displayName,
                //     email: user?.email,
                //     photo: user?.photoURL,
                //     logged: user?.metadata?.lastSignInTime,
                // };

                // //api call
                // axios.post("/users", dataUser).then((result) => {
                //     console.log(result.data);

                //     toast.success("signed in", { id: toastId });
                //     navigate("/");
                // });

                // //api fro update call
                // axios.patch(`/users/${user?.email}`, dataUser).then((result) => {
                //     console.log(result.data);
                // });
            }).catch((error) => {
                toast.error(error.message.slice(10, error.message.length), {
                    id: toastId,
                });
            });
    };

    return (
        <section className="my-10">

            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md max-w-5xl mx-auto">
                {/* design side  */}
                <div className="relative hidden items-center justify-center bg-teal-300 md:flex md:w-[50%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16  rounded-full bg-gradient-to-br from-white via-teal-300 to-blue-400"></div>
                    <div className="absolute animate-pulse bottom-[18%] left-[20%]  h-20 w-20 rounded-full bg-gradient-to-br from-white via-blue-300 to-teal-400"></div>
                    <div className="absolute  -right-7 top-[50%] h-14  w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-teal-300 to-blue-400 transition-all"></div>
                    <div className="absolute left-[50%] top-[22%]  h-24 w-24 -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-white via-teal-200 to-blue-400"></div>
                    <div className="z-10 space-y-2 text-center mt-10">
                        <h2 className="text-3xl text-white font-mono leading-tight font-bold">MART ACADEMY</h2>
                        <p className="animate-bounce font-extralight text-sm text-gray-800">Ready to get started!</p>
                        <Link to={"/"} className="btn">Back</Link >
                    </div>
                </div>
                {/* form side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                    <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight">Sign In</h2>
                    <form onSubmit={handleLogin} className="flex w-full flex-col items-center justify-center gap-4">
                        <input
                            className="w-[80%] rounded-lg border border-teal-200 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <input
                            className="w-[80%] rounded-lg border border-teal-200 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                            type="password"
                            placeholder="Password"
                            required
                            name="password"
                        />
                        <p className="text-[14px] ">
                            Do not have an account ?{' '}
                            <Link to={'/sign-up'} className="text-teal-200">
                                Create one
                            </Link>
                        </p>
                        <button className="w-[80%] rounded-lg bg-teal-400 px-6 py-2 font-medium uppercase text-white outline-none hover:bg-teal-600 md:w-[60%]" type="submit">
                            Login
                        </button>
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1 border-teal-200" />
                        <div className="mx-4 text-teal-200">OR</div>
                        <hr className="flex-1 border-teal-200" />
                    </div>
                    {/* sign with google */}
                    <button onClick={() => handleMedia(googleLogin)} className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-teal-400">
                        <div className="relative z-20 flex h-full items-center bg-teal-400 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-teal-400">Signin with</div>
                        <span className="flex h-full items-center px-4 text-xl font-bold text-teal-200 duration-300 group-hover:bg-teal-400 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;