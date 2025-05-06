import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

const ImageComponent = ({ blok }) => {
    // Debug logs voor het hele blok en zijn componenten
    console.log('ImageBlok - Complete blok:', blok);
    console.log('ImageBlok - Image object:', blok?.image);
    console.log('ImageBlok - Image filename:', blok?.image?.filename);
    console.log('ImageBlok - Image alt:', blok?.image?.alt);
    console.log('ImageBlok - Image width:', blok?.image?.width);
    console.log('ImageBlok - Image height:', blok?.image?.height);
    console.log('ImageBlok - Title:', blok?.title);

    // Check of de image en filename aanwezig zijn
    if (!blok?.image?.filename) {
        console.log('ImageBlok - No image filename found, returning null');
        return null;  // Als er geen image is of geen filename, retourneer dan null (dus geen afbeelding wordt geladen)
    }

    // Haal de titel van het blok op (gebruik een default als er geen titel is)
    const title = blok.title || "Default Title"; // Als er geen titel is, gebruik "Default Title"
    console.log('ImageBlok - Using title:', title);

    return (
        <div {...storyblokEditable(blok)} className="storyblok-image">
            {/* Render de titel boven de afbeelding */}
            {title && <h2>{title}</h2>}

            <Image
                src={blok.image.filename}
                alt={blok.image.alt || "Storyblok Image"}  // Gebruik een fallback voor alt tekst
                width={blok.image.width || 500}  // Standaard breedte van 500px als de waarde ontbreekt
                height={blok.image.height || 500}  // Standaard hoogte van 500px als de waarde ontbreekt
            />
        </div>
    );
};

export default ImageComponent;
