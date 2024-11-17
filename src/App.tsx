import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import { EventsType } from './types/types';
import {eventsData} from './data/eventsData'; // Import your events data
import EventsList from './components/EventList/EventsList';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [events, setEvents] = useState<EventsType[]>(eventsData); // Corrected type
  const [showNav, setShowNav] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasEventBeenSelected, setHasEventBeenSelected] = useState<boolean>(false);

  let eventsUsed = events;

  return (
    <>
      <div className="app">
        <NavMenu showNav={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route
            path="/"
            element={<EventsList eventsUsed={eventsUsed} setHasEventBeenSelected={setHasEventBeenSelected} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
