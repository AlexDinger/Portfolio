import React, { useState, useReducer } from "react";
import Page from "../components/Page";
import axios from "axios";
import { SwitchTransition, Transition } from "react-transition-group";

const formReducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.payload,
  };
};

const Contact = () => {
  const [formData, setFormData] = useReducer(formReducer, {
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData({
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://formsubmit.co/5484e77d2a8717419ee3de5480a74bf1",
      data: formData,
    })
      .then((res) => {
        setSubmit(true);
      })
      .catch((err) => alert("fail"));
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Page>
      <h2 className="text-white md:text-3xl text-3xl font-bold">Contact Me</h2>
      {/* <Transition in={isSubmit} timeout={duration} unmountOnExit>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="flex flex-col justify-center items-center"
          >
            <h3 className="text-2xl">Success</h3>
            <p className="text-lg">I will get back to you within 24 hours</p>
          </div>
        )}
      </Transition> */}

      <SwitchTransition mode={"out-in"}>
        <Transition
          key={isSubmit}
          timeout={duration}
          unmountOnExit
          mountOnEnter
        >
          {(state) =>
            !isSubmit ? (
              <form
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                className="space-y-5 text-gray-300 text-xl"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label className="block mb-2 font-bold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-transparent bg-gray-700 py-2 px-3 transition duration-300 text-white rounded-sm outline-none focus-within:border-white"
                    name="name"
                    id="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="">
                  <label className="block mb-2 font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-transparent bg-gray-700 py-2 px-3 transition duration-300 text-white rounded-sm outline-none focus-within:border-white"
                    name="email"
                    id="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="">
                  <label
                    className="block mb-2 font-bold"
                    htmlFor="organization"
                  >
                    Organization
                    <span className="italic text-gray-500 text-sm">
                      {" "}
                      - Optional
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-transparent bg-gray-700 py-2 px-3 transition duration-300 text-white rounded-sm outline-none focus-within:border-white"
                    name="organization"
                    id="organization"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="">
                  <label className="block mb-2 font-bold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full border border-transparent bg-gray-700 py-2 px-3 transition duration-300 text-white rounded-sm outline-none focus-within:border-white"
                    name="message"
                    id="message"
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <button className="px-4 py-2 rounded-sm bg-transparent border-white border hover:text-gray-800 transition duration-300 text-lg hover:bg-white font-bold text-white float-right">
                  Send
                </button>
              </form>
            ) : (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                className="flex flex-col justify-center items-center space-y-5 pt-10"
              >
                <svg
                  class="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    class="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <h3 className="text-4xl">Message Sent</h3>
                <p className="text-2xl">I usually respond within 24 hours</p>
              </div>
            )
          }
        </Transition>
      </SwitchTransition>
    </Page>
  );
};

export default Contact;
