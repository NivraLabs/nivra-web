import NavBar from './components/NavBar';

export default function App(props) {
  return (
    <>
      <NavBar/>
      {props.children}
    </>
  );
}
