import { ReactNode } from 'react';
import PageElement from '../PageElement';
import { randomUUID } from 'crypto';

export default function PageElement_List({ children }: { children: ReactNode[] | ReactNode }) {
  let childrenArray = Array.isArray(children) ? children : [children];
  const uuid = crypto.getRandomValues(new Uint32Array(10))[0];
  return (
    <PageElement>
      <ul>
        {childrenArray.map((child, i) => (
          <li key={`list-${i}-${uuid}`}>{child}</li>
        ))}
      </ul>
    </PageElement>
  );
}
