import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css'

const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik","serif","monospace"]; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

{/* source: https://github.com/zenoamaro/react-quill*/}

export default function TextEditor({ textEditorState, updateTextEditorState }) {
  
  console.log(Font)
  const handleChangeState = (e) => {
    // Request a state update in the parent
    updateTextEditorState(e);
    console.log(e);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    // ['blockquote', 'code-block'],
  
    //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': Font.whitelist }],
    [{ 'align': [] }],
  
    ['clean']  ,                                       // remove formatting button
    ['link'],
    // ['image'],
    // ['video']
  ];

  const modules = {
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: true
    }
  };

  return <ReactQuill placeholder='Enter project description...' theme="snow" modules={modules}  value={textEditorState} onChange={handleChangeState} />;
}