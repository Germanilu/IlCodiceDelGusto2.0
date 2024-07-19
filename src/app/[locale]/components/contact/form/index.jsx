'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import './index.scss';

const ContactForm = () => {

  const formRef = useRef();
  const textAreaRef = useRef(null);
  const t = useTranslations("Contact-us-component");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [enabled, setEnabled] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  //Functions
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
   * @method handleInput
   * Allow to resize height input when writing
   * @param {event} e 
   */
  const handleInput = (e) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    emailjs
      .send(
        "service_n5i7lyk",
        "template_ou5goui",
        {
          from_name: form.name,
          to_name: "Luciano",
          from_email: form.email,
          to_email: "ilcodicedelgusto@gmail.com",
          message: form.message,
        },
        "5lzcGIcsd0YFFFG2J"
      )
      .then(
        () => {
          setMessageSent(true)
          alert(t('success-alert'));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert(t('unsuccess-alert'));
        }
      );
  };

  useEffect(() => {
    const allValuesHaveLength = Object.values(form).every(value => value.length > 0);
    setEnabled(allValuesHaveLength)
    if (messageSent) {
      setEnabled(true)
    }
  }, [form])
  return (
    <div className="contact-form">
      <h3 className='subtitle'>{t('subtitle')}</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='form'
      >
        <label className='form-label'>
          <span className='name'>{t('name-tag')}</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder={t('name-placeholder')}
            className='input'
          />
        </label>
        <label className='form-label'>
          <span className='email'>{t('email-tag')}</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder={t('email-placeholder')}
            className='input'
          />
        </label>
        <label className='form-label last'>
          <span className='message'>{t('message-tag')}</span>
          <textarea
            rows={0}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder={t('message-placeholder')}
            className='input textarea'
            onInput={handleInput}
            ref={textAreaRef}
          />
        </label>

        <button
          type='submit'
          className={`form-button ${enabled ? 'enabled' : ""} ${messageSent ? 'confirmation-sent' : ""}`}
        >
          {messageSent ? t('message-confirmation') : t('send')}
        </button>
      </form>
    </div>
  )
}

export default ContactForm;