import { ReactNode } from 'react';
import PageElement from '../PageElement';

export default function PageElement_List({ children }: { children: ReactNode[] | ReactNode }) {
  let childrenArray = Array.isArray(children) ? children : [children];
  return (
    <PageElement>
      <ul>
        {childrenArray.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </PageElement>
  );
}
