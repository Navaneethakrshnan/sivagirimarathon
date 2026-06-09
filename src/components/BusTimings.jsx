import { useState, useEffect } from 'react';
import './BusTimings.css';

const BUS_TIMETABLE_IMG =
  'https://novarace-events-1.s3.ap-south-1.amazonaws.com/email-attachments/super-admin/9957ab50-5724-480d-ae12-530c0e401224.jpeg';

const BusTimings = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <section className="section bus-section" id="buses">
      <div className="container">
        <div className="bus-header">
          <div className="eyebrow">Getting There</div>
          <h2 className="section-title">
            Bus <em> Timings</em>
          </h2>
          <p className="section-sub">
            Bus schedule from Sivagiri to nearby cities. Click the image to enlarge
            and view the full timetable clearly.
          </p>
        </div>

        <div className="bus-image-wrap">
          <button
            type="button"
            className="bus-image-card"
            onClick={() => setOpen(true)}
            aria-label="Open bus timetable in full view"
          >
            <img
              src={BUS_TIMETABLE_IMG}
              alt="Sivagiri bus timetable — departures to nearby cities"
              className="bus-image"
              loading="lazy"
            />

            <span className="bus-image-zoom" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>Click to enlarge</span>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="bus-lightbox-backdrop"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Bus timetable enlarged view"
        >
          <button
            type="button"
            className="bus-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close enlarged view"
          >
            ✕
          </button>
          <div className="bus-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={BUS_TIMETABLE_IMG}
              alt="Sivagiri bus timetable — full size"
              className="bus-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BusTimings;
