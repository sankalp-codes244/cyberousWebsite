import React from 'react'
import { Images } from '../../../assets'
import PageHeader from './pageHeader/PageHeader'
import BoostEmployee from './BoostEmployee/BoostEmployee'
import CorporateCyber from './CorporateCyber/CorporateCyber'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import NamesYouKnow from '../../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import MediaGallery from '../../Homepage/MediaGallery/MediaGallery'
import Faqs from '../../Homepage/FAQs/Faqs'

const CorporateTraining = () => {
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