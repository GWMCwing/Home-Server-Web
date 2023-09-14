import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

type CustomEditor = {
  type: 'paragraph' | 'code';
};
type CustomElement = { type: 'paragraph' | 'code'; children: CustomText[] };
type CustomText = { text: string; bold?: boolean; code?: boolean };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
