import React, { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function Editor(){
    const [value,setValue] = useState("")
 
    const handleOnChange = (e,editor) => {
        const data = editor.getData();
        setValue(data);
        //console.log(editor.getData());
    }
    return(
     <div className="App">
     
         <header className="App-header">
            <h1>React Text Editor</h1>
         </header>


        <div class="container">
          <div className="editor">  
           
            <CKEditor 
                editor = {ClassicEditor}
                onChange={handleOnChange}
            />
            </div>
            <div>
                <h1>Texto</h1>
                    {ReactHtmlParser(value)}
                </div>
        </div>
    </div>
        
    )
}

export default Editor;