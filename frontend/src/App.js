import './App.css';
import BooksContainer from './components/BooksContainer';
import Nav from './components/Nav'

function App() {
  return (
    <div className='container-fluid'>
      <Nav />
      <div className="container mt-2">
        <BooksContainer />
      </div>
    </div>
  );
}

export default App;
