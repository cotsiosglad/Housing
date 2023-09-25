{/*import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

export default function TextEditor({ textEditorState, updateTextEditorState }) {
  

    const handleChangeState = (e) => {
      // Request a state update in the parent
      //updateTextEditorState(e);
      let currValue = draftToHtml(convertToRaw(e.getCurrentContent()));
      console.log(currValue);
      updateTextEditorState(e);
      //console.log(e);
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
      [{ 'font': [] }],
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
  
    //return <ReactQuill placeholder='Enter project description...' theme="snow" modules={modules}  value={textEditorState} onChange={handleChangeState} />;
    return <Editor
        editorState={textEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={handleChangeState}
        />
  }


// class EditorConvertToHTML extends Component {
//   state = {
//     editorState: EditorState.createEmpty(),
//   }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
//}
*/}