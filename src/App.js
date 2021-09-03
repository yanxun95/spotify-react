import './App.css';
import LeftNavBar from './components/LeftNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './components/style/style.css'
import InfoRight from './components/InfoRight';
import FriendList from './components/FriendList';
import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <div className="main-container">
      <div className="body-container">
        <LeftNavBar />
        <InfoRight />
        <FriendList />
      </div>
      <NowPlaying />
    </div>
  );
}

export default App;
