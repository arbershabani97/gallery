import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LargeCard } from "../components";
import { Container } from "../containers";
import { API } from "../services";
import { TPhoto } from "../types";

const Photo = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState<TPhoto>();

    const getPhoto = async (id: string) => {
        try {
            const { data } = await API.get("/photos/" + id);
            setPhoto(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (id) getPhoto(id);
    }, [])

    if (!photo) return null;

    return (
        <Container>
            <LargeCard avgColor={photo.avg_color} image={{ url: photo.src.original, alt: photo.alt }} photographer={{ url: photo.photographer_url, name: photo.photographer }} />
        </Container>
    )
}

export default Photo;