import { useState, useEffect, useCallback } from 'react';
import './BibCollectionPopup.css';

const EXPO_VENUE = 'Kongu Vellalar Wedding Hall, Sivagiri, Erode';
const EXPO_DATE = 'June 20, 2026';
const EXPO_TIME = '10:00 AM – 6:00 PM';
const MAPS_QUERY = encodeURIComponent(EXPO_VENUE);
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAPS_OPEN = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const EXPO_DOCS = [
  'Registration confirmation (email / SMS / WhatsApp)',
  'Valid government photo ID',
  'Medical fitness certificate (42.2K & 21.1K)',
  'Signed indemnity form (42.2K — available at expo)',
  'Proxy letter + ID copy (if collecting for someone else)',
];

const STORAGE_KEY = 'sivagiri-bib-popup-dismissed';

const BibCollectionPopup = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(show, 1800);
    return () => clearTimeout(timer);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EXPO_VENUE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      <button
        type="button"
        className={`bib-fab${open ? ' bib-fab--hidden' : ''}`}
        onClick={show}
        aria-label="Open BIB collection information"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>BIB Collection</span>
      </button>

      {open && (
        <div
          className="bib-popup-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="bib-popup-title"
        >
          <div className="bib-popup" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="bib-popup-close" onClick={close} aria-label="Close">
              ✕
            </button>

            <div className="bib-popup-hero">
              <span className="bib-popup-badge">Race Expo · BIB Collection</span>
              <h2 id="bib-popup-title" className="bib-popup-title">
                Collect Your <em>BIB</em> Here
              </h2>
              <p className="bib-popup-sub">
                Everything you need — venue location, directions, timings & documents — in one place.
              </p>
            </div>

            <div className="bib-popup-body">
              <div className="bib-popup-map-col">
                <div className="bib-popup-map-wrap">
                  <iframe
                    title="Expo venue map — Kongu Vellalar Wedding Hall, Sivagiri"
                    src={MAPS_EMBED}
                    className="bib-popup-map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="bib-popup-map-actions">
                  <a
                    href={MAPS_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bib-popup-btn bib-popup-btn--primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    Get Directions
                  </a>
                  <a
                    href={MAPS_OPEN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bib-popup-btn bib-popup-btn--ghost"
                  >
                    Open in Maps
                  </a>
                  <button
                    type="button"
                    className={`bib-popup-btn bib-popup-btn--ghost${copied ? ' bib-popup-btn--copied' : ''}`}
                    onClick={copyAddress}
                  >
                    {copied ? '✓ Copied!' : 'Copy Address'}
                  </button>
                </div>
              </div>

              <div className="bib-popup-info-col">
                <div className="bib-popup-venue-card">
                  <div className="bib-popup-info-row">
                    <div className="bib-popup-info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="bib-popup-info-label">Venue</div>
                      <div className="bib-popup-info-val">{EXPO_VENUE}</div>
                    </div>
                  </div>

                  <div className="bib-popup-info-row">
                    <div className="bib-popup-info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <div className="bib-popup-info-label">Date & Time</div>
                      <div className="bib-popup-info-val">{EXPO_DATE}</div>
                      <div className="bib-popup-info-sub">{EXPO_TIME}</div>
                    </div>
                  </div>
                </div>

                <div className="bib-popup-alert">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>No BIB distribution on race morning. Full Marathon runners must collect by 6:00 PM on June 20.</span>
                </div>

                <div className="bib-popup-docs">
                  <div className="bib-popup-docs-title">Documents to Bring</div>
                  <ul className="bib-popup-docs-list">
                    {EXPO_DOCS.map((doc) => (
                      <li key={doc}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#expo" className="bib-popup-link-expo" onClick={close}>
                  View full Expo details ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BibCollectionPopup;
