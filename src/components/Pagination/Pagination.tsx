import { FC } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    align-self: flex-end;
`

const Button = styled.button<{ active?: boolean }>`
    border-radius:50%;
    cursor:pointer;
    border: 1px solid ${({ active }) => active ? `rgba(0, 0, 0, 0.5)` : `rgba(0, 0, 0, 0.1)`};
    background:#fff;
    margin:5px;
    height: 40px;
    width: 40px;

    &:hover:not([disabled]) {
        border: 1px solid ${({ active }) => active ? `rgba(0, 0, 0, 0.5)` : `rgba(0, 0, 0, 0.4)`};
    }
    
    &:disabled{
        cursor:default;
    }
`

interface PaginationProps {
    prevPage: null | string;
    currentPage: number;
    nextPage: null | string;
    totalPages: number;
    pageUrl: string;
    apiCall: Function;
}

export const Pagination: FC<PaginationProps> = ({ prevPage, currentPage, nextPage, totalPages, pageUrl, apiCall }) => {
    return (
        <Wrapper>
            <Button onClick={() => apiCall(prevPage)} disabled={!prevPage}>
                {'<'}
            </Button>

            {Array.from(Array(totalPages).keys()).slice(currentPage < 3 ? 1 : currentPage - 2, currentPage + 3).map(i => (
                <Button onClick={() => apiCall(pageUrl + i)} active={currentPage === i}>{i}</Button>
            ))}

            <Button onClick={() => apiCall(nextPage)} disabled={!nextPage}>
                {'>'}
            </Button>
        </Wrapper>
    )
}