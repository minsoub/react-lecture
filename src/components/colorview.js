import React from 'react';
import Products from './Products'
import Posts from './Posts';
import { Route, Link } from "react-router-dom";
import ColorBox from '../components/colorbox';
import ColorContext, { ColorConsumer, ColorProvider } from '../contexts/color';

const colors = ['red', 'oragne', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const ColorView = () => {
    return (
        <>
            <h1>ColorView Dashboard</h1>
            <ColorProvider>
                <div>
                    <ColorBox />
                </div>

                <h2>색상을 선택하세요</h2>   
                <ColorConsumer>
                    {({actions}) => (
                        <div style={{ display:'flex', padding: '10px'}}>            
                            {colors.map(color => (
                                <div
                                    key={color}
                                    style={{
                                        backgorund: color,
                                        width: '24px',
                                        height: '24px',
                                        cursor: 'pointer',
                                        padding: '5px'
                                    }}
                                    onClick={() => actions.setColor(color)}
                                    onContextMenu={e=>{
                                        e.preventDefault(); // 마우스 오른쪽 버튼 클릭시 메뉴가 뜨는것을 무시함
                                        actions.setSubcolor(color);
                                    }}
                                >{color}</div>
                            ))}
                        </div>
                    )}
                </ColorConsumer>

            </ColorProvider>    
        </>
    )
};

export default ColorView;