import './App.css';
import Header from './components/layout/header/Header';
import SearchComp from './components/search/search';
import Body from './components/layout/Body';

function App() {
    console.log(<Body></Body>)
  return (
    <div>
        <Header></Header>
        {/* <SearchComp></SearchComp>  */}
        <Body></Body>
    </div>
  );
}

export default App;
