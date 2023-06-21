"use client";
import React from "react";
import { FormEvent, useState } from "react";
import { WEBSITE_URL } from "config";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          secondName,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.error("Err", err);
    }
  };

  return (
    <div className="formContainer">
      <form className="formMain" onSubmit={onSubmit}>
        <div className="formHeaderContainer">
          <h2>Get In Touch</h2>
        </div>
        <div className="formInputs">
          <div className="emailBlock block">
            <label htmlFor="frmEmail">Email</label>
            <input
              className="formControl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="frmEmail"
              type="email"
              name="email"
              autoComplete="email"
              required
            ></input>
          </div>
          <div className="block nameContainer">
            <div className="nameBlock">
              <label htmlFor="frmFirst">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="formControl"
                id="frmFirst"
                type="text"
                name="first"
                autoComplete="given-name"
                required
              ></input>
            </div>
            <div className="nameBlock">
              <label htmlFor="frmSecond">Second Name</label>
              <input
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                className="formControl"
                id="frmSecond"
                type="text"
                name="second"
                autoComplete="family-name"
                required
              ></input>
            </div>
          </div>
          <div className="messageBlock block">
            <label htmlFor="frmMessage">Message</label>
            <textarea
              className="formControl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="frmMessage"
              name="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="buttonBlock block">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
