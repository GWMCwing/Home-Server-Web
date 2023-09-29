import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import PageElement from '../PageElement';

export default function PageElement_Splitter({ children, direction }: { children: ReactNode[]; direction: 'row' | 'column' }) {
  //
  const uuid = crypto.getRandomValues(new Uint32Array(10))[0];

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
        {children.map((child, i) => {
          return (
            <div key={`splitter-${i}-${uuid}`} style={wrapperStyle}>
              {child}
            </div>
          );
        })}
      </Stack>
    </PageElement>
  );
  //
}
