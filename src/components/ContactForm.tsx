"use client"
import React, { useState } from "react";
import { ArrowRight } from 'lucide-react'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicKey, serviceId, templateId } from "@/bin/variables";
const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [subject, setSubject] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send(serviceId, templateId, { name, email, msg, subject }, publicKey).then((res) => {
            toast("Message Send Successfully");
            setName("");
            setEmail("");
            setMsg("");
            setSubject("");
        }).catch(err => {
            toast.error("Message not send");
        })
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-3">
                    {/* <input type="text" className='p-2 outline-none border border-solid border-gray-300 hover:border-gray-500 placeholder:text-gray-200' placeholder='First Name' /> */}
                    {/* <input type="text" className='p-2 outline-none border border-solid border-gray-300 hover:border-gray-500' placeholder='Email' /> */}
                    <Input type="text" placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="inputs my-4">
                    {/* <input type="text" className='p-2 outline-none border border-solid border-gray-300 hover:border-gray-500' placeholder='Subject' /> */}
                    <Input type='text' placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div className="inputs my-4">
                    {/* <textarea cols={30} rows={10} className='p-2 outline-none border border-solid border-gray-300 hover:border-gray-500' placeholder='Message'></textarea> */}
                    <Textarea placeholder="Message" value={msg} onChange={e => setMsg(e.target.value)} required />
                </div>
                <Button className='bg-primaryColor'>
                    {/* <Mail className="mr-2 h-4 w-4" /> Login with Email */}
                    Send Message<ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </>
    )
};

export default ContactForm;
