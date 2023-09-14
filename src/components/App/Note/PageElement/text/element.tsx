import { RenderElementProps } from 'slate-react';
import style from './style.module.css';

const commonStyle = {
  paddingInline: '0.2rem',
};

export const CodeElement = (props: RenderElementProps) => {
  return (
    <pre className={style['input-element']} style={{ ...commonStyle }} {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
export const DefaultElement = (props: RenderElementProps) => {
  return (
    <div
      className={style['input-element']}
      style={{
        ...commonStyle,
      }}
      {...props.attributes}
    >
      {props.children}
    </div>
  );
};
