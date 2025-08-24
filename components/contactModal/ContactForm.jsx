"use client"

import React, { useRef, useState, useEffect } from 'react'
// import emailjs from '@emailjs/browser';
// import ButtonReuse from './ButtonReuse';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import toast from 'react-hot-toast';

const ContactForm = ({
    formResetTrigger,
    lineWidth,
    lineColor,
    dotColor
}) => {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    useEffect(() => {
        if (formResetTrigger) {
            form.current?.reset();
        }
    }, [formResetTrigger]);

    const handleSubmit = async (e) => {
        console.log("handleSubmit Called");
        return;
    }

    // const handleSubmit = async (e) => {
    //     setLoading(true);
    //     try {
    //         e.preventDefault();
    //         const resp = await emailjs.sendForm('service_3whqxas', 'template_lkpj0bk', form.current, {
    //             publicKey: 'F8x91dCE0cy34QMg2',
    //         })
    //         if (resp.status === 200) {
    //             toast.success('Thank you for your message!, We will get back to you shortly.');
    //             console.log('SUCCESS!');
    //         } else {
    //             toast.error('Something went wrong!, Please try again.');
    //             console.log('ERROR');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    function LoadingOverlay() {
        return (
            <div className="loading-overlay">
                <div className="spinner" />
            </div>
        );
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <form onSubmit={handleSubmit} className="glass-form p-5" ref={form}>
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            name="from_name"
                            required
                            placeholder="Full Name"
                            className="glass-input w-full mb-4"
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="email"
                            name="from_email"
                            required
                            placeholder="Your Email"
                            className="glass-input w-full mb-4"
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            name="from_phone"
                            maxLength={10}
                            minLength={10}
                            required
                            placeholder="Your Mobile Number"
                            className="glass-input w-full mb-4"
                        />
                    </div>
                    <div className="col-12">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="glass-input w-full mb-4"
                        />
                    </div>
                    <div className="col-12">
                        {/* <ButtonReuse
                            title="Send Message"
                            type="submit"
                            className="w-[200px]"
                            disabled={loading}
                        /> */}
                        <button href="https://www.school.myleadingcampus.com/?view=signup"
                            className="px-6 py-2 bg-gradient-to-r from-[#622BFF] to-[#16B2D0] text-white font-semibold text-sm rounded-full shadow-sm hover:opacity-90 transition"
                            title="Send Message"
                            type="submit"
                            disabled={loading}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
            <style jsx>{`
          .secbanner h2 {
            position: relative;
          }
          .secbanner h2::before {
            position: absolute;
            content: '';
            top: 60px;
            left: 0;
            right: inherit !important;
            margin: auto;
            width: ${lineWidth || '160px'};
            height: 6px;
            background-color: ${lineColor || '#d8f2f7'};
            border-radius: 8px;
          }
          .secbanner h2::after {
            position: absolute;
            content: '';
            top: 57px;
            left: 0;
            right: inherit !important;
            margin: auto;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${dotColor || 'linear-gradient(to right, #16B2D0, #542DFF, #FF335E)'};
            animation: animate2 8s linear infinite;
          }
          @keyframes animate2 {
            0% {
              left: 0;
            }
            100% {
              left: ${lineWidth ? `calc(${lineWidth} - 10px)` : '26%'};
            }
          }

          .glass-form {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .glass-input {
            background: rgba(255, 255, 255, 0.2);
            border:none;
            border-bottom: 1px solid #0000ff38;
            backdrop-filter: blur(10px);
            padding: 10px;
            border-radius: 0;
            color: #333;
          }

          .glass-input:focus {
            outline: none;
            border-color: rgba(99, 62, 255, 0.5);
            box-shadow: 0 0 8px rgba(99, 62, 255, 0.3);
          }


          @media (max-width: 991px) {
            .secbanner h2::before {
              top: 42px;
            }
            .secbanner h2::after {
              top: 40px;
            }
          }
        `}</style>
        </>
    )
}

export default ContactForm