import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="">
            <Helmet>
                <title>Page Not Found - Mart Academy</title>
                <meta name="description" content="The page you are looking for doesn't exist. Explore Mart Academy's Computer Basics, Graphics, Web, and ICT courses." />
            </Helmet>

            <div className="min-h-screen flex flex-col items-center justify-center bg-black-50 px-4">
                <h1 className="text-9xl font-extrabold text-teal-200">404</h1>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-teal-300">
                    Oops! Page not found
                </h2>
                <p className="mt-2 text-gray-300 text-center max-w-md animate-pulse">
                    The page you are looking for doesn't exist or has been moved.
                    Let’s get you back to learning digital skills.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-teal-300 text-black text-lg font-medium rounded-lg shadow hover:bg-teal-500 transition"
                >
                    Go Back Home
                </Link>

                <img
                    src="https://i.ibb.co.com/CK4MGtGx/contest.gif"
                    alt="404 Illustration"
                    className="mt-10 max-w-xs rounded"
                />
            </div>
        </div>
    );
};

export default ErrorPage;