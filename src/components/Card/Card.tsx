import React, { FC } from "react";
import styled from "styled-components";

const CardBox = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    width:calc(25% - 20px);
    height:auto;
    cursor:pointer;
`

interface Image {
    url: string;
    alt: string;
}

interface CardProps {
    onClick: () => void;
    image: Image;
}

export const Card: FC<CardProps> = ({ onClick, image }) => {
    return (
        <CardBox role="button" onClick={onClick} >
            <img src={image.url} alt={image.alt} />
        </CardBox>
    )
}