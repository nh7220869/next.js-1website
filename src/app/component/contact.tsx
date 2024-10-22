
"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function contact(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        setSubmitted(true); 
    };

    return (
        <>
        <div className="ml-28 mb-28 mt-28 mr-28 border-2 border-slate-900 p-4  hidden md:block ">
            <h2 className="text-2xl font-bold mb-4 text-center  ">Contact Us</h2>
          
           
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium text-xl ">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xl font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-xl font-medium">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-slate-400">Submit</button>
          
            </form>
            {submitted && (
                
                <p className="text-center mt-3 font-bold">Thank you for your message!</p>
            )}
        </div>


   {/* for mobile */}

        <div className="w-full max-w-md mx-auto mt-8 mb-12 p-6 border-2 border-slate-900 lg:hidden ">
  <h2 className="text-xl font-bold mb-6 text-center ">Contact Us</h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label htmlFor="name" className="block font-medium text-lg mb-1">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        required
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-lg font-medium mb-1">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 h-28 resize-none"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-500 transition-colors duration-200"
    >
      Submit
    </button>
  </form>

  {submitted && (
    <p className="text-center mt-4 font-semibold text-green-700">Thank you for your message!</p>
  )}
</div>








  
        </>
    );
};


