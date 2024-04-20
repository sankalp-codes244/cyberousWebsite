import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
        <p className="text-lg text-gray-700 mb-6">
          All information on "www.cyberous.in" is provided in good faith and solely for the purpose of providing general information.
          <br />
          <br />

          Cyberous takes no responsibility or warranties about the completeness, accuracy, or reliability of this information.
          <br />
          <br />
          Any action you take as a result of the information on the website Cyberous is solely at your own risk.
          Cyberous is not responsible for any losses or damages incurred as a result of using our website.
          You can visit other websites by clicking on hyperlinks to such external sites from our website. We make every effort to give only high-quality links to useful and ethical websites, but we have no control over their content or nature.
          <br />
          <br />
          These links to other websites do not mean that all of the content on other sites is recommended. Owners and content on the site may change without warning, and this may happen before we have a chance to delete a potentially harmful connection.
          <br />
          <br />
          Please be aware that when you leave our website, the privacy policies and terms or other sites may differ from ours, and we have no control over them.
          <br />
          <br />
          Before doing any business or posting any information, please read the "Privacy Policies" as well as the "Terms of Service" of those sites.
          <br />
          <br />
          Our Disclaimer was created with the help of the ToolsPrince Disclaimer Page Generator.

        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          You consent to our disclaimer and agree to its conditions by using our website.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Update</h2>

        <p className="text-lg text-gray-700 mb-6">
         If we update, alter, or edit this document in any way, those changes will be prominently displayed here.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          If you require any additional information or have any queries about our disclaimer then please contact us via email address given below.
          <br />
          Email: <a href='mailto:info@cyberous.in'>info@cyberous.in</a>
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
