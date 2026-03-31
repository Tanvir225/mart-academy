import { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_KEY,
            import.meta.env.VITE_TEMPLATE_KEY,
            form.current,
            {
                publicKey: import.meta.env.VITE_EMAIL_PUBLICKEY,
            }
        )

            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current.reset();
                    toast.success("Message sent successfully");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error("Message not sent, try again later");
                }
            );
    };

    return (
        <div className="bg-gradient-to-br from-base-200 to-base-100 min-h-screen py-16 px-4 my-5 rounded-xl">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Info Section */}
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-teal-200 mb-6">Let’s Connect</h1>
                    <p className="text-base mb-4 font-light">
                        Have a question about our computer courses or want to enroll in a
                        batch? We’re happy to help you.
                    </p>
                    <ul className="space-y-3 font-thin text-sm">
                        <li>
                            <strong>📧 Email:</strong> martacad200@gmail.com
                        </li>
                        <li>
                            <strong>📞 Phone:</strong> +880 1812-122545
                        </li>
                        <li>
                            <strong>🌐 Facebook:</strong>{" "}
                            <Link
                                to="https://facebook.com/martAcadmy"
                                className="text-teal-200 underline font-thinner"
                            >
                                Mart Academy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Form Card */}
                <div className="bg-base-100 p-5 md:p-8 rounded-2xl shadow-2xl border border-base-300">
                    <h2 className="text-xl font-semibold text-center mb-6">
                        Send Us a Message
                    </h2>
                    <form className="space-y-5" ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Enter your name"
                                className="input input-bordered focus:outline-none w-full focus:scale-[1.02] transition"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full focus:outline-none focus:scale-[1.02] transition"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                name="message"
                                className="textarea w-full textarea-bordered focus:outline-none h-28 focus:scale-[1.02] transition"
                                placeholder="Type your message..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn bg-teal-200 text-black font-light w-full hover:scale-[1.02] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
