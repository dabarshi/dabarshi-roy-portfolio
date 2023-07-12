import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: ''
    });


    // const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oey8pjo', 'template_tv2nt8e', e.target, 'jBc2caI-q-sPbDep4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormData({
            to_name: '',
            from_name: '',
            message: ''
        });
    };

    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:h-screen'>
            <div className='mt-12 md:mt-0'>
                <h1 className='md:border-r-2 md:pr-4 text-lg'>Text me...</h1>
            </div>
            <form onSubmit={sendEmail}>
                <div className='space-y-4 pb-6'>
                    <div className='grid gap-2'>
                        <label className='font-semibold text-white'>Name</label>
                        <input className='bg-transparent border-2 border-white rounded text-white' type="text" name="to_name" value={formData.to_name} onChange={handleChange} />
                    </div>
                    <div className='grid gap-2'>
                        <label className='font-semibold text-white'>Email</label>
                        <input className='bg-transparent border-2 border-white rounded text-white' type="email" name="from_name" value={formData.from_name} onChange={handleChange} />
                    </div>
                    <div className='grid gap-2'>
                        <label className='font-semibold text-white'>Message</label>
                        <textarea className='bg-transparent border-2 border-white rounded text-white' name="message" value={formData.message} onChange={handleChange} />
                    </div>
                    <div className='bg-gray-900 px-3 py-1 rounded inline-block hover:border-2'>
                        <input className='text-white' type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;