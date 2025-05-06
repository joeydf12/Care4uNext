import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import Image from "next/image";

const Sectie = ({ blok }) => {
    console.log('Sectie blok:', blok);
    console.log("Description content: ", blok.description);

    return (
        <div {...storyblokEditable(blok)}>
            {blok.section_type === 'hero' && (
                <div className="background">
                    <div className="sectie1">
                        <div className="content1">
                            <h1>{blok.title}</h1>
                            <div className="line"></div>
                            {blok.subtitle_1 && <p>{blok.subtitle_1}</p>}
                            {blok.subtitle_2 && <p>{blok.subtitle_2}</p>}
                            {blok.button_text && (
                                <button className="buttondefault">{blok.button_text}</button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {blok.section_type === 'about' && (
                <div className="sectie2">
                    <div className="container">
                        {blok.title && <h2>{blok.title}</h2>}
                        {blok.description && (
                            <div
                                className="richtext"
                                dangerouslySetInnerHTML={{
                                    __html: renderRichText(blok.description),
                                }}
                            />
                        )}
                        {blok.extra_title && <h2>{blok.extra_title}</h2>}
                        {blok.show_line && <div className="line2"></div>}
                        {blok.checklist && blok.checklist.length > 0 && (
                            <ul>
                                {blok.checklist.map((item, index) => (
                                    <li key={index}>
                                        {item.icon?.filename && (
                                            <Image
                                                className="done"
                                                src={item.icon.filename}
                                                alt={item.icon.alt || "Icon"}
                                                width={20}
                                                height={20}
                                            />
                                        )}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {blok.button_text && (
                            <button className="buttondefault">
                                {blok.button_text}
                            </button>
                        )}
                        {blok.button_text2 && (
                            <button className="buttondefault">
                                {blok.button_text2}
                            </button>
                        )}

                    </div>
                    {console.log('Side image:', blok.side_image)}
                    {console.log('Side image filename:', blok.side_image?.filename)}
                    {console.log('Side image exists:', !!blok.side_image?.filename)}
                    {blok.image?.filename && (
                        <Image
                            className="selfie"
                            src={blok.image.filename}
                            alt={blok.image.alt || 'Afbeelding'}
                            width={500}
                            height={500}
                        />
                    )}
                </div>
            )}

            {blok.section_type === 'social' && (
                <div className="sectie3">
                    <div className="bloks">
                        {blok.social_links?.map((social, index) => (
                            <div key={index} className={`blok${index + 1}`}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <div className="blok11">
                                        {social.icon?.filename && (
                                            <Image
                                                className="socialicon"
                                                src={social.icon.filename}
                                                alt={social.name || "Social icon"}
                                                width={50}
                                                height={50}
                                            />
                                        )}
                                    </div>
                                    <p>{social.name}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sectie;
