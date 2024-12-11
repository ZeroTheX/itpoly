import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Homepages/Carousel';
import M from './pages/Homepages/M';
import NewsSection from './pages/Homepages/NewsSection';
import CustomerReviews from './pages/Homepages/CustomerReviews';
import Footer from './components/fter';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />

      <M />

      <NewsSection />

      <CustomerReviews />

      <Footer />

    </div>
  );
}

export default App;
