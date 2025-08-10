import TargetCursor from "./react-bits/TargetCursor";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeaderSimple } from "./components/HeaderSimple";

export default function App () {
  return(
    <>
    <MantineProvider>
    <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />

    <HeaderSimple />
    
    </MantineProvider>
    </>
  );
}