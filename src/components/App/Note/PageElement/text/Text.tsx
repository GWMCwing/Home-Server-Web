'use client';
import { Descendant, Editor, Transforms, createEditor } from 'slate';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import type { PageElementText_Text } from '@/database/types/mongodb/note/index';
import PageElement from '../PageElement';
import { useCallback, useState } from 'react';
import { withHistory } from 'slate-history';
import { CustomEditor } from './CustomEditor';
import { CodeElement, DefaultElement } from './element';
import { Leaf } from './leaf';

const renderElementCallback = (props: RenderElementProps) => {
  switch (props.element.type) {
    case 'code':
      return <CodeElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

export default function PageElement_Text({ text }: { text: PageElementText_Text }) {
  const content = text.text;
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: content }],
    },
  ];
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const renderElement = useCallback(renderElementCallback, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);
  return (
    <PageElement>
      {/*  */}
      {/* <div style={{ whiteSpace: 'pre-wrap' }}>{content}</div> */}
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          renderElement={renderElement}
          // Pass in the `renderLeaf` function.
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return;
            }

            switch (event.key) {
              case '`': {
                event.preventDefault();
                CustomEditor.toggleCodeInline(editor);
                break;
              }

              case 'b': {
                event.preventDefault();
                CustomEditor.toggleBoldMark(editor);
                break;
              }
            }
          }}
        />
      </Slate>
    </PageElement>
  );
}
