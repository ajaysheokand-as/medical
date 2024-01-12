import React from 'react';
import '../index.css';
import { Repdata } from '../data/Reportdata';

const Report = () => {

   return (
      <>
         <div className='container'>
            <div className='report mt-2'>
               <div className='font-bold text-xl text-center border-t-2 py-1'>
                  <h2>Complete Blood Count (CBC)</h2>
               </div>
               <table className='table-fixed py-1'>
                  <hr className='line w-full' />
                  <tr className='font-bold'>
                     <td className='pr-40'>Investigation</td>
                     <td className='pr-20'>Result</td>
                     <td className='pr-24'>Value</td>
                     <td>Unit</td>
                  </tr>
                  <hr className='line w-full' />
               </table>
               <table className='table-fixed first-page'>
               {Repdata.slice(0, 15).map((item, index) => (
                     <tr key={index} className=''>
                        <td className='pr-5'>{item.investigation}
                           <span className='block text-xs'>{item.measure}</span></td>
                        <td className='pr-20'>{item.result}</td>
                        <td className='pr-9'>{item.value}</td>
                        <td>{item.unit}</td>
                     </tr>
                  ))}
               </table>
               <div className='instruments pt-4'>
                  <p>
                     <span className='font-semibold'>Instruments:</span> Fully automated cell counter-Mindray300
                  </p>
                  <p>
                     <span className='font-semibold'>Interpretation:</span> Further confirm for Anemia
                  </p>
               </div>
               <hr className='mt-2' />

               <div className='Foott flex justify-between pt-2'>
                  <div className='col-sm-5 text-lg flex'>
                     <div className='text-center'>
                        <p>Thanks for Reference</p>
                     </div>
                  </div>
                  <div className='col-sm-7'>
                     <p> ****End of Report****</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Report;
