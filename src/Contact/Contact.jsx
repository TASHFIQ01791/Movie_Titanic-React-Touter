import { Form } from "react-router-dom";
import "../Contact/Contact.css";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      {/* changes are here  */}
      <Form method="POST" action="/contact" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Type your message..."
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </Form>
    </div>
  );
};
