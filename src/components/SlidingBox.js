import { React, useState, useEffect } from 'react';
import '../css-components/SlidingBox.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Highlighter } from '../components/Highlighter.js';

export default function SlidingBox(props) {
    const [state, setState] = useState({
        template: "",
        text: ""
    });

    const [fade, setFade] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const timer = ms => new Promise(res => setTimeout(res, ms));

    function splitText(text) {
        return text.split(" ")
        .filter(function(word) {return word !== ""})
        .map((word) => word.replace("\n", "\n\n"));
    }

    useEffect(() => {
        let text;
        if(props.animate) {
            text = splitText(props.shortText); //splitText(props.textList[0]);
            let interval, currText = "", currIndex = 0;
            interval = setInterval(() => {
                if(currIndex < text.length) {
                    currText = `${currText} ${text[currIndex]}`;
                    currIndex++;
                    setState({template: props.templateList[0], text: currText});
                }
                else {
                    clearInterval(interval); // must be first
                    setShowButton(true);
                }
            }, 200);
        }
        else {
            text = props.textList[0].replaceAll("\n", "\n\n");
            setState({template: props.templateList[0], text: text});
            setShowButton(true);
        }
    }, [props]);
    
    async function timedAnimation() {
        let interval, text, classIndex, currText = "", currTemplate = props.templateList[0], currIndex = 0;
        setFade(true);
        setShowButton(false);

        /* Foundation */
        await timer(3000);
        setFade(false);
        setState({text: currText});
        if(props.animate) {
            text = splitText(props.textList[1]);
            interval = setInterval(() => {
                if(currIndex < text.length) {
                    currText = `${currText} ${text[currIndex]} `;
                    currIndex++;
                    setState({...state, text: currText});
                }
                else {
                    clearInterval(interval);
                    setFade(true);
                }
            }, 200);
        }
        else {
            text = props.textList[1].replaceAll("\n", "\n\n");
            setState({...state, text: text});
        }

        /* Big */
        await timer(3000);
        classIndex = currTemplate.indexOf(`"`);
        currTemplate = `${currTemplate.slice(0, classIndex + 1)}Bigger${currTemplate.slice(classIndex + 1)}`;
        setFade(false);
        setState({...state, template: currTemplate});
    }

    function renderEverything() {
        let template = state.template;
        let renderedText = "";
        if(template) {
            let templateIndex = template.indexOf(`>`);
            renderedText = `${template.slice(0, templateIndex + 1)}\n${state.text}\n${template.slice(templateIndex + 1)}`;
        }

        let button = showButton ?  
        <Button 
        variant="success"
        onClick={() => timedAnimation()}
        >Yes</Button>
        : "";

        console.log(renderedText);
        return (
            <Row id={fade ? "FadeOut" : ""}>
                <Col md={8}>
                    <div dangerouslySetInnerHTML={{__html: renderedText}}></div>
                    {button}
                </Col>
                <Col md={4}>
                    <Highlighter language="html">
                        {renderedText}
                    </Highlighter>
                </Col>  
            </Row>
        )
    }

    return (
        <div className="SlidingBox">
            <div className="DropShadow">
                <Container>
                    {renderEverything()}
                </Container>
            </div>
        </div>
    );
}