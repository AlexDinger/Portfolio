import React, { useState, useReducer } from "react";
import Page from "../components/Page";
import axios from "axios";
import { red } from "chalk";

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
      url: "/send",
      data: formData,
    }).then((res) => {
      res.data.status === "success" ? alert("sent") : alert("failed");
    });
  };

  return (
    <Page>
      <h2 className="text-white md:text-3xl text-3xl font-bold">Contact Me</h2>
      <form className="space-y-5 text-gray-300 text-xl" onSubmit={handleSubmit}>
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
          <label className="block mb-2 font-bold" htmlFor="organization">
            Organization
            <span className="italic text-gray-500 text-sm"> - Optional</span>
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
    </Page>
  );
};

export default Contact;
