import { forwardRef } from 'react';
import style from './style.module.css';

const PageElement = forwardRef(function ({ children }: { children: JSX.Element }, ref: React.Ref<HTMLDivElement>) {
  return (
    <div className={`${style['page-element']} ${style['page-element_hoverable']}`} ref={ref}>
      {/*  */}
      {children}
      {/*  */}
    </div>
  );
});

export default PageElement;
