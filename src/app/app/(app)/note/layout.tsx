'use client';
import { ImperativePanelHandle, Panel, PanelGroup } from 'react-resizable-panels';

import { useRef, useState } from 'react';
import WrappedPanelResizeHandle from '@/components/Panel/WrappedPanelResizeHandle';
import { SideBar } from '@/components/MUI/note/sidebar';
import { NoteHeader } from '@/components/MUI/note/header';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sideBarState = useState(false);
  const groupRef = useRef(null);
  const drawerWidth = {
    min: 175,
    default: 240,
    max: 350,
  };
  const sideBarPanelRef = useRef<ImperativePanelHandle>(null);
  return (
    <body style={{ padding: '0', backgroundColor: 'white', height: '100vh', margin: '0' }}>
      <NoteHeader openState={sideBarState} sideBarPanelRef={sideBarPanelRef} />
      <Stack direction="row" height={'100%'}>
        <Container
          disableGutters
          sx={{
            width: 'max-content',
            maxWidth: '20%',
            borderRight: `1px solid grey`,
          }}
        >
          <SideBar openState={sideBarState} sideBarPanelRef={sideBarPanelRef} />
        </Container>
        <div style={{ width: '100%' }}>{children}</div>
      </Stack>
      <div
        style={{
          marginBlock: '2rem',
        }}
      ></div>
    </body>
  );
}
