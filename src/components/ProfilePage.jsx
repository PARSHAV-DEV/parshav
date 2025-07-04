import React, { useState } from 'react';
import emailjs from 'emailjs-com'

// Dummy data for certificates; replace URLs as needed
const certificates = [
    {
        name: "Introduction to R Programming for Data Science",
        provider: "Coursera",
        link: "https://drive.google.com/file/d/1yCo7DeBLMqLlGSXBRNsCeQ15XRd--5DV/view?usp=sharing",
    },
    {
        name: "Hands-on Introduction to Linux Commands and Shell Scripting",
        provider: "Coursera",
        link: "https://drive.google.com/file/d/1rBUBIc1FZ3ilC0J58GiNHHcNje8yBPdT/view?usp=sharing",
    },
    {
        name: "Introduction to Software Engineering",
        provider: "Coursera",
        link: "https://drive.google.com/file/d/1OpeFaQiLfJlueHXOBDtLTUcO-eomgveZ/view?usp=sharing",
    },
    {
        name: "The Bits and Bytes of Computer Networking",
        provider: "Coursera",
        link: "https://drive.google.com/file/d/1BzLWFfqW-ZUcu8gHCY0wSF0W35Lv4MyZ/view?usp=sharing",
    },
    {
        name: "Introduction to Software Testing",
        provider: "Coursera",
        link: "https://drive.google.com/file/d/1Gji8nIKOMuAPcC_aGCm16jGmpCC9ul-0/view?usp=sharing",
    },
];

