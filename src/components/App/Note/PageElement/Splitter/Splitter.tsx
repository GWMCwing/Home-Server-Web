import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import PageElement from '../PageElement';

export default function Splitter({ children, direction }: { children: ReactNode[]; direction: 'row' | 'column' }) {
  //
  const horizontalStyle = {
    width: '100%',
  };
  const verticalStyle = {
    height: '100%',
  };
  const wrapperStyle = direction === 'row' ? horizontalStyle : verticalStyle;
  return (
    <PageElement>
      <Stack direction={direction} spacing={2}>
        {children.map((child) => {
          return <div style={wrapperStyle}>{child}</div>;
        })}
      </Stack>
    </PageElement>
  );
  //
}
