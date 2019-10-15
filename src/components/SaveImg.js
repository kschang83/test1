import React from 'react';
import html2canvas from 'html2canvas';

const SaveImg = () => {

    const handleClick = (e) => {
        html2canvas(document.querySelector("#canvas_div2")).then(function (canvas) {
            document.body.appendChild(canvas);
            let myImageURL2233 = canvas.toDataURL();
            console.log(myImageURL2233);
        });
    }

    return (
        <div>
            <button onClick={handleClick}>이미지 캡쳐</button>
        </div>
    )
}

export default SaveImg;