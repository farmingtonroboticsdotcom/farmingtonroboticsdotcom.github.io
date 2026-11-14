import React, { useEffect, useState } from 'react';
import './photo-gallery.scss';
import importImage from '@/utils/importImage';

export type Photo = {
    path: string;
    alt?: string;
    title?: string;
    position?: [number, number];
    size?: [number, number];
};

type PhotoGalleryProps = {
    photos: Photo[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
    const [resolvedImages, setResolvedImages] = useState<Record<string, string>>({});
    const [numColumns, setNumColumns] = useState(0);
    const [numRows, setNumRows] = useState(0);

    useEffect(() => {
        const loadImages = async () => {
            const newResolvedImages: Record<string, string> = {};

            await Promise.all(
                photos.map(async (photo) => {
                    await importImage("/src/assets/" + photo.path, (src) => {
                        newResolvedImages[photo.path] = src;
                    });
                })
            );

            setResolvedImages(newResolvedImages);
        };

        loadImages();
    }, [photos]);
    
    useEffect(() => {
        /* find least factor greater than 4
            this function finds the number of columns required to display
            all photos neatly in rows of at least 4 photos each. pictures
            per row can exceed 4, and each row has an equivalent number
            of photos.
        */

        let n = photos.reduce((sum, p) => sum + (p.size ? p.size[0] * p.size[1] : 1), 0); // total area taken up by photos

        // if there are not enough photos to complete one full row, default to 1 row with #photos columns
        if (n < 4) {
            setNumColumns(n);
            setNumRows(1);
            return;
        }
        
        // find least factor greater than 4, if any
        for (let cols = 4; cols <= n; cols++) {
            if (n % cols == 0) { // if this is a neat factor
                setNumColumns(cols);
                setNumRows(n / cols);
                return;
            }
        }

        // if all above fails, its prob a prime and therefore must have 1 row with #photos columns
        setNumColumns(n);
        setNumRows(1);
    }, [photos]);

    return (
        <div className="photo-gallery" style={{"--numColumns": numColumns, "--numRows": numRows} as React.CSSProperties}>
            {(photos.map((photo, index) => {
                const src = resolvedImages[photo.path];

                const [colStart, rowStart] = photo.position ?? [];
                const [colSpan = 1, rowSpan = 1] = photo.size ?? [];

                const style: React.CSSProperties = {
                    gridColumn: colStart ? `${colStart} / span ${colSpan}` : `span ${colSpan}`,
                    gridRow: rowStart ? `${rowStart} / span ${rowSpan}` : `span ${rowSpan}`,
                };

                return (
                    <div className="photo-container" style={style} key={index}>
                        <div key={index} className="photo-item">
                            {src ? (
                                <img src={src} alt={photo.alt || 'Photo'} />
                            ) : (
                                <span className="photo-placeholder">Loading...</span>
                            )}
                            {photo.title && <span className="photo-title">{photo.title}</span>}
                        </div>
                    </div>
                );
            }))}
        </div>
    )
};

export default PhotoGallery;