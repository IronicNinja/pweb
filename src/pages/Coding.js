import { React } from 'react';
import '../css-pages/Coding.css';
import SlidingBox from '../components/SlidingBox.js';

export default function Coding() {
    const shortText = `hello this is a test`;
    const text1 = `To many, developing a website can be burdensome, with many difficult steps along the way.
    But to me, each step is an artform, a unique creation. 
    When I start building a website, I’m instantly mesmerized by it.
    Want to join me on adventure through the world of web development?`;
    const text2 = `Let's build our foundation.`;
    const text3 = `Grow BIGGER`;

    const template1 = `<div class=""></div>`;

    let textList = [text1, text2, text3];
    let templateList = [template1];

    return (    
        <div>
            <SlidingBox 
            shortText={shortText}
            textList={textList}
            templateList={templateList}
            animate={true}/>
        </div>
    );
}