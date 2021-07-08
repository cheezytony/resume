import Details from './components/sections/Details';
import Header from './components/sections/Header';
import Summary from './components/sections/Summary';
import './App.css';

function App() {
  return (
    <article className="app">
      <div className="container">
        <Header />
        <main className="app__main">
          <Summary />
          <Details />
        </main>
      </div>
    </article>
  );
}

export default App;
