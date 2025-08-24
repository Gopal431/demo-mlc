"use client"

import React, { useState } from "react";
import { Modal } from "antd";
import ContactForm from "./ContactForm";

const ContactModal = ({ openModal, setOpenModal }) => {
    const[formResetTrigger, setFormResetTrigger] = useState(false);

    return (
        <Modal
            title={
                <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[36px] leading-[21px] md:leading-[46px] text-left w-full bg-gradient-to-r from-[#3b566e] to-[#00ACCE] bg-clip-text text-transparent">
                    Send A Message
                </h2>
            }
            open={openModal}
            afterClose={() => setFormResetTrigger(prev => !prev)}
            onCancel={() => setOpenModal(false)}
            footer={null}
            centered
            className="custom-modal"
        >
            <ContactForm formResetTrigger={formResetTrigger} />
        </Modal>
    );
};

export default ContactModal;