// <<<<<<< HEAD
// import Foot from './components/Foot';
// import Hero from './components/Hero';
// import Report from './components/Report';
// import './style/medical.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './index.css'


// function App() {
//   return (
//     <>
//       <Hero/>
//       {/* <Report/> */}
//       <Foot />
//     </>
//   );
// =======
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PatientInfo from './components/PatientInfo';
import Test from './components/Test';

function App() {
    return (
        <div className="App">
            <PatientInfo/>
            <Test/>
        </div>
    );
// >>>>>>> 07394b66247a56532ec77ad7029e1476d45ce3d2
}

export default App;
