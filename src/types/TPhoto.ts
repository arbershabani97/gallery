export type TPhoto = {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
        original: string;
        large: string;
        large2x: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    }
    alt: string;
}