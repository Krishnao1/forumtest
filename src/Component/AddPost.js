import React from 'react'

const TextareaPage = () => {
    return (
        <div className="input-group">
            <h3>Add your question here</h3>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
    )
}

export default TextareaPage;