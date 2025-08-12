import TargetCursor from "./react-bits/TargetCursor";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeaderSimple } from "./components/HeaderSimple";
import HeroGrid from "./components/HeroGrid";

export default function App () {
  return(
    <>
    <MantineProvider>
    <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />

    <HeaderSimple />
    <HeroGrid />
    
    </MantineProvider>
    </>
  );
}