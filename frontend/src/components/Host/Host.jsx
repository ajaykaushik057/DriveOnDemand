import React from 'react';

const Host = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587132137056-95d4c8f8d1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <div className="form-container bg-white rounded-lg p-4 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg mb-4">Fill out the form below to get in touch with us.</p>
          <form>
            <div className="form-group mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 pl-10 text-lg rounded-lg" />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 pl-10 text-lg rounded-lg" />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 pl-10 text-lg rounded-lg" rows="5"></textarea>
            </div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Host;