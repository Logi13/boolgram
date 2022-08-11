import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Main from './components/main/main';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <div class="div-separator"></div> */}
      
      
      <div class="">
        <div class="body-main-container-2-col-grid">
          <Main />
          <SideBar />
        </div>
      </div>
      
    </div>
  );
}

export default App;
