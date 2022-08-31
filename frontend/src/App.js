import './App.css';
import BooksContainer from './components/BooksContainer';
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <div className='container-fluid bg-light'>
        <BooksContainer />
      </div>
    </div>
  );
}

export default App;
