import style from './style.module.css';

export default function PageElement({ children }: { children: JSX.Element }) {
  return (
    <div className={`${style['page-element']} ${style['page-element_hoverable']}`}>
      {/*  */}
      {children}
      {/*  */}
    </div>
  );
}
