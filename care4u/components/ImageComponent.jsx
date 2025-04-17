import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

const ImageComponent = ({ blok }) => {
    if (!blok?.image?.filename) {
        return null;
    }

    return (
        <div {...storyblokEditable(blok)} className="storyblok-image">
            <Image
                src={blok.image.filename}
                alt={blok.image.alt || "Storyblok Image"}
                width={blok.image.width || 500}
                height={blok.image.height || 500}
            />
        </div>
    );
};

export default ImageComponent;
