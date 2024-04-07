import React, { useEffect } from 'react'
import { Images } from '../../../assets'
import PageHeader from './pageHeader/PageHeader'
import BoostEmployee from './BoostEmployee/BoostEmployee'
import CorporateCyber from './CorporateCyber/CorporateCyber'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import NamesYouKnow from '../../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import MediaGallery from '../../Homepage/MediaGallery/MediaGallery'
import Faqs from '../../Homepage/FAQs/Faqs'
import AreYouReady from './AreYouReady/AreYouReady'

const CorporateTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <PageHeader />
      </div>
      <div>
        <BoostEmployee />
      </div>
      <div>
        <CorporateCyber />
      </div>
      <div>
        <AreYouReady />
      </div>
      <div>
        <IndustrialRecognition />
      </div>
      <div>
        <NamesYouKnow />
      </div>
      <div>
        <MediaGallery />
      </div>
      <div>
        <Faqs />
      </div>
    </div>
  )
}

export default CorporateTraining