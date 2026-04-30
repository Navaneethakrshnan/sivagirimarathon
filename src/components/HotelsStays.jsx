import { useState } from 'react';
import './HotelsStays.css';

const hotelsData = {
  sivagiri: [
    {
      id: 's1',
      name: 'SRI AMMAN TOWERS ( A/C and NON A/C Rooms)',
      city: 'Sivagiri, Erode',
      link: 'https://maps.app.goo.gl/rBKAxrp91vQRTS5J8',
    },
    {
      id: 's2',
      name: 'Aadhavan Rooms For Rent',
      city: 'Sivagiri, Erode',
      link: 'https://maps.app.goo.gl/FdS6oZWqYaywVjmo6?g_st=ac',
    },
    {
      id: 's3',
      name: 'Sangamam Mahal',
      city: 'Sivagiri, Erode',
      link: 'https://maps.app.goo.gl/L6o2Gmah77Cc2Jte9?g_st=ac',
    },
    {
      id: 's4',
      name: 'Anu Hospital',
      city: 'Sivagiri, Erode',
      link: 'https://maps.app.goo.gl/zz3B5co4ZSQXkeZcA?g_st=ac',
    },
  ],
  modakurichi: [
    {
      id: 's1',
      name: 'AVS Resort',
      city: 'Velampalayam, Modakurichi Erode',
      link: 'https://maps.app.goo.gl/m6QKXVH8SMve8Nij7?g_st=aw',
    },
  ],
  kodumudi: [
    {
      id: 'k1',
      name: 'Nethaji Lodge, rooms and hotel',
      city: 'Kodumudi, Erode',
      link: 'https://maps.app.goo.gl/QFJnt2vyGgh1hdps5?g_st=aw',
    },
    {
      id: 'k2',
      name: 'Aadvin Hotel',
      city: 'Kodumudi, Erode',
      link: 'https://maps.app.goo.gl/ym5M4K7RaBdwzLnt6?g_st=aw',
    },
    {
      id: 'k3',
      name: 'ROYAL PLAZA ROOMS & LODGE',
      city: 'Kodumudi, Erode',
      link: 'https://maps.app.goo.gl/1EHf9qGUcLUBkYMV6?g_st=aw',
    },
  ],
};

const tabs = [
  { key: 'sivagiri', label: 'Sivagiri', emoji: '🏨' },
  { key: 'modakurichi', label: 'Modakurichi', emoji: '🏨' },
  { key: 'kodumudi', label: 'Kodumudi', emoji: '🏨' },
];

const HotelCard = ({ hotel, index }) => (
  <article
    className="hotel-card"
    style={{ '--card-index': index }}
  >
    <div className="hotel-card-left">
      <div className="hotel-card-number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="hotel-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
    </div>
    <div className="hotel-card-body">
      <h3 className="hotel-card-name">{hotel.name}</h3>
      <div className="hotel-card-city">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {hotel.city}
      </div>
    </div>
    <div className="hotel-card-action">
      <a
        href={hotel.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hotel-view-btn"
        aria-label={`View ${hotel.name} on Maps`}
      >
        <span>View</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>
    </div>
  </article>
);

const HotelsStays = () => {
  const [activeTab, setActiveTab] = useState('sivagiri');

  const hotels = hotelsData[activeTab] || [];

  return (
    <section className="section hotels-section" id="hotels">
      <div className="container">
        {/* ── Header ── */}
        <div className="hotels-header">
          <div className="eyebrow">Accommodation</div>
          <h2 className="section-title">
            Hotels &amp; <em>Stays</em>
          </h2>
          <p className="section-sub">
            Find the perfect place to rest before and after your run. Browse
            recommended stays near the race venues across all three locations.
          </p>
        </div>

        {/* ── Main Layout ── */}
        <div className="hotels-layout">
          {/* ── Left Sidebar: Tabs ── */}
          <aside className="hotels-sidebar">
            <div className="hotels-tabs-label">Select Location</div>
            <nav className="hotels-tabs" role="tablist" aria-label="Hotel locations">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={`hotels-tab${activeTab === tab.key ? ' hotels-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                  id={`hotels-tab-${tab.key}`}
                >
                  <span className="hotels-tab-emoji" aria-hidden="true">{tab.emoji}</span>
                  <span className="hotels-tab-label">{tab.label}</span>
                  {activeTab === tab.key && (
                    <span className="hotels-tab-active-dot" aria-hidden="true" />
                  )}
                </button>
              ))}
            </nav>

            {/* Distance badge */}
            <div className="hotels-sidebar-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Distances are approximate from the race venue
            </div>
          </aside>

          {/* ── Right Panel: Scrollable Cards ── */}
          <div
            className="hotels-cards-panel"
            role="tabpanel"
            aria-labelledby={`hotels-tab-${activeTab}`}
          >
            <div className="hotels-cards-scroll">
              {hotels.map((hotel, i) => (
                <HotelCard key={hotel.id} hotel={hotel} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsStays;
