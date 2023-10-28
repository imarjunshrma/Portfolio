import { User, MapPin, Mail } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {

    return (
        <div className="contactSection" id="contact_section">
            <div className="section">
                <div className="title">
                    <h3 className='font-bold text-5xl text-black  after-line'>Contact me</h3>
                    <span className='font-medium'>get in touch</span>
                </div>
                <div className="md:grid grid-cols-[2fr,3fr] gap-10">
                    <div className='lhs flex gap-[10px] flex-col'>
                        <h6 className='text-[20px] font-medium'>Get in Touch</h6>
                        <p className='text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?
                        </p>
                        <div className='my-4 flex flex-col gap-4'>
                            <div className="flex gap-3 items-center">
                                <User color='#8490FF' size={30} fill='#8490FF' />
                                <div>
                                    <p className='text-xl font-medium'>Name</p>
                                    <span className='text-sm font-regular'>Arjun Sharma </span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <MapPin color='#8490FF' size={30} />
                                <div>
                                    <p className='text-xl font-medium'>Name</p>
                                    <span className='text-sm font-regular'>Arjun Sharma </span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail color='#8490FF' size={30} />
                                <div>
                                    <p className='text-xl font-medium'>Name</p>
                                    <span className='text-sm font-regular'>Arjun Sharma </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rhs flex gap-[20px] flex-col">
                        <h6 className='text-[20px] font-medium'>Message me</h6>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
