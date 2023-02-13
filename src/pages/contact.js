import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contact() {
  return (
    <main>
      <div>
        <Navbar />
        <div className="container mx-auto">
          <div className="page-header">
            <div className='section-header'><span><iconify-icon  icon="material-symbols:mail-outline"></iconify-icon></span><h1>Contact</h1></div>
             <span className="font-body text-xl font-light text-primary dark:text-white">Got a question or proposal, or just want to say hello? Go ahead. You know what to do.</span>
          </div>
          <form className="pt-4">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:mr-3 sm:w-1/2">
                <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="What should I call you?"
                  className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"
                />
              </div>
              <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Drop that email here…"
                  className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"
                />
              </div>
            </div>
            <div className="w-full pt-6 sm:pt-10">
              <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                Email Address
              </label>
              <textarea id="message" cols="30" rows="9" placeholder="Tell me all the things that you think I need to hear…" className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"></textarea>
            </div>
            <button className="mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Contact;
