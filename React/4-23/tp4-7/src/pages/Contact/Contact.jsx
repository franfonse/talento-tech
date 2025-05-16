import './Contact.css';

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    return (
        <section className="contact-us">
            <h2 className="contact-title">Contact us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Email"
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Write your message..."
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;
