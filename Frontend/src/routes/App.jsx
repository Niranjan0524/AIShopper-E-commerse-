
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

import FetchItems from '../components/FetchItems'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const fetchStatus=useSelector((store)=>store.fetchStatus);
  
  
  return (
    
    <>
    <Header></Header>
    
    <FetchItems></FetchItems>
    
    <div className="giveTopMargin">
      
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> :  <Outlet></Outlet> }  
 
    </div>
    <Footer></Footer>
   
    </>
  )
}

export default App
