import React, { useEffect } from 'react'
import Testimonials from '../../Homepage/Testimonial/Testemonial'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import Footer from '../../../components/Footer'
import { Images } from '../../../assets'
import PageHeader from './PageHeader/PageHeader'
import CyberAttacks from './CyberAttacks/CyberAttacks'
import PlayRules from './PlayRules/PlayRules'
import Experts from './Experts/Experts'
import CollectiveIntelligence from './CollectiveIntelligence/CollectiveIntelligence'
import NamesYouKnow from './NamesYouKnow/NamesYouKnow'
import Attackers from './Attackers/Attackers'
import SayHello from './SayHello/SayHello'

const RedTeaming = () => {
  const data = [
    {
      id: 1,
      name: "Anonymous",
      title: "",
      desc: "Cyberous' Red Teaming service was a game-changer for our organization. Their simulated attacks were realistic and comprehensive, revealing vulnerabilities we hadn't anticipated. Their insights and recommendations helped us strengthen our defenses significantly. Cyberous is our trusted partner for proactive cybersecurity.",
      image: Images.user
    },
    {
      id: 2,
      name: "Anonymous",
      title: "",
      desc: "We were thoroughly impressed by Cyberous' Red Teaming service. Their team conducted a thorough assessment of our security posture, identifying weaknesses and exploiting them in simulated attacks. Their detailed report and actionable recommendations empowered us to enhance our security measures effectively. Cyberous is a true leader in Red Teaming.",
      image: Images.user
    },
    {
      id: 3,
      name: "Anonymous",
      title: "",
      desc: "Cyberous' Red Teaming service exceeded our expectations. Their team's expertise and professionalism were evident throughout the engagement. They challenged our defenses with realistic attack scenarios, providing valuable insights into our security strengths and weaknesses. We're grateful for Cyberous' guidance and highly recommend their Red Teaming service.",
      image: Images.user
    },
    {
      id: 4,
      name: "Anonymous",
      title: "",
      desc: "Hats off to Cyberous for their exceptional Red Teaming service. Their team's simulated attacks were sophisticated and insightful, giving us a clear understanding of our organization's security posture. Their comprehensive report and recommendations enabled us to address vulnerabilities and enhance our defenses. Cyberous is our go-to partner for Red Teaming.",
      image: Images.user
    },
    {
      id: 5,
      name: "Anonymous",
      title: "",
      desc: "Cyberous' Red Teaming service was instrumental in validating our security measures. Their team's expertly executed simulated attacks exposed weaknesses in our defenses, allowing us to address them proactively. Their insights and recommendations were invaluable in strengthening our security posture. Cyberous is a trusted advisor for Red Teaming.",
      image: Images.user
    },
    {
      id: 6,
      name: "Anonymous",
      title: "",
      desc: "Choosing Cyberous for our Red Teaming needs was one of the best decisions we made for our organization's security. Their team's professionalism and expertise were evident as they conducted simulated attacks on our systems. Their detailed report provided actionable recommendations for improvement, helping us enhance our security posture effectively. We highly recommend Cyberous for Red Teaming services.",
      image: Images.user
    }
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader/>
      <CyberAttacks/>
      <PlayRules/>
      <Experts/>
      <CollectiveIntelligence/>
      <NamesYouKnow/>
      <Attackers/>
      <SayHello/>


      <IndustrialRecognition />
      <Testimonials data={data} />
    </div>
  )
}

export default RedTeaming