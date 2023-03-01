import './scss/App.scss';
import MainPage from "./shared/components/page/mainPage/mainPage";
import Header from "./shared/components/header";
import Footer from "./shared/components/footer";
import Registration from "./shared/components/registration/registration";
import {useState} from "react";

function App() {
    const [registration, setRegistration] = useState(true);
    console.log('registration',registration)

  return (
    <div className="App">
        <div className="container">
            <Header setRegistration={setRegistration}/>
            {/*<MainPage setRegistration={setRegistration}/>*/}
            <Registration
                setRegistration={setRegistration}
                registration={registration}
            />
            <Footer />
        </div>
    </div>
  );
}

export default App;
