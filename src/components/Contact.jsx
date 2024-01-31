import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "react-dotenv";
import ReCAPTCHA from "react-google-recaptcha";
import recaptcha from "react-google-recaptcha/lib/recaptcha";

export function Contact() {
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [warning, setWarning] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reCaptcha: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    setWarning({
      ...warning,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaVal = await recaptchaRef.current.getValue();
    // console.log(recaptchaRef);
    recaptchaRef.current.reset();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
          "g-recaptcha-response": recaptchaVal,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setWarning({ ...warning, general: `Error: ${error.text}` });
          console.log(error);
        }
      );
  };

  return (
    <footer>
      <div id="contact" className=" p-5 bg-neutral-700 bg-opacity-20 mt-20  ">
        <div className="flex flex-row justify-center flex-wrap gap-8 text-white ">
          <div>
            <div className=" text-2xl md:text-3xl xl:text-5xl font-bold">
              Contact
            </div>
            <div className="text-lg py-8 max-w-3xl">
              I'm enthusiastic about discussing potential projects, both
              Front-end and Back-end, exploring innovative solutions, or even
              just having a casual conversation about the world of technology.
              Your inquiries are always welcome, and I look forward to the
              opportunity to connect with fellow enthusiasts and industry
              professionals alike. Let's start a conversation and bring your
              ideas to life!
            </div>
            <div className=" max-w-16 flex flex-row justify-start gap-3">
              <div>
                <a
                  href="https://www.linkedin.com/in/steven-seo/"
                  target="_blank"
                >
                  <img
                    className="max-w-8"
                    src="assets/LinkedIn_icon_circle.svg.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div className="rounded-full ">
                <a href="https://github.com/holyseo" target="_blank">
                  <img
                    className="max-w-8 rounded-full"
                    src="assets/github-mark-white.png"
                    alt="GitHub"
                  />
                </a>
              </div>
              <div className="rounded-full ">
                <a href="mailto:stevenbseo@icloud.com">
                  <img
                    className="max-w-8 rounded-full"
                    src="assets/Mail_(iOS).svg.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" px-3 py-5 w-full md:w-4/5 lg:w-3/4 xl:w-1/3 bg-gray-400 rounded-sm ">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className=" flex flex-row justify-between gap-3">
                <span className="w-1/2">
                  <input
                    className="w-full shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 "
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  {warning.name && (
                    <div className="text-red-700 self-end ">{warning.name}</div>
                  )}
                </span>
                <span className="w-1/2">
                  <input
                    className="w-full shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 "
                    placeholder="Email address"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {warning.email && (
                    <div className="text-red-700 self-end">{warning.email}</div>
                  )}
                </span>
              </div>
              <div className="flex flex-col mt-5">
                <input
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 
                  "
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                {warning.subject && (
                  <div className="text-red-700">{warning.subject}</div>
                )}
              </div>
              <div className="flex flex-col mt-5">
                <textarea
                  rows={5}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 
                  "
                  placeholder="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                {warning.message && (
                  <div className="text-red-700">{warning.message}</div>
                )}
              </div>
              <div className="flex flex-row flex-wrap justify-between">
                <div>
                  <button
                    type="submit"
                    className=" bg-blue-600 px-3 py-1 border-2 border-gray-600 rounded-md mt-5 hover:bg-blue-800"
                    onClick={() =>
                      warning.reCaptcha === ""
                        ? (warning.reCaptcha = "Please complete the reCAPTCHA.")
                        : null
                    }
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                  {warning.reCaptcha !== null ? (
                    <div className="text-red-700 mt-2 font-semibold">
                      {warning.reCaptcha}
                    </div>
                  ) : null}
                  {success !== "" ? (
                    <div className="text-blue-700 font-semibold">{success}</div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_API_KEY}
                    ref={recaptchaRef}
                    onChange={(prev) =>
                      setWarning({ ...prev, recaptcha: null })
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
