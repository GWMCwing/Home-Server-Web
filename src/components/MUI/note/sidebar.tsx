'use client';
import { ReturnOfSetState } from '@/types/react';
import { useTheme } from '@emotion/react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import { ImperativePanelHandle } from 'react-resizable-panels';

import { RefObject } from 'react';

export function SideBar({ openState, sideBarPanelRef: panelRef }: { openState: ReturnOfSetState<boolean>; sideBarPanelRef: RefObject<ImperativePanelHandle> }) {
  const theme = useTheme();
  const [open, setOpen] = openState;
  const handleDrawerClose = () => {
    setOpen(false);
    panelRef.current?.resize(0);
  };
  return (
    <div>
      <Grid container justifyContent="flex-end">
        <IconButton onClick={handleDrawerClose}>{<ChevronRightIcon />}</IconButton>
      </Grid>
      <Divider
        sx={{
          width: '100%',
        }}
      />
      <List
        sx={{
          overflow: 'auto',
          // textOverflow: 'ellipsis',
        }}
      >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <Typography whiteSpace={'nowrap'}>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
