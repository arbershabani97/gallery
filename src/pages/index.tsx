import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Card, Pagination } from "../components";
import { Container } from "../containers";
import { API } from "../services"
import { TPhoto } from "../types";
import { INDEX_IMAGES_PER_PAGE } from "../config"

import { staticPagination } from "../static";

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Index = () => {
    const navigate = useNavigate();
    const [pagination, setPagination] = useState(staticPagination)

    const [photos, setPhotos] = useState<TPhoto[]>([]);

    const getPhotos = useCallback(async (url: string) => {
        try {
            const { data } = await API.get(url);

            setPagination({
                totalItems: data.total_results,
                prevPage: data.prev_page,
                nextPage: data.next_page,
                currentPage: data.page,
                totalPages: Math.floor(data.total_results / INDEX_IMAGES_PER_PAGE) + 1
            })
            setPhotos(data.photos);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getPhotos("/curated?per_page=" + INDEX_IMAGES_PER_PAGE);
    }, [])

    const handleClick = (id: number) => navigate('/' + id)

    return (
        <Container>
            <Cards>
                {photos.map(({ src, alt, id }) => (
                    <Card image={{ url: src.portrait, alt }} onClick={() => handleClick(id)} />
                ))}
            </Cards>

            <Pagination
                prevPage={pagination.prevPage}
                nextPage={pagination.nextPage}
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                pageUrl={`/curated?per_page=${INDEX_IMAGES_PER_PAGE}&page=`}
                apiCall={getPhotos}
            />
        </Container>
    );
}

export default Index;