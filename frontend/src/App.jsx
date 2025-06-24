import Footer from './components/Footer';
import NavBar from './components/NavBar';


export default function App(props) {
  return (
    <>
      <NavBar/>
      {props.children}
      <Footer/>
    </>
  );
}
