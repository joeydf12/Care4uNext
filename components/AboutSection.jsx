import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import Image from "next/image";

const AboutSection = ({ blok }) => {
    // Debug logs voor alle elementen
    console.log('About blok:', blok);
    console.log('Selfie image:', blok.selfie_image);
    console.log('Selfie image filename:', blok.selfie_image?.filename);
    console.log('Selfie image exists:', !!blok.selfie_image?.filename);

    // Render de rich text zonder extra p tags
    const renderedDescription = blok.description
        ? renderRichText(blok.description, {
            defaultBlokResolver: (name, props) => {
                return `<div>${props.content}</div>`;
            }
        })
        : null;

    return (
        <div {...storyblokEditable(blok)} className="sectie2">
            <div className="container">
                {blok.title && <h2>{blok.title}</h2>}
                {renderedDescription && (
                    <div className="richtext" dangerouslySetInnerHTML={{ __html: renderedDescription }} />
                )}
                {blok.extra_title && <h2>{blok.extra_title}</h2>}
                <div className="line2"></div>
                {blok.checklist && blok.checklist.length > 0 && (
                    <ul>
                        {blok.checklist.map((item, index) => {
                            console.log('Checklist item:', item); // Debug log voor elk checklist item
                            return (
                                <li key={index}>
                                    {item.icon?.filename && (
                                        <Image
                                            className="done"
                                            src={item.icon.filename}
                                            alt="Done"
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                )}
                {blok.button_text && (
                    <button className="buttondefault">
                        {blok.button_text}
                    </button>
                )}
                {blok.button_text2 && (
                    <button className="buttondefault">
                        {blok.button_text}
                    </button>
                )}
            </div>
            {blok.selfie_image?.filename ? (
                <Image
                    className="selfie"
                    src={blok.selfie_image.filename}
                    alt={blok.selfie_image.alt || "selfie"}
                    width={500}
                    height={500}
                />
            ) : null}

        </div>
    );
};

export default AboutSection;
