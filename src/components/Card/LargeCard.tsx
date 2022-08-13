import React, { FC } from "react";
import styled from "styled-components";

const CardBox = styled.div<{ avgColor: string }>`
    display:flex;
    flex-direction:column;
    margin:10px;
    justify-content:center;
    align-items:center;
    background-color: ${({ avgColor }) => avgColor}0a;
`

const ImageBox = styled.div`
    height:1029px;
    width:600px;
`

const Image = styled.img`
    height:900px;
    width:100%;
`

const Author = styled.a`
    display:flex;
    align-items: flex-end;
    color: #000;
    text-decoration: none;
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size:20px;
    margin: 20px 0;

    i{
        font-size:14px;
        margin-right:10px;
        line-height:22px;
    }
    
    &:hover{
        color:#05a081;
    }
`

interface Image {
    url: string;
    alt: string;
}
interface Photographer {
    url: string;
    name: string;
}

interface LargeCardProps {
    avgColor: string;
    image: Image;
    photographer: Photographer
}

export const LargeCard: FC<LargeCardProps> = ({ avgColor, image, photographer }) => {
    return (
        <CardBox avgColor={avgColor}>
            <ImageBox>
                <Author target="_blank" href={photographer.url}>
                    <i>Photo taken by: </i> {photographer.name}
                </Author>
                <Image src={image.url} alt={image.alt} />
            </ImageBox>
        </CardBox>
    )
}