import './App.css'
import { Suspense } from 'react'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise =fetch('pricingData.json').then(res=>res.json())
const marksPromise = axios.get('marksData.json');

function App() {
  

  return (
    <>
  {/* <DaisyNav></DaisyNav> */}
  <header>
  <Navbar></Navbar>
  </header>
  <main>
    <Suspense callback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOptions pricingPromise={pricingPromise}>

    </PricingOptions>
    </Suspense>

    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>

    <ResultsChart></ResultsChart>

  </main>
    </>
  )
}

export default App
