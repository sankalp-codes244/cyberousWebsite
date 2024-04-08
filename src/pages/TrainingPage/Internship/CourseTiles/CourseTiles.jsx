import React from 'react'
import TrainingCard from '../../../../components/TrainingCard'
import { Images } from '../../../../assets';
import Training from '../../../Homepage/Training/Training';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';

const CourseTiles = () => {
    const programs = [
        {
          id: 1,
          title: 'Bug Bounty',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources1,
          type: 'bug_bounty'
        },
        {
          id: 2,
          title: 'Advanced Ethical Hacking',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources2,
          type: 'Advanced_Ethical_Hacking'
        },
        {
          id: 3,
          title: 'Linux Fundamental',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources3,
          type: 'Linux_Fundamental'
        },
        {
          id: 4,
          title: 'Cyber Security Diploma',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources4,
          type: 'Cyber_Security_Diploma'
        },
        {
          id: 5,
          title: 'Application Development',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources5,
          type: 'Application_Development' 
        },
        {
          id: 6,
          title: 'Advanced Ethical Hacking',
          description: 'Smart CCTV Security Systems That Fits Your Business',
          image: Images.ourcources2,
          type: 'Advanced_Ethical_Hacking'
        },
      ];
    
  return (
    <div className=''>
        <div className='flex justify-center'>
          <div className='md:w-10/12'>
            <TrainingPrograms programs={programs} />           
          </div>
        </div>
    </div>
  )
}

export default CourseTiles