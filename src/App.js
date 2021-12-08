import './App.css';
import Home from './components/Home/Home';
import CustomContainer from './Utlies/Container';

function App() {
  return (
    <div className="App">
      <CustomContainer>
        <Home />
      </CustomContainer>
    </div>
  );
}

export default App;