const ProfilePage = () => {
    const [fbForm, setFbForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [fbSuccess, setFbSuccess] = useState(false);
    const [fbError, setFbError] = useState('');

    const handleFbChange = (e) => {
        setFbForm({ ...fbForm, [e.target.name]: e.target.value });
        setFbError('');
        setFbSuccess(false);
    };

    const handleFbSubmit = async (e) => {
        e.preventDefault();
        setFbForm({ ...fbForm, [e.target.name]: e.target.value });
         await emailjs.send(
            "service_276y58n",
            "template_fn5tkxr",
            fbForm,
            "0WYy0lKbcw3mmQ_7R"
        );
        setFbSuccess(true);
        setFbForm({
            name: '',
            email: '',
            message: '',
        })
        setTimeout(() => setFbSuccess(false), 3000)
        setFbError('');

    };

    return (
        <>
            {/* Replace with your Header component if any */}
            {/* <Header /> */}

            <section id="about" className="fadeup">
                <h2>About Me</h2>
                <p>
                    Hi, I'm Parshav Gundigara, currently pursuing my Master of Computer Applications (MCA) in Computer Science from LJ University, Ahmedabad. I hold a Bachelor's degree in Computer Applications (BCA) from Maharaja Krishnakumarsinhji Bhavnagar University.
                    <br /><br />
                    During my academic journey, I've developed a strong foundation in web development, problem-solving, and software design. My technical skills include PHP, HTML, CSS, JavaScript, and other modern web technologies.
                    <br /><br />
                    I've completed projects like <strong>Car2Go</strong> – a car rental and resale platform, and <strong>FitLife Gym Management System</strong> – a complete gym and fitness management solution, demonstrating my ability to build full-stack web apps from scratch.
                </p>
            </section>

            <section id="projects" className="fadeup">
                <h2>Projects</h2>
                <div className="project-list">
                    <div className="project-card">
                        <div className="project-icon" role="img" aria-label="car">🚘</div>
                        <div>
                            <h3>Car2Go – Car Rental & Resale Platform</h3>
                            <p>
                                A web platform for renting or buying used cars with a user-friendly interface for bookings and purchases.
                            </p>
                            <ul>
                                <li>Booking system with time/location filters</li>
                                <li>Car listings with specs and pricing</li>
                                <li>Admin panel, secure login, payment simulation</li>
                            </ul>
                            <p><strong>Tech:</strong> HTML, CSS, JS, PHP, MySQL</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-icon" role="img" aria-label="muscle">💪</div>
                        <div>
                            <h3>FitLife – Gym Management System</h3>
                            <p>
                                All-in-one gym platform for managing memberships, attendance, and product sales.
                            </p>
                            <ul>
                                <li>Member registration & subscription</li>
                                <li>Attendance & activity logs</li>
                                <li>Purchase module, admin dashboard</li>
                            </ul>
                            <p><strong>Tech:</strong> HTML, CSS, JS, PHP, MySQL</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-icon" role="img" aria-label="laptop">💻</div>
                        <div>
                            <h3>Personal Portfolio Website</h3>
                            <p>
                                Modern, responsive portfolio to showcase my skills, projects, and experience.
                            </p>
                            <ul>
                                <li>Interactive project gallery</li>
                                <li>Sections for education, certificates, experience</li>
                                <li>Contact form, SEO optimized</li>
                            </ul>
                            <p><strong>Tech:</strong> HTML, CSS, JS, PHP</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" className="fadeup">
                <h2>Education</h2>
                <div className="edu-block">
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <p>Maharaja Krishnakumarsinhji Bhavnagar University (2021–2024)</p>
                    <ul>
                        <li><strong>Technologies:</strong> PHP, C, C++, Java, PL/SQL, MySQL, VB.NET, ASP.NET</li>
                        <li><strong>Skills:</strong> App development, DB management, OOP, web frameworks</li>
                        <li>Academic projects: library management system, online quiz portal (PHP)</li>
                    </ul>
                </div>
                <div className="edu-block">
                    <h3>Online Courses</h3>
                    <p>Coursera</p>
                    <ul>
                        <li>Industry certificates in web dev and programming foundations</li>
                        <li>Practical skills in backend, web design, data handling</li>
                    </ul>
                </div>
                <div className="edu-block">
                    <h3>Master’s Studies (Pursuing)</h3>
                    <p>LJ University, Ahmedabad | Specialization: Advanced Computing</p>
                    <ul>
                        <li><strong>Core:</strong> Java, Python, C, Data Structures, PHP, RDBMS</li>
                        <li>
                            <strong>Highlights:</strong>
                            <ul>
                                <li>Advanced programming in Java/Python</li>
                                <li>Algorithm and data structure analysis</li>
                                <li>Development with PHP, MySQL, Oracle</li>
                            </ul>
                        </li>
                        <li>Ongoing research in AI and cloud computing</li>
                    </ul>
                </div>
            </section>

            <section id="certificates" className="fadeup">
                <h2>Certificates</h2>
                <ul className="cert-list">
                    {certificates.map((cert, i) => (
                        <li key={i}>
                            <strong>{cert.name}</strong> – {cert.provider} <br />
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Experience section is commented out in original; add here if needed */}

            <section id="contact" className="fadeup">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:parshavgundigara0123@gmail.com">parshavgundigara0123@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/parshav" target="_blank" rel="noopener noreferrer">linkedin.com/in/parshav</a></p>
                <p>GitHub: <a href="https://github.com/PARSHAV-DEV" target="_blank" rel="noopener noreferrer">github.com/PARSHAV-DEV</a></p>
            </section>

            <section id="feedback" className="glass-card fadeup" style={{ marginBottom: 36 }}>
                <h2>Feedback & Inquiry</h2>
                <form id="feedbackForm" autoComplete="off" onSubmit={handleFbSubmit}>
                    <div>
                        <label htmlFor="fb-name">Your Name</label>
                        <input
                            id="fb-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={fbForm.name}
                            onChange={handleFbChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="fb-email">Your Email</label>
                        <input
                            id="fb-email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={fbForm.email}
                            onChange={handleFbChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="fb-message">Message / Inquiry</label>
                        <textarea
                            id="fb-message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Type your feedback or inquiry here..."
                            value={fbForm.message}
                            onChange={handleFbChange}
                        />
                    </div>
                    <button type="submit">Send Feedback</button>
                    {fbSuccess && (
                        <div style={{ color: "#27ae60", fontWeight: 500, marginTop: 10 }}>
                            Thank you for your feedback!
                        </div>
                    )}
                    {fbError && (
                        <div style={{ color: "#e74c3c", fontWeight: 500, marginTop: 10 }}>
                            {fbError}
                        </div>
                    )}
                </form>
            </section>

            {/* Replace with your Footer component if any */}
            {/* <Footer /> */}
        </>
    );
};

export default ProfilePage;