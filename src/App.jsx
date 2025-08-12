import TargetCursor from "./react-bits/TargetCursor";
import '@mantine/core/styles.css';
import {Routes, Route} from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import Home from "./pages/Home";
import Map from "./pages/Map";
import Preferences from "./pages/Preferences";
import TripPlanner from "./pages/TripPlanner";
import Budget from "./pages/Budget";


export default function App () {
  return(
    <>
    <MantineProvider>
      <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
        />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/map" element={<Map />} />
        <Route path="/settings" element={<Preferences />} />
        <Route path="/github-repo" element={'https://github.com/jonelcubio/travel-planner'} />
      </Routes>
    </MantineProvider>
    </>
  );
}