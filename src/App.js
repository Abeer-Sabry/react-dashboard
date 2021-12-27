import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import CustomContainer from './Utlies/Container';

function App() {
  return (
    <div className="App">
      <CustomContainer>
        <Dashboard />
      </CustomContainer>
    </div>
  );
}

export default App;
