'use client';
import { ReactNode, useRef, useState } from 'react';
import PageElement from '../PageElement';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function PageElement_CollapsibleList({ children }: { children: ReactNode[] }) {
  const [header, ...items] = children.flat(1);
  const [open, setOpen] = useState(false);
  const collapseButtonRef = useRef<HTMLDivElement>(null);
  const uuid = crypto.getRandomValues(new Uint32Array(10))[0];
  return (
    <PageElement>
      <>
        <List
          dense
          sx={{
            padding: '0',
          }}
        >
          <ListItem key={`collapsible-list-head-${uuid}`}>
            <div ref={collapseButtonRef} onClick={() => setOpen(!open)}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>
            {header}
          </ListItem>
        </List>
        <Collapse in={open}>
          <List
            disablePadding
            dense
            sx={{
              paddingLeft: `${collapseButtonRef.current?.clientWidth ?? 0}px`,
              marginLeft: '0.75em',
            }}
          >
            {items.map((child, i) => (
              <ListItem key={`collapsible-list-item-${i}-${uuid}`}>{child}</ListItem>
            ))}
          </List>
        </Collapse>
      </>
    </PageElement>
  );
}
