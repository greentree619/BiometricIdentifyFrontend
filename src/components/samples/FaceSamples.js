import React from 'react';
import poland1 from '../../assets/images/poland1.jpg';
import poland2 from '../../assets/images/poland2.jpg';

import {imageWidth, imageHeight} from '../../config/config';

const FaceSamples = () => {
    return (
        <>
            <img src={poland1} style={{width: imageWidth, height: imageHeight}} alt="Face Sample1" />
            <img src={poland2} style={{width: imageWidth, height: imageHeight}} alt="Face Sample2" />
        </>
    )
}
export default FaceSamples;