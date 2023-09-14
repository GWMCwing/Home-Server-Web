import { RenderLeafProps } from 'slate-react';
export const Leaf = (props: RenderLeafProps) => {
  return props.leaf.code ? (
    <code
      style={{
        backgroundColor: '#ddd',
      }}
      {...props.attributes}
    >
      {props.children}
    </code>
  ) : (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? 'bold' : 'normal',
      }}
    >
      {props.children}
    </span>
  );
};
