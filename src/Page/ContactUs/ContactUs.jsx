
import { Helmet } from 'react-helmet-async';
import Contact from '../../Component/Contact/Contact';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                {/* Basic SEO */}
                <title>
                    Get in Touch for Courses & Support
                </title>

                <meta
                    name="description"
                    content="Contact Mart Academy for course enrollment, training support, and career guidance. Reach out to our team for programming, IT, and digital skills courses. We’re here to help you start your learning journey."
                />

                <meta
                    name="keywords"
                    content="Contact Mart Academy, Mart Academy Support, Programming Course Inquiry, IT Training Contact, Online Course Help, Computer Training Bangladesh"
                />

                <meta name="author" content="Mart Academy" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph (Facebook) */}
                <meta
                    property="og:title"
                    content="Contact Mart Academy – We’re Here to Help You Learn"
                />

                <meta
                    property="og:description"
                    content="Have questions about our courses or enrollment? Contact Mart Academy for expert guidance, support, and training information."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://mart-academy.web.app/contact-us"
                />

                <meta
                    property="og:image"
                    content="https://i.ibb.co.com/CK4MGtGx/contest.gif"
                />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Contact Mart Academy"
                />

                <meta
                    name="twitter:description"
                    content="Reach out to Mart Academy for course details, enrollment help, and training support."
                />
            </Helmet>


            <Contact></Contact>
        </div>
    );
};

export default ContactUs;