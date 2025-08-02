import React from 'react';

const About = () => {
    return (
        <div className="bg-base-100 text-base-content px-4 py-10 md:px-16 rounded-xl my-5">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-teal-200">About Mart – Academy</h1>

                <p className="mb-6 text-lg">
                    Welcome to <strong className='text-teal-200'>Mart - Academy</strong>, your trusted destination for mastering computer skills online.
                    From the basics to advanced tools, we’re here to help you learn and grow confidently.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Mission Section */}
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-teal-200 mb-2">Our Mission</h2>
                        <p>
                            To provide affordable, practical, and high-quality computer education to everyone—
                            from students to professionals—anywhere, anytime.
                        </p>
                    </div>

                    {/* What We Offer */}
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-teal-200 mb-2">What We Offer</h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Beginner to Advanced Computer Basic Courses</li>
                            <li>Graphics & Web Development</li>
                            <li>Live and Recorded Classes</li>
                            <li>Certificates Upon Completion</li>
                            <li>Hands-On Project Experience</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-teal-200 mb-2">Why Choose Us</h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Expert Instructors with Industry Experience</li>
                            <li>Practical Learning, Not Just Theory</li>
                            <li>Flexible and Self-Paced Classes</li>
                            <li>Dedicated Student Support</li>
                        </ul>
                    </div>

                    {/* Our Journey */}
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-teal-200 mb-2">Our Journey</h2>
                        <p>
                            Mart – Academy began with a simple idea: make digital skills accessible to everyone.
                            Today, we serve learners across Bangladesh and beyond.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <p className="text-lg mb-2">📌 Ready to begin your journey?</p>
                    <a href="/courses" className="btn btn-outline font-light bg-teal-200 text-black">Explore Our Courses</a>
                </div>
            </div>
        </div>
    );
};

export default About;