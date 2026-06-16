import { useState, useEffect, useCallback } from 'react';
import './RouteMaps.css';

const routeMaps = [
  {
    id: 'full',
    dist: '42.2 KM',
    label: 'Full Marathon',
    image: 'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/6e5d7b42-ad01-4a81-b3ce-6a4b11cef08a.jpeg',
  },
  {
    id: 'half',
    dist: '21.1 KM',
    label: 'Half Marathon',
    image: 'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/6bfb3721-6367-41ca-ba38-0c1ea8da78c3.jpeg',
  },
  {
    id: '10k',
    dist: '10 KM',
    label: 'Road Race',
    image: 'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/99979b17-8b4b-4451-bddd-e3292daa4d21.jpeg',
  },
  {
    id: '5k',
    dist: '5 KM',
    label: 'Timed Challenge',
    image: 'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/a2116e89-12ef-40a3-a96f-bcd318a7578b.jpeg',
  },
  {
    id: '3k',
    dist: '3 KM',
    label: 'Fun Run',
    image: 'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/780aafcd-004d-4366-98e6-899ca718f800.jpeg',
  },
];

const RouteMaps = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => { setIdx(i); setOpen(true); };
  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + routeMaps.length) % routeMaps.length),
    []
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % routeMaps.length),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, prev, next]);

  return (
    <section className="section routemaps-section" id="route-maps">
      <div className="container">
        <div className="routemaps-header routemaps-header--centered">
          <div className="routemaps-eyebrow">June 21, 2026 · Sivagiri, Erode</div>
          <h1 className="routemaps-title">
            Sivagiri <em>Marathon</em> 2026
          </h1>
          <p className="routemaps-sub">
            The 4th edition of Tamil Nadu&apos;s most celebrated runner&apos;s race.
            Pick your distance and tap any card to view the full course.
          </p>
        </div>

        <div className="routemaps-track-wrap">
          <div className="routemaps-track" role="list">
            {routeMaps.map((rm, i) => (
              <button
                type="button"
                key={rm.id}
                className="routemap-card"
                onClick={() => openAt(i)}
                aria-label={`View ${rm.dist} ${rm.label} route map`}
                role="listitem"
                style={{ '--card-index': i }}
              >
                <img
                  src={rm.image}
                  alt={`${rm.dist} ${rm.label} route map`}
                  loading="lazy"
                  draggable="false"
                />
                <span className="routemap-card-overlay" aria-hidden="true">
                  <span className="routemap-card-dist">{rm.dist}</span>
                  <span className="routemap-card-label">{rm.label}</span>
                </span>
                <span className="routemap-card-zoom" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
          <div className="routemaps-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            Scroll horizontally to see all 5 routes
          </div>
        </div>
      </div>

      {open && (
        <div
          className="routemap-lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Route map enlarged view"
        >
          <button
            type="button"
            className="routemap-lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            className="routemap-lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous route map"
          >
            ‹
          </button>
          <div
            className="routemap-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={routeMaps[idx].image}
              alt={`${routeMaps[idx].dist} ${routeMaps[idx].label} route map full size`}
              className="routemap-lightbox-img"
            />
            <div className="routemap-lightbox-caption">
              <span className="routemap-lightbox-dist">{routeMaps[idx].dist}</span>
              <span className="routemap-lightbox-label">{routeMaps[idx].label}</span>
              <span className="routemap-lightbox-count">
                {idx + 1} / {routeMaps.length}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="routemap-lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next route map"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default RouteMaps;
