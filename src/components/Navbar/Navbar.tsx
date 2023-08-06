'use client';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import PageLinkList from './PageLink';

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#1a1a1a',
      }}
    >
      <Toolbar>
        <Link href="/">
          <Typography
            noWrap
            sx={{
              color: '#00ff37',
              paddingInlineEnd: '1.5rem',
            }}
          >
            GW_MC
          </Typography>
        </Link>
        <PageLinkList />
      </Toolbar>
    </AppBar>
  );
}
