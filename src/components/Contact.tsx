import { useRef } from "react";
import axios, { AxiosResponse } from "axios";

const Contact = () => {
  const contactErrorRef = useRef<HTMLParagraphElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);
  const contactSuccessRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    axios.post(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
      "form-name": "contact",
      ...data
    })
    .then((res: AxiosResponse) => {
      if (res.status === 200) {
        if (contactFormRef.current) {
          contactSuccessRef.current!.classList.remove("hide");
          contactFormRef.current.classList.add("fade-out");
          // Reset error state in case error was previously triggered
          contactErrorRef.current!.classList.add("hide");
    
          setTimeout(() => {
            contactFormRef.current!.classList.add("hide");
          }, 500);
        }
      } else {
        throw Error(`Error submitting form, status ${res.status}`);
      }
    })
    .catch((err: unknown) => {
      if (contactErrorRef.current) {
        contactErrorRef.current.classList.remove("hide");
      }
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    });
  }

  return (
    <section className="contact-section" id="contact">
      <h1 className="section-title">Get in touch</h1>
        <div className="contact-subtitle">
          <a 
            href="https://www.linkedin.com/in/amymaule/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me on LinkedIn
          </a>, or fill out the form below!
        </div>
        <form  className="contact-form" name="contact" onSubmit={handleSubmit} ref={contactFormRef}>
          <div className="contact-inputs-container">
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <textarea
            className="contact-input contact-textarea"
            name="message"
            placeholder="Your message"
            required
          />
          <button className="btn-contact-submit project-btn">Submit</button>
        </form>
          <div className="contact-success-container hide" ref={contactSuccessRef}>
            <p className="contact-success">
              Thank you for your message!{"\n"}I'll get back to you shortly.
            </p>
          </div>
          <p className="contact-error hide" ref={contactErrorRef}>
            Oops! Something went wrong. Please try again soon.
          </p>
    </section>
  )
}

export default Contact;
