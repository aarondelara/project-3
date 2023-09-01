import React, { useState } from 'react';

function DataForm() {
    const [dataInput, setDataInput] = useState('');

    const handlePostData = () => {

        const postData = {
            data: dataInput
        };

        sendDataToServer(postData)
            .then(response => {

                console.log('Data posted successfully:', response);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    return (
        <div>
            <h2>Data Form</h2>
            <form>
                <label htmlFor="dataInput">Enter Data:</label>
                <textarea
                    id="dataInput"
                    value={dataInput}
                    onChange={e => setDataInput(e.target.value)}
                />

                <button type="button" onClick={handlePostData}>
                    Post Data
                </button>
            </form>
        </div>
    );
}

export default DataForm;
