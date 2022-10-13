import React from 'react';

import TextEditor from '../components/TextEditor';

import { ReactComponent as AddCircle} from "./../assets/icons/add-circle.svg"
import './NewPost.css'
function NewPost() {
    return ( 
    <React.Fragment>
        <section id="create-post">
            <header>
                <h1>Create Post</h1>
            </header>
            <div className="buttons">
                <button className='secondary'>Save as Draft</button>
                <button className='primary'>Continue</button>
            </div>
            <div className="topic">
                <span>
                    <AddCircle />
                    <input placeholder="Tell us your article topic..." type="text" />
                </span>
            </div>
            <TextEditor />
            <div className="images">
                <label for="img-cover">
                    Cover image
                </label>
                <input type="file" name="img-cover" id="img-cover" accept="image/*" required/>
                <label for="img-others">
                    Other images
                </label>
                <input type="file" name="img-others" id="img-others" accept="image/*" multiple />
            </div>
        </section>
    </React.Fragment>
    );
}

export default NewPost;