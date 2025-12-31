// import React from 'react';
import QRCode from 'react-qr-code';

const FlyerPage = () => {
  return (
    <div className="bg-sand-50 min-h-screen py-8 flex justify-center font-body text-sand-900">
      {/* 8.5 x 12 inches aspect ratio container (increased from 8.5/11 to avoid footer cutoff) */}
      <div className="w-full max-w-[850px] aspect-[8.5/12] bg-white shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Header Logo Area - Compact */}
        <div className="flex justify-center py-4 shrink-0">
          <div className="flex flex-row items-center">
              {/* Logo Image */}
              <img 
                src="/petLogo.svg" 
                alt="Bay Pet Ventures Logo" 
                className="w-12 h-12 object-contain mb-1"
              />
              <span className="text-forest-900 font-heading font-bold text-lg tracking-tight ml-2">Bay Pet Ventures</span>
          </div>
        </div>

        {/* Hero Image - Cropped & Adjusted */}
        <div className="w-full h-64 sm:h-72 shrink-0 overflow-hidden relative">
          <img 
            src="/Dogs.png" 
            alt="Two dogs running on the beach" 
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col">
          {/* Main Headline */}
          <div className="px-8 text-center mt-6 mb-4 shrink-0">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              The Ultimate 4-Hour<br />
              Beach Camp for Your Dog
            </h1>
            <p className="mt-3 text-sm font-medium text-sand-800 uppercase tracking-wide">
              Serving the South Bay Area Only <span className="mx-2">|</span> Adventures led by a CCPDT-Certified Trainer.
            </p>
          </div>

          {/* Safety Banner */}
          <div className="bg-forest-700 py-3 px-4 text-white shrink-0">
            <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-heading font-semibold text-base sm:text-lg text-center">
                  Guaranteed 1:1 individualized attention for maximum safety and focus.
                </span>
            </div>
          </div>

          {/* Three Columns Feature */}
          <div className="px-8 py-6 grid grid-cols-3 gap-4 text-center shrink-0">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
                <div className="mb-2 text-forest-800">
                   {/* Heart/Paw Icon */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-forest-900 mb-1 leading-tight">Structured<br/>Socialization:</h3>
                <p className="text-sand-700 text-xs sm:text-sm font-medium leading-snug">Play that builds<br/>confidence, not chaos.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
                <div className="mb-2 text-forest-800">
                   {/* House/Car Icon */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                   </svg>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-forest-900 mb-1 leading-tight">Ultimate<br/>Convenience:</h3>
                <p className="text-sand-700 text-xs sm:text-sm font-medium leading-snug">Pick up, wear out,<br/>bring home clean.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
                <div className="mb-2 text-forest-800">
                   {/* Whistle Icon */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                   </svg>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-forest-900 mb-1 leading-tight">Real-World<br/>Training:</h3>
                <p className="text-sand-700 text-xs sm:text-sm font-medium leading-snug">Recall & obedience<br/>practice included.</p>
            </div>
          </div>

          {/* Pricing Box - Compact */}
          <div className="px-8 mb-6 shrink-0">
            <div className="bg-white border-2 border-forest-800 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-center text-forest-900 mb-4">
                The All-Inclusive Package
              </h2>
              
              <div className="flex flex-row justify-center items-center gap-8">
                {/* List - shrink-0 to prevent growing too much, width auto */}
                <div className="space-y-2 shrink-0">
                   {[
                     { text: "Door-to-door Transport ($50 value)", highlight: false },
                     { text: "Certified Training Session ($100 value)", highlight: false },
                     { text: "Beach Adventure & Socialization ($50 value)", highlight: false },
                     { text: "Bath, Brush & Shampoo Refresh ($40 value)", highlight: false },
                     { text: "Photo/Video Report Card (Priceless)", highlight: false },
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-start gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                       <span className="text-forest-900 font-medium text-sm sm:text-base leading-tight">{item.text}</span>
                     </div>
                   ))}
                </div>

                {/* Price - Increased Size */}
                <div className="text-center flex flex-col items-center justify-center border-l border-sand-200 pl-8 shrink-0">
                   <p className="text-sand-500 text-lg mb-1">Total Value: <span className="line-through decoration-red-500 decoration-2">$249</span></p>
                   <p className="font-heading text-7xl font-extrabold text-forest-800 leading-none">$199</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Area - Footer */}
          <div className="bg-forest-900 text-white py-6 px-12 mt-auto">
             <div className="flex flex-row items-center justify-between gap-4">
                
                {/* Left: CCPDT Symbol Box - Increased Border */}
                <div className="flex-shrink-0 bg-white p-2 rounded-lg border-6 border-yellow-400 shadow-md">
                   <div className="w-16 h-16 flex items-center justify-center">
                      <img src="/ccpdt.png" alt="CCPDT Certified" className="w-full h-full object-contain" />
                   </div>
                </div>

                {/* Center: Button & Email */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1">
                    {/* Text Button */}
                    <div className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-lg sm:text-xl py-3 px-6 rounded-full shadow-lg cursor-pointer transform hover:scale-105 duration-200 whitespace-nowrap">
                       Text "BEACH" to (650) 419-0278
                    </div>

                    {/* Email */}
                    <p className="text-sand-200 text-sm">
                       questions to: <a href="mailto:charles@petoutings.com" className="text-white hover:underline font-semibold">charles@petoutings.com</a>
                    </p>
                </div>

                {/* Right: QR Code */}
                <div className="flex flex-col items-center flex-shrink-0">
                    <div className="mb-1">
                       <QRCode
                         value="https://petoutings.com"
                         bgColor="transparent"
                         fgColor="#facc15"
                         size={64}
                       />
                    </div>
                    <p className="text-sand-300 text-[10px] max-w-[100px] text-center leading-tight">Scan QR code to visit petoutings.com</p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlyerPage;
