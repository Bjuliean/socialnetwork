import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Footer from './components/Footer/Footer.jsx';
import Profile from './components/Profile/Profile.jsx';
import Messages from './components/Messages/Messages.jsx';
import News from './components/News/News.jsx';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <div className="page">
          <Routes>
            <Route path="/profile/*" element={<Profile state={props.state.profilePage} />} />
            <Route path="/messages/*" element={<Messages state={props.state.messagesPage} />} />
            <Route path="/news/*" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
