import './App.css';
import Navi from './Component/Navi';
import Foots from './Component/Foots';
import HeroSecction from './Component/HeroSection';

const App = () => {
  return (
  <>
    <div className='bg-yellow-100 sm:bg-gradient-to-r from-yellow-400 via-green-400 to-blue-300 p-5  px-10'>
        <div className='bg-white sm:bg-white   shadow-2xl shadow-slate-900 rounded-xl ' >
          <Navi/>
          <HeroSecction/>
        </div>
    <Foots/>
    </div>
    
  </>
  )
}
export default App
