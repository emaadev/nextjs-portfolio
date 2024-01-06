"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

import toast from "react-hot-toast";

import { FaPaperPlane } from "react-icons/fa";
import useActiveInView from "@/hooks/useActiveInView";
import sendEmail from "@/server/sendEmail";

const Contact = () => {
  const { ref } = useActiveInView("Contact");
  const { pending } = useFormStatus();

  const limitMessage = 2000;
  const [onWritingMessage, setOnWritingMessage] = useState(0);

  const onWriting = (e: any) => {
    setOnWritingMessage(e.target.value.length);

    if (onWritingMessage === limitMessage) return;
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] px-4 text-center"
    >
      <h2 className="mb-2">Contact Me</h2>

      <p className="-mb-4 text-gray-700 dark:text-gray-400">
        Please contact me directly at{" "}
        <a
          href="mailto:emanuel.nu02@gmail.com"
          className="underline font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-400"
        >
          emanuel.nu02@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
          } else {
            toast.success("Email sent successfully.");
          }
        }}
        className="relative mt-10 flex flex-col"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          maxLength={100}
          required
          className="h-10 p-4 rounded-lg border border-black/10 bg-white dark:bg-white/30"
        />

        <label
          htmlFor="message"
          className={`absolute text-gray-400 right-2 bottom-16 ${
            onWritingMessage === limitMessage && "text-red-600"
          }`}
        >
          {onWritingMessage} / {limitMessage}
        </label>
        <textarea
          name="message"
          placeholder="Type something here..."
          maxLength={limitMessage}
          required
          onChange={(e) => onWriting(e)}
          className="h-52 my-3 rounded-lg border !border-black/10 bg-white p-4 dark:bg-white/30"
        />

        <button
          type="submit"
          disabled={onWritingMessage === 0 || pending === true ? true : false}
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white text-opacity-70 rounded-full outline-none transition-all hover:text-opacity-100 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:bg-gray-500 dark:bg-gray-600 dark:disabled:bg-white/10 dark:hover:bg-gray-700"
        >
          {pending ? (
            <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white" />
          ) : (
            <>
              Send{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 disabled:bg-gray-400" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
