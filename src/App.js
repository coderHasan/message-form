
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_teew0nj', 'template_9xi9q1a', form.current, 'tzP_c_FHLr-8erwih')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
};

  return (
    <>
    
      <div className='flex items-center justify-center flex-col w-[400px] p-10 mx-auto bg-gray-300 rounded-md'>

       <form ref={form} onSubmit={sendEmail} className='flex flex-col'>

          <input className='border border-black py-[5px] px-[10px] outline-none mb-3' type="text" name='name' placeholder='Enter your name' required/>

              <input className='border border-black py-[5px] px-[10px] outline-none mb-3' name='email' type="email" placeholder='Enter your email' required/>

              <textarea name='message' className='border outline-none border-black' cols="25" rows="5" required></textarea>

              <button className='border w-3/6 py-2 mt-3 bg-sky-500 items-center mx-auto text-white font-semibold text-xl rounded-md hover:bg-sky-600 hover:text-gray-200 duration-500'>Send</button>

       </form>

      </div>
      
    </>
  );
}

export default App;
