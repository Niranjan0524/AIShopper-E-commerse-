
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

import FetchItems from '../components/FetchItems'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css";
import SellerHeader from '../components/SellerHeader'

function App() {

  const fetchStatus=useSelector((store)=>store.fetchStatus);
  
  const {userType}=useSelector((store)=>store.auth);
  
  return (
    
    <>
    {
      userType==="seller" ? <SellerHeader></SellerHeader> :
    <Header></Header>
    }
    <FetchItems></FetchItems>
    
    <div className="giveTopMargin">
      
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> :  <Outlet></Outlet> }  
 
    </div>
    <Footer></Footer>
   
    </>
  )
}

export default App
