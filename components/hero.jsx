import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Hero = ({ blok }) => {
    if (!blok) return null;

    console.log('Hero blok:', blok);
    console.log('Background image:', blok.background_image);

    // Ensure the image URL is properly formatted for asset type
    const imageUrl = blok.background_image?.url
        ? blok.background_image.url.startsWith('http')
            ? blok.background_image.url
            : `https:${blok.background_image.url}`
        : null;

    return (
        <div
            {...storyblokEditable(blok)}
            className={`min-h-[500px]
                relative
                flex
                items-end
                justify-center
                p-9
                my-6
                rounded-[5px]
                overflow-hidden ${blok.layout === 'constrained' ? 'container mx-auto' : ''}`}
        >   <div className="background">
                <div className="sectie1">
                    <div className="content1">
                        {blok.headline && (
                            <h1 className="homeblokheadline">{blok.headline}</h1>
                        )}
                        {blok.subheadline && (
                            <h2 className="homebloksubheadline">{blok.subheadline}</h2>
                        )}
                        <button className="buttondefault">
                            {blok.button_text || 'Afspraak maken'}
                        </button>
                        <button className="buttondefault">
                            {blok.button_text2 || 'Afspraak maken'}
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Hero; 