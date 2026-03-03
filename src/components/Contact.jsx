import { IoIosMail } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b5cd76e5-254e-4d4e-941d-69ed4a04f8c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .then(() => {
        alert("Message Sent");
      });

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        {/* Google Maps embed */}
        <div className="flex justify-center mb-4">
          <div className="relative rounded-xl overflow-hidden border border-neutral-700 shadow-lg" style={{ width: '100%', maxWidth: '520px' }}>
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-30 blur-md -z-10" />
            <iframe
              title="Chinchwad, Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30258.38512576872!2d73.7917!3d18.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e4a2e6b4e7%3A0x4f8b5c9f2b3a4c5d!2sChinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="220"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.google.com/?q=Chinchwad,Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 bg-neutral-800 text-xs text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <FaLocationDot className="text-pink-500" />
              Chinchwad, Pune, Maharashtra — Open in Maps ↗
            </a>
          </div>
        </div>
        {/* <div className="flex flex-row lg:gap-2 justify-center mt-[-1rem]">
          <FcContacts className="my-4 mt-[1.1rem] text-xl" />
          <p className="my-4">8956175758</p>
        </div> */}
        <div className="flex flex-row lg:gap-2 justify-center mt-[-1rem]">
          <IoIosMail className="my-4 mt-[1rem] text-2xl" />
          <a href="#" className="my-4 border-b">
            omkarmadchetti@gmail.com
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <form
            onSubmit={onSubmit}
            className="flex flex-col lg:w-1/3 w-full gap-4 p-4 text-black"
          >
            {/* <FaUser /> */}
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 rounded-sm placeholder:text-neutral-500"
              required
            />
            {/* <MdAttachEmail /> */}
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-2 rounded-sm placeholder:text-neutral-500"
              required
            />
            {/* <MdMessage /> */}
            <textarea
              name="message"
              placeholder="Drop a Message"
              className="p-2 rounded-sm placeholder:text-neutral-500"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded bg-slate-700 py-2 text-sm font-semibold text-purple-400 w-1/3 hover:text-slate-900 hover:bg-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
