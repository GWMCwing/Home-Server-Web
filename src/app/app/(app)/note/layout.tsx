'use client';
import { ImperativePanelHandle, Panel, PanelGroup } from 'react-resizable-panels';

import { useRef, useState } from 'react';
import WrappedPanelResizeHandle from '@/components/Panel/WrappedPanelResizeHandle';
import { SideBar } from '@/components/MUI/note/sidebar';
import { NoteHeader } from '@/components/MUI/note/header';

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
      <PanelGroup direction="horizontal" units="pixels" ref={groupRef}>
        <Panel
          ref={sideBarPanelRef}
          id="sidebar"
          collapsible={true}
          minSize={drawerWidth.min}
          defaultSize={drawerWidth.default}
          maxSize={drawerWidth.max}
          collapsedSize={0}
          order={1}
        >
          <SideBar openState={sideBarState} sideBarPanelRef={sideBarPanelRef} />
        </Panel>
        <WrappedPanelResizeHandle width={5} />
        <Panel id="main" order={2}>
          <NoteHeader openState={sideBarState} sideBarPanelRef={sideBarPanelRef} />
          {children}
        </Panel>
      </PanelGroup>
    </body>
  );
}
