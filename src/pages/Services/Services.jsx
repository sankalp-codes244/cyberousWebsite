import React from 'react'
import Methodology from './Methodology/Methodology'

const Services = () => {

const boxData = [
    {
      id: 0,
      headingText: 'Black box testing',
      paragraphText: "Begin a thorough security exploration through Black Box Testing. Picture it as a simulated cyber intrusion, where our specialists, acting as external attackers, meticulously assess your system's defenses. By examining your system from an outsider's perspective, we pinpoint vulnerabilities that could be exploited in real-world situations. This approach not only assesses your system's existing security stance but also strengthens it against potential external threats in the ever-evolving cybersecurity landscape.",
    },
    {
      id: 1,
      headingText: 'Grey box testing',
      paragraphText: "Achieve a balanced fusion of security insight and an external viewpoint through Gray Box Testing. Our strategy combines the advantages of Black Box and White Box methods. Equipped with partial knowledge of your system's internal structure, our specialists execute a detailed assessment. This approach provides a well-rounded perspective, enabling us to simulate an attacker's strategy with restricted internal details. It represents the optimal intersection where transparency intersects with robust vulnerability analysis, guaranteeing a comprehensive evaluation while maintaining realistic simulation.",
    },
    {
      id: 2,
      headingText: 'White box testing',
      paragraphText: "Gain insight into the core of your digital defenses through White Box Testing. Consider it as a thorough examination of your system's security health. Our specialists meticulously scrutinize the internal architecture, source code, and algorithms, leaving no aspect unexplored. This approach not only detects vulnerabilities but also offers insights into the overall strength of your system. Acting as an internal guardian, White Box Testing reinforces your digital assets against potential threats, providing a protective layer that extends beyond the surface.",
    }
  ]
  return (
    <div className='h-full'>

      <div className='bg-white'>
        {/* Heading Text */}
        <div className='flex flex-col text-center '>
          <h1 className='text-3xl lg:text-3xl  font-bold mt-4'> Our Services </h1>
          <div className='flex justify-center'>
            <div className="h-1 w-32 bg-custom-buttonColor-Green mt-6 rounded-full"></div>
          </div>
          <h1 className='text-3xl lg:text-5xl text-black font-bold mt-4'> Overview of Our Services </h1>
        </div>


        {/* Overview Services Text */}
        <div className='flex justify-center'>
          <div className='w-2/3'>
            <p className=' text-center m-6 mb-12 text-lg text-custom-fontColor-grey'>
              Benefit from robust protection for your digital assets through our Web Application Security Testing service. Our skilled team utilizes state-of-the-art methodologies, such as Black Box, Gray Box, and White Box Testing, to meticulously assess your web applications. We delve beyond surface-level vulnerabilities, addressing intricate business logic flaws for a thorough security evaluation. Our service adheres to industry standards like OWASP10, SANS25, and OSSTMM, offering both on-premises and off-premises application security testing. With a proven roadmap honed through years of experience, we safeguard online platforms, mobile applications, and cloud environments effectively, leaving no space for cyber threats.
            </p>
          </div>
        </div>
      </div>
      <div >
      <div className='flex justify-center'>
            <div className="h-1 w-4/5 bg-custom-greyBorderColor rounded-full"></div>
          </div>
      </div>
      {/* Subpages */}
      <Methodology boxData={boxData}/>
    </div>
  )
}

export default Services