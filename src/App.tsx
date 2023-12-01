import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { FormWithHook } from './pages/FormWithHook';
import { Uncontrolled } from './pages/UncontrolledForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/uncontrolled-form" element={<Uncontrolled />} />
          <Route path="/with-hook-form" element={<FormWithHook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
