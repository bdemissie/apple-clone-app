
import './css/styles.css'
import './css/bootstrap.css'
import Header from './ClassComponent/Header/Header';
import AlertSection from './ClassComponent/Main.js/AlertSection';
import FirstSection from './ClassComponent/Main.js/FirstSection';
import SecondSection from './ClassComponent/Main.js/SecondSection';
import ThirdSection from './ClassComponent/Main.js/ThirdSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <AlertSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}

export default App;
