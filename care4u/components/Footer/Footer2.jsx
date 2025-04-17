'use client';

import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Footer2 = ({ blok }) => {
    console.log('Footer blok:', blok);

    return (
        <footer className="mt-10 py-6 border-t border-gray-200" {...storyblokEditable(blok)}>
            <div className="container">
                <div className="footer flex flex-col md:flex-row justify-between gap-10">

                    {/* Logo sectie */}
                    {blok.logo?.filename && (
                        <div className="imgfooter">
                            <Image
                                src={blok.logo.filename}
                                alt={blok.logo.alt || "Logo"}
                                width={150}
                                height={100}
                                className="logo1"
                            />
                        </div>
                    )}

                    {/* Contactinformatie sectie */}
                    <div className="contact-left">
                        <h2 className="font-bold text-lg mb-2">Contact:</h2>
                        <table className="text-sm">
                            <tbody>
                                {/* Telefoonnummer */}
                                {blok.contact?.phone && (
                                    <tr>
                                        <td className="pr-2">
                                            <Image
                                                src="/Images/Phone.png"
                                                alt="Telefoon"
                                                width={20}
                                                height={20}
                                            />
                                        </td>
                                        <td>
                                            <a href={`tel:${blok.contact.phone}`}>{blok.contact.phone}</a>
                                        </td>
                                    </tr>
                                )}

                                {/* E-mail */}
                                {blok.contact?.email && (
                                    <tr>
                                        <td className="pr-2">
                                            <Image
                                                src="/Images/email.png"
                                                alt="Email"
                                                width={20}
                                                height={20}
                                            />
                                        </td>
                                        <td>
                                            <a href={`mailto:${blok.contact.email}`}>
                                                {blok.contact.email}
                                            </a>
                                        </td>
                                    </tr>
                                )}

                                {/* Locatie */}
                                {blok.contact?.location && (
                                    <tr>
                                        <td className="pr-2">
                                            <Image
                                                src="/Images/Home Page.png"
                                                alt="Locatie"
                                                width={20}
                                                height={20}
                                            />
                                        </td>
                                        <td>
                                            <a
                                                href={blok.contact.location.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {blok.contact.location.address}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Openingstijden sectie */}
                    <div className="contact-right">
                        <h2 className="font-bold text-lg mb-2">Openingstijden:</h2>
                        <table className="text-sm">
                            <tbody>
                                {blok.opening_hours?.map((hours, index) => (
                                    <tr key={index}>
                                        <td>{hours.day}</td>
                                        <td className="px-2">{hours.morning}</td>
                                        <td>{hours.evening}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Copyright info */}
                <p className="text-center text-gray-600 mt-6">
                    © 2024 Care4U. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer2;
