import './scss/App.scss';
import MainPage from "./shared/components/page/mainPage/mainPage";
import Registration from "./shared/components/registration/registration";
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <HashRouter>
          <div className="App">
              <div className="container">
                  <Routes>
                      <Route exact path="/" element={<MainPage />} />
                      <Route exact path="/registration" element={<Registration />} />
                  </Routes>
              </div>
          </div>
      </HashRouter>
  );
}

export default App;
