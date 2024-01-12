import React from 'react';

function Hero() {
   return (
      <>
         <div className='container'>

            <header className='h-32'>

            </header>

            <div className='row hero_section flex justify-around'>
               <div className='col-sm-3 text-base'>

                  <div className='ab'>
                     <h1 className='font-bold text-xl'>Yash M. Patel</h1>
                     <p>Age : 21 Years</p>
                     <p>Sex : Male</p>
                     <p>PID : 555</p>
                  </div>
               </div>

               <div className='col-sm-4 border-r-2 border-l-2'>
                  <p className='font-bold text-lg'>Sample Collected At :</p>
                  <p>125, Shivam, Bungalow, S G Road,<span>Mumbai</span></p>
                  <h2 className='text-lg pt-1'>Ref. By: <span className='font-bold'> Dr. Hiren Shah</span></h2>
               </div>

               <div className='col-sm-5'>

                  <div className=''>
                     <div className='text-sm'>
                        <p><span className='font-bold'>Registered on:</span> 02:31 PM 02 Dec, 22</p>
                        <p><span className='font-bold'>Collected on:</span> 03:11 PM 02 Dec, 22</p>
                        <p><span className='font-bold'>Reported on:</span> 04:35 PM 02 Dec, 22</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}

export default Hero;
