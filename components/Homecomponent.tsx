'use client';  // Dit maakt deze component een Client Component

import React from 'react';
import Image from "next/image";
import "/public/globals.css";
import Script from 'next/script';

export default function Home() {
    return (
        <>
            <Script src="/js/custom.js" strategy="afterInteractive" />
            <main className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="background">
                    <div className="sectie1">
                        <div className="content1">
                            <h1>Welkom bij Care4U</h1>
                            <div className="line"></div>
                            <p>Kies voor kwaliteit en ervaring.</p>
                            <p>Je voeten verdienen het!</p>
                            <button className="buttondefault">Afspraak maken</button>
                        </div>
                    </div>
                </div>

                <div className="sectie2">
                    <div className="container">
                        <h2>Over mij</h2>
                        <p>Mijn naam is Nathalie Tiebosch, en ik ben een gediplomeerde en gepassioneerde pedicure.</p>
                        <p>
                            Ik blijf mijn kennis voortdurend uitbreiden en ontwikkelen, zodat ik jou altijd kan helpen met de nieuwste technieken en inzichten. De glimlach en tevredenheid van mijn klanten zijn voor mij het grootste compliment en een prachtige waardering voor mijn werk.
                        </p>
                        <h2>Waarom kiezen voor Care4U?</h2>
                        <div className="line2"></div>
                        <ul>
                            <li>
                                <Image className="done" src="/Images/Done.png" alt="Done" width={20} height={20} />
                                Ik sta voor jou klaar en iedere behandeling wordt afgestemd op je specifieke behoeften.
                            </li>
                            <li>
                                <Image className="done" src="/Images/Done.png" alt="Done" width={20} height={20} />
                                Met mijn 15 jaar ervaring weet ik precies hoe ik jou op de beste manier kan behandelen en voorzien van advies dat bij jou past.
                            </li>
                            <li>
                                <Image className="done" src="/Images/Done.png" alt="Done" width={20} height={20} />
                                Rustige sfeer, mijn salon is ontworpen om je een moment van rust en comfort te bieden.
                            </li>
                            <li>
                                <Image className="done" src="/Images/Done.png" alt="Done" width={20} height={20} />
                                Ik zorg er altijd voor dat jij tevreden de salon uit loopt.
                            </li>
                        </ul>
                        <button className="buttondefault" onClick={() => alert("Neem contact op!")}>
                            Neem nu contact op
                        </button>
                    </div>
                    <Image className="selfie" src="/Images/selfie2.png" alt="selfie" width={500} height={500} />
                </div>

                <div className="sectie3">
                    <div className="bloks">
                        <div className="blok1">
                            <a href="https://wa.me/+31647390869">
                                <div className="blok11">
                                    <Image className="socialicon" src="/Images/whatsapp-svgrepo-com.svg" alt="Whatsapp" width={50} height={50} />
                                </div>
                                <p>Whatsapp</p>
                            </a>
                        </div>

                        <div className="blok2">
                            <a href="mailto:info@pedicuresaloncare4u.nl">
                                <div className="blok11">
                                    <Image className="socialicon" src="/Images/mail-svgrepo-com (1).svg" alt="Mail" width={50} height={50} />
                                </div>
                                <p>Mail</p>
                            </a>
                        </div>
                        <div className="blok3">
                            <a href="https://www.facebook.com/nathalie.tiebosch.7">
                                <div className="blok11">
                                    <Image className="socialicon" src="/Images/facebook-svgrepo-com (2).svg" alt="Facebook" width={50} height={50} />
                                </div>
                                <p>Facebook</p>
                            </a>
                        </div>
                        <div className="blok4">
                            <a href="https://www.instagram.com/pedicuresalon_care4u/">
                                <div className="blok11">
                                    <Image className="socialicon" src="/Images/instagram-svgrepo-com (1).svg" alt="Instagram" width={50} height={50} />
                                </div>
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
