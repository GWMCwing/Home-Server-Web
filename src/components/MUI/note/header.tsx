'use client';

import { ReturnOfSetState } from '@/types/react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { ImperativePanelHandle } from 'react-resizable-panels';

import { RefObject } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export function NoteHeader({ openState, sideBarPanelRef }: { openState: ReturnOfSetState<boolean>; sideBarPanelRef: RefObject<ImperativePanelHandle> }) {
  const [open, setOpen] = openState;
  const handleDrawerOpen = () => {
    setOpen(true);
    sideBarPanelRef.current?.expand();
  };
  return (
    <>
      <Toolbar>
        {!open && (
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          YOUR NAME
        </Typography>
      </Toolbar>
    </>
  );
}
