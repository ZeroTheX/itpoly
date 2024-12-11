import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import M from './pages/M';
import NewsSection from './pages/NewsSection';
import CustomerReviews from './pages/CustomerReviews';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />

      <M />

      <NewsSection />

      <CustomerReviews />
      
    </div>
  );
}

export default App;
// TEST