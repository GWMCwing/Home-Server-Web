import { Editor, Transforms } from 'slate';

export const CustomEditor = {
  isBoldMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeInlineMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.code === true : false;
  },

  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'bold');
    } else {
      Editor.addMark(editor, 'bold', true);
    }
  },

  toggleCodeInline(editor: Editor) {
    const isActive = CustomEditor.isCodeInlineMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'code');
    } else {
      Editor.addMark(editor, 'code', true);
    }
  },
};
