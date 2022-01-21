import "../css-components/TextEditor.css";

export const TextEditor = ({ placeHolder, onChange }) => {
  return (
    <textarea
      className="editor"
      placeholder={placeHolder}
      onChange={onChange}
    ></textarea>
  );
};