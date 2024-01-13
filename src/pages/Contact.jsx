import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox  from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const emailjsPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;


  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation , setCurrentAnimation] = useState('idle');

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Koushik",
          from_email: form.email,
          to_email: "koushiknalam19@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({show: true, text: 'Message sent successfully!', type:'success'})
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle')
          setForm({ name: "", email: "", message: "" });
        }, [3000])
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        showAlert({show:true, text: 'Error Sending Message, Please Try Again', type:'danger'})
        console.log(error);
      });
  };

  return (
    <section className="relative h-screen flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500">
            Name
            <input
              type="text"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="name"
              className="input"
              placeholder="Enter Name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500">
            Email
            <input
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              className="input"
              placeholder="Enter Email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Your Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send A Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto m:h-[550px] h-[350px]">
        <Canvas camera={{position:[0,0,5], fov: 75 , near: 0.1, far: 1000}}>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.6,-0.6,0]} scale={[0.5, 0.5, 0.5]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
