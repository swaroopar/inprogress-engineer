import React from 'react';

interface ThemeImageProps {
    src: string;
    alt: string;
    className?: string;
}

/**
 * A theme-aware image component that uses CSS filters to adapt to dark mode.
 * This preserves the exact rendering of the original image while inverting colors for dark mode.
 *
 * @example
 * <ThemeImage
 *   src="/img/diagram.png"
 *   alt="Diagram"
 * />
 */
export function ThemeImage({ src, alt, className }: ThemeImageProps): React.JSX.Element {
    return (
        <>
            <div className={`theme-image-wrapper ${className || ''}`}>
                <img src={src} alt={alt} className='theme-image' loading='lazy' />
            </div>
            <style>{`
                .theme-image-wrapper {
                    display: inline-block;
                    max-width: 100%;
                }
                .theme-image {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
                /* Dark mode: invert colors and use blend mode to match page background */
                html[data-theme='dark'] .theme-image-wrapper {
                    /* Docusaurus dark mode background color */
                    background-color: #1b1b1d;
                    border-radius: 0.4rem;
                }
                html[data-theme='dark'] .theme-image {
                    filter: invert(1) hue-rotate(180deg);
                    /* Screen blend mode makes black transparent, letting wrapper background show */
                    mix-blend-mode: screen;
                }
            `}</style>
        </>
    );
}

export default ThemeImage;
