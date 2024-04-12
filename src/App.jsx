import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrewmatesList from './components/CrewmatesList';
import CrewmateInfo from './components/CrewmateInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrewmatesList />} />
        <Route path="/crewmate/:id" element={<CrewmateInfo />} />
      </Routes>
    </Router>
  );
};

export default App;