import './scss/App.scss';
import MainPage from "./shared/components/page/mainPage/mainPage";
import Registration from "./shared/components/registration/registration";
import {Route, Routes} from "react-router-dom";
import GlobalSearch from "./shared/components/globalSearch/globalSearch";
import Summary from "./shared/components/summary/summary";

function App() {
  return (
      <div className="App">
          <div className="container">
              <Routes>
                  <Route exact path="/" element={<MainPage />} />
                  <Route exact path="/registration" element={<Registration />} />
                  <Route exact path="/globalSearch" element={<GlobalSearch />} />
                  <Route exact path="/summary" element={<Summary />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
