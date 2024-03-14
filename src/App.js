import Header from './Header.js';
import logo from './logo.svg';
import './App.css';
import Content from'./Content.js';
import Footer from'./Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Лабораторная работа №3</p>
      </header>
    <body className="App-header">
      <Content/>
    </body>
    <Footer/>
    </div>
  );
}

export default App;
