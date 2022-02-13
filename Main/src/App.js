import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Footer from './components/Footer/Footer.jsx';
import Profile from './components/Profile/Profile.jsx';
import Messages from './components/Messages/Messages.jsx';
import News from './components/News/News.jsx';

function App(props) {
  return (
      <div className="App">
        <Header />
        <Aside />
        <div className="page">
          <Routes>
            <Route path="/profile/*" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/messages/*" element={<Messages state={props.state.messagesPage} dispatch={props.dispatch} />} />
            <Route path="/news/*" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
