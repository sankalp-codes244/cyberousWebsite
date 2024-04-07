import React from 'react'
import { Images } from '../../../assets'
import FormComponent from '../../../components/FormComponent'
import PageHeader from './PageHeader/PageHeader'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import NamesYouKnow from '../../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import MediaGallery from '../../Homepage/MediaGallery/MediaGallery'
import Faqs from '../../Homepage/FAQs/Faqs'
import CourseTiles from './CourseTiles/CourseTiles'

const Internship = () => {
  return (
    <div>
      <div>
        <PageHeader/>
      </div>
      
      <div>
        <CourseTiles />
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
        <Faqs/>
      </div>
    </div>
    
  )
}

export default Internship