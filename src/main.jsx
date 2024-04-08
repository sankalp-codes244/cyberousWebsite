import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import TrainingPage from './pages/TrainingPage/TrainingPage.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/404Page/NotFound.jsx'
import Blog from './pages/Blog/Blog.jsx'
import WebApplicationSecurity from './pages/Services/VAPT/WebApplicationSecurity/WebApplicationSecurity.jsx'
import SourceCode from './pages/Services/VAPT/SourceCode/SourceCode.jsx'
import Network from './pages/Services/VAPT/Network/Network.jsx'
import IOTPT from './pages/Services/VAPT/IOTPenetrationTesting/IOTPT.jsx'
import IOSPT from './pages/Services/VAPT/IOSPenetrationTesting/IOSPT.jsx'
import APIPT from './pages/Services/VAPT/APIPenetrationTesting/APIPT.jsx'
import AndroidPT from './pages/Services/VAPT/AndroidPenetrationTesting/AndroidPT.jsx'
import Consultancy from './pages/Services/Consultancy/Consultancy.jsx'
import RedTeaming from './pages/Services/RedTeaming/RedTeaming.jsx'
import Career from './pages/Careers/Career.jsx'
import CorporateTraining from './pages/TrainingPage/CorporateTraining/CorporateTraining.jsx'
import Development from './pages/TrainingPage/Development/Development.jsx'
import Internship from './pages/TrainingPage/Internship/Internship.jsx'
import Diploma from './pages/TrainingPage/Diploma/Diploma.jsx'
import AdvanceEthicalHacking from './pages/TrainingPage/EthicalHacking/AdvanceEthicalHacking/AdvanceEthicalHacking.jsx'
import BugBounty from './pages/TrainingPage/EthicalHacking/BugBounty/BugBounty.jsx'
import LinuxFundamentals from './pages/TrainingPage/EthicalHacking/LinuxFundamentals/LinuxFundamentals.jsx'
import MobilePT from './pages/TrainingPage/EthicalHacking/MobilePT/MobilePT.jsx'
import WebPT from './pages/TrainingPage/EthicalHacking/WebPT/WebPT.jsx'
import NetworkPT from './pages/TrainingPage/EthicalHacking/NetworkPT/NetworkPT.jsx'
import TermsandCond from './pages/FooterContent/TermsandCond.jsx'
import Disclamer from './pages/FooterContent/Disclamer.jsx'
import PrivacyPolicy from './pages/FooterContent/PrivacyPolicy.jsx'
import DMCAPolicy from './pages/FooterContent/DMCAPolicy.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='*' element={<NotFound />} />
      <Route path='' element={<Homepage />} />
      <Route path='/training' element={<TrainingPage />} />
      <Route path='/training/advanceeh' element={<AdvanceEthicalHacking/>} />
      <Route path='/training/bugbounty' element={<BugBounty />} />
      <Route path='/training/linuxfundamentals' element={<LinuxFundamentals />} />
      <Route path='/training/mobilept' element={<MobilePT/>} />
      <Route path='/training/webpt' element={<WebPT />} />
      <Route path='/training/networkpt' element={<NetworkPT />} />
      <Route path='/training/corporatetraining' element={<CorporateTraining />} />
      <Route path='/training/development' element={<Development />} />
      <Route path='/training/internship' element={<Internship />} />
      <Route path='/training/diploma' element={<Diploma />} />
      
      
      <Route path='/services' element={<Services />} />
      <Route path='/services/websecurity' element={<WebApplicationSecurity />} />
      <Route path='/services/sourcecode' element={<SourceCode />} />
      <Route path='/services/network' element={<Network />} />
      <Route path='/services/iotpt' element={<IOTPT/>} />
      <Route path='/services/iospt' element={<IOSPT />} />
      <Route path='/services/apipt' element={<APIPT/>} />
      <Route path='/services/androidpt' element={<AndroidPT/>} />
      <Route path='/services/consultancy' element={<Consultancy/>} />
      <Route path='/services/redteaming' element={<RedTeaming/>} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/career' element={<Career/>} />
      <Route path='/terms'element={<TermsandCond/>} />
      <Route path='/disclaimer'element={<Disclamer/>} />
      <Route path='/privacyPolicy'element={<PrivacyPolicy/>} />
      <Route path='/DMCA'element={<DMCAPolicy/>} />

    </Route>,
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
