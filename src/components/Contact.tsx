import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject:string;
  message:string;
};

type Props = {};
 
function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jcarrera994@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. My email is ${formData.email}`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-left md:text-center max-w-7xl px-8 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-28 md:top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="space-y-5 pt-40 md:pt-5 text-center ">
        <h4 className=" text-sm md:text-4xl font-semibold  md:py-5 decoration-[#F7AB0A]/50 underline">
          Lets Connect
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 md:space-x-5  justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl">{+123456789}</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a className="text-sm md:text-2xl" href={`mailto:${"email"}`}>
              {"email"}
            </a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl">{"123 Developer Lane"}</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-2"
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Name"
                className="contactInput"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
                className="contactInput"
              />
            </div>

            <div className="col-span-full">
              <input
                {...register("subject")}
                id="subject"
                type="text"
                placeholder="Subject"
                className="contactInput"
              />
            </div>

            <div className="col-span-full">
              <textarea
                {...register("message")}
                id="message"
                placeholder="Message"
                className="contactInput"
              ></textarea>
            </div>

            <button
              type="submit"
              className="col-span-full bg-[#F7AB0A] text-black font-bold py-5 text-lg rounded-md"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </motion.div>
  );
}

export default Contact;
