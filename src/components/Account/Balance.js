import React from 'react';

const Balance = () => {
  return (
    <div>
      <div className='container mx-auto p-4'>
        <h1 className="text-3xl font-bold text-center">My Account</h1>
        <div className="bg-white w-1/4 flex items-center justify-center">
          <div className="p-4">
            <h3>Mark</h3>
            <h4>Naira 246</h4>
          </div>
        </div>

        <div className="mt-4">
          <h3>Payments Detils</h3>
          <div>
            <form action="">
              <div className="p-1">
                <label htmlFor="cardname">Name<br />
                  <input 
                    type="text" 
                    placeholder="Card Name"
                    className="w-2/6"
                  />
                </label>
              </div>
              <div className="p-1">
                <label htmlFor="cardno">Number<br />
                  <input 
                    type="text" 
                    placeholder=""
                    className="w-2/6"
                  />
                </label>
              </div>
              <div className="flex flex-wrap">
                <div className="p-1">
                  <label htmlFor="cardname">Date <br />
                    <input 
                      type="text" 
                    />
                  </label>
                </div>
                <div className="p-1">
                  <label htmlFor="cardname">Cvv<br />
                    <input 
                      type="text" 
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
