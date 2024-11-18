
import './App.css';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';


function App() {
  return (
    <div className='App'>
      <Hero/>
      <Main />
      <Services/>
      <Footer />
      <Card
      title='Card Title'
      imageUrl='https://www.google.com/imgres?q=dj&imgurl=https%3A%2F%2Fexperimedia.net%2Fwp-content%2Fuploads%2F2023%2F12%2Fimage-155-1024x701.jpeg.webp&imgrefurl=https%3A%2F%2Fexperimedia.net%2Ftips%2Fhow-long-do-djs-work%2F&docid=fZDIxjgXG9yXnM&tbnid=rcI-dsyAyXaXQM&vet=12ahUKEwjU27WiweWJAxW6SWwGHXDDHE0QM3oECGYQAA..i&w=1024&h=701&hcb=2&ved=2ahUKEwjU27WiweWJAxW6SWwGHXDDHE0QM3oECGYQAA'
      body='lorem20' />
      
    </div>
  );
}

export default App;
