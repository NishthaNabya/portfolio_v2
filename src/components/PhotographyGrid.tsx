import { useState, useEffect } from 'react';

interface Photo {
  id: string;
  src: string;
  title: string;
  location: string;
  category: string;
}

const PhotographyGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos: Photo[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      title: 'Mountain Vista',
      location: 'Swiss Alps',
      category: 'Landscape'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop',
      title: 'Forest Path',
      location: 'Pacific Northwest',
      category: 'Nature'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop',
      title: 'Urban Geometry',
      location: 'Tokyo',
      category: 'Architecture'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
      title: 'Minimal Space',
      location: 'Iceland',
      category: 'Minimal'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop',
      title: 'Golden Hour',
      location: 'Santorini',
      category: 'Travel'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop',
      title: 'Lake Mirror',
      location: 'Banff',
      category: 'Landscape'
    }
  ];

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      switch (e.key) {
        case 'Escape':
          setSelectedPhoto(null);
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigatePhoto(1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigatePhoto(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(photos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = (currentIndex + direction + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900">Photography</h3>
          <a 
            href="https://instagram.com/nishtha.nabya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 border border-gray-200 text-gray-600 rounded-lg font-medium hover:border-gray-300 hover:text-gray-900 transition-colors duration-200 bg-white hover:bg-gray-50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm">Instagram</span>
          </a>
        </div>
        <div className="w-16 h-[3px] bg-accent mb-4" />
        <p className="text-gray-600 max-w-2xl">
          I am a freelance photographer learning visual storytelling through my lens
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(photo)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(photo);
              }
            }}
            className="group relative aspect-square overflow-hidden rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-1"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <div className="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{photo.title}</p>
                  <p className="text-xs opacity-75">{photo.location}</p>
                </div>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded text-xs font-medium">
                {photo.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigatePhoto(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
              aria-label="Previous photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigatePhoto(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
              aria-label="Next photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main image */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Photo info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-semibold mb-1">{selectedPhoto.title}</h4>
              <p className="text-sm opacity-75">{selectedPhoto.location} • {selectedPhoto.category}</p>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-4 right-4 text-white text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyGrid;
