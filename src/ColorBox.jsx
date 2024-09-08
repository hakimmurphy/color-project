import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import ColorBoxStyles from './styles/ColorBoxStyle';

const { 
    ColorBoxStyle, 
    BoxContent, 
    CopyText, 
    ColorName, 
    SeeMore, 
    CopyButton, 
    CopyOverlay, 
    CopyMsg 
} = ColorBoxStyles;


function ColorBox( { background, name, moreUrl, showingFullPalette }) {

    const [copied, setCopied] = useState(false)

    const changeCopyState = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <ColorBoxStyle background={background} showingFullPalette={showingFullPalette}>
                <CopyOverlay copied={copied} background={background}/>
                <CopyMsg copied={copied}>
                    <h1>copied!</h1>
                    <CopyText background={background}>{background}</CopyText>
                </CopyMsg>
                <div>
                    <BoxContent>
                        <ColorName background={background}>{name}</ColorName>
                    </BoxContent>
                    <CopyButton background={background}>Copy</CopyButton>
                </div>
                {showingFullPalette && (
                    <Link to={moreUrl} 
                        onClick={e => e.stopPropagation()}
                    >
                        <SeeMore background={background}>
                            MORE
                        </SeeMore>
                    </Link>  
                )} 
            </ColorBoxStyle>
        </CopyToClipboard>
    )
};

export default ColorBox;