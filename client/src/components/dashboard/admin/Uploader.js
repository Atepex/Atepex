import React, { Component } from 'react';
import Files from 'react-files';
import upImg from '../../../images/upload.png';


class Uploader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            file: ""
        };
    }
    onFilesChange(files) {
        let reader = new FileReader();
        let file = files[0];
        console.log(file);
        reader.readAsBinaryString(file);
        console.log(reader);
        reader.onload = () => {
            var text = reader.result;
            console.log('result + ' + text);
        }
    }
    onFilesError(err) {
        alert("Unable to Upload Invoice");
    }
    render() {
        return (
            <div className="files">
                <Files
                    className="files-dropzone"
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['.pdf']}
                    multiple
                    maxFiles={3}
                    maxFileSize={1000000000}
                    minFileSize={0}
                    clickable
                >
                    <img src={upImg} />
                    Drop invoice file here or click to upload
                </Files>
            </div>
        );
    }
}

export default Uploader;