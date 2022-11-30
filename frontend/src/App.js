import './App.css';
import BooksContainer from './components/BooksContainer';
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav />
      <div className='container-fluid bg-light mt-3 mb-3'>
        <BooksContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
