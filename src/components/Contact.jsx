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
        <div className="flex flex-row lg:gap-2 justify-center mt-[-1rem]">
          <FaLocationDot className="my-4 mt-[1.1rem] text-xl" />
          <p className="my-4">Chinchwad</p>
        </div>
        <div className="flex flex-row lg:gap-2 justify-center mt-[-1rem]">
          <FcContacts className="my-4 mt-[1.1rem] text-xl" />
          <p className="my-4">8956175758</p>
        </div>
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
