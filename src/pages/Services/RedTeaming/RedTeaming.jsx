import React from 'react'
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
      <Testimonials />
      <Footer />
    </div>
  )
}

export default RedTeaming