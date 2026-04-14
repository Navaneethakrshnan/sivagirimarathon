import { useState, useEffect, useRef } from 'react';
import './home.css';
import marathonLogo from '../assets/sivagirimarathon2026.png';
import runnersLogo from '../assets/runners-logo.png';
import novaraceLogo from '../assets/novarace-logo.png';
import heroImg from '../assets/hero-bg.png';
import racePhoto1 from '../assets/photos/race-day/photo1.png';
import racePhoto2 from '../assets/photos/race-day/photo2.png';
import racePhoto3 from '../assets/photos/race-day/photo3.png';
import racePhoto4 from '../assets/photos/race-day/photo4.png';
import racePhoto5 from '../assets/photos/race-day/photo5.png';
import racePhoto6 from '../assets/photos/race-day/photo6.png';
import racePhoto7 from '../assets/photos/race-day/photo7.png';
import racePhoto8 from '../assets/photos/race-day/photo8.png';
import racePhoto9 from '../assets/photos/race-day/photo9.png';
import racePhoto10 from '../assets/photos/race-day/photo10.png';
import racePhoto11 from '../assets/photos/race-day/photo11.png';
import racePhoto12 from '../assets/photos/race-day/photo12.png';
import racePhoto13 from '../assets/photos/race-day/photo13.png';
import racePhoto14 from '../assets/photos/race-day/photo14.png';
import racePhoto15 from '../assets/photos/race-day/photo15.png';
import racePhoto16 from '../assets/photos/race-day/photo16.png';
import racePhoto17 from '../assets/photos/race-day/photo17.png';
import racePhoto18 from '../assets/photos/race-day/photo18.png';
import racePhoto20 from '../assets/photos/race-day/photo20.png';
import racePhoto21 from '../assets/photos/race-day/photo21.png';
import racePhoto22 from '../assets/photos/race-day/photo22.png';
import racePhoto23 from '../assets/photos/race-day/photo23.png';
import racePhoto24 from '../assets/photos/race-day/photo24.png';
import racePhoto25 from '../assets/photos/race-day/photo25.png';
import racePhoto26 from '../assets/photos/race-day/photo26.png';
import racePhoto27 from '../assets/photos/race-day/photo27.png';
import racePhoto28 from '../assets/photos/race-day/photo28.png';
import racePhoto29 from '../assets/photos/race-day/photo29.png';
import racePhoto30 from '../assets/photos/race-day/photo30.png';
import racePhoto31 from '../assets/photos/race-day/photo31.png';
import racePhoto33 from '../assets/photos/race-day/photo33.png';
import racePhoto34 from '../assets/photos/race-day/photo34.jpg';
import racePhoto35 from '../assets/photos/race-day/photo35.png';
import racePhoto36 from '../assets/photos/race-day/photo36.png';
import racePhoto37 from '../assets/photos/race-day/photo37.jpg';
import raceDirectorPhoto from '../assets/photos/team/race-director-nithin.png';
import routeDirectorPhoto from '../assets/photos/team/route-director-vivek.png';

const prizeData = {
  full: [
    { icon: '🥇', cls: 'medal-g', pos: '1st', cat: 'Full Marathon Open', men: '₹15,000', women: '₹15,000' },
    { icon: '🥈', cls: 'medal-s', pos: '2nd', cat: 'Full Marathon Open', men: '₹10,000', women: '₹10,000' },
    { icon: '🥉', cls: 'medal-b', pos: '3rd', cat: 'Full Marathon Open', men: '₹7,000', women: '₹7,000' },
  ],
  hm: [
    { icon: '🥇', cls: 'medal-g', pos: '1st', cat: 'Half Marathon Open', men: '₹8,000', women: '₹8,000' },
    { icon: '🥈', cls: 'medal-s', pos: '2nd', cat: 'Half Marathon Open', men: '₹5,000', women: '₹5,000' },
    { icon: '🥉', cls: 'medal-b', pos: '3rd', cat: 'Half Marathon Open', men: '₹3,000', women: '₹3,000' },
  ],
  '10k': [
    { icon: '🥇', cls: 'medal-g', pos: '1st', cat: '10K Open', men: '₹4,000', women: '₹4,000' },
    { icon: '🥈', cls: 'medal-s', pos: '2nd', cat: '10K Open', men: '₹2,500', women: '₹2,500' },
    { icon: '🥉', cls: 'medal-b', pos: '3rd', cat: '10K Open', men: '₹1,500', women: '₹1,500' },
  ],
  age: [
    { icon: '🏅', cls: 'medal-g', pos: '1st', cat: 'Masters 40–49 (HM)', men: '₹3,000', women: '₹3,000' },
    { icon: '🏅', cls: 'medal-g', pos: '1st', cat: 'Veterans 50–59 (HM)', men: '₹3,000', women: '₹3,000' },
    { icon: '🏅', cls: 'medal-g', pos: '1st', cat: 'Super Veterans 60+ (HM)', men: '₹3,000', women: '₹3,000' },
  ],
};

const faqs = [
  {
    q: 'What makes Sivagiri Marathon different from other races?',
    a: 'Sivagiri Marathon is entirely conceived, planned, and executed by runners — the Sivagiri Runners collective. There are no corporate event management teams. Every decision, from course design to finisher medal artwork to post-race food, is made by runners who have run this course themselves. That\'s what "By the Runners, For the Runners" truly means.',
  },
  {
    q: 'Is the 42.2KM full marathon course suitable for first-time marathoners?',
    a: 'The 42.2KM course runs through the scenic routes around Sivagiri with a total elevation gain of approximately 210m. It includes a few gentle undulations — not completely flat, but manageable for trained runners. We recommend having completed at least one half marathon within the last 6 months before registering for the full.',
  },
  {
    q: 'Can I transfer my BIB to another runner?',
    a: 'Bib transfers are permitted until June 1, 2026. To transfer a bib, participants must send a request to sivagirimarathon@gmail.com with the appropriate registration details.',
  },
  {
    q: 'What is the cut-off time for the Full Marathon?',
    a: 'The Full Marathon has a 6-hour cut-off from the 4:00 AM flag off, meaning all runners must finish by 10:00 AM. Sweep vehicles will begin at the 32KM point from 9:00 AM. Runners who cannot maintain the minimum pace will be directed to sweep vehicles for safety.',
  },
  {
    q: 'Will race photos be free? How do I access them?',
    a: 'Yes — all race photos are completely free. Our photography team will cover the start, course, finish line, and medal ceremony. Photos will be available on the NovaRace portal within 7 hours, searchable by your BIB number and selfie . You\'ll receive an email notification when your photos are ready.',
  },
  {
    q: 'Is accommodation available near the race venue?',
    a: 'Accommodation is available near the venue in a wedding hall, equipped with basic toilet facilities for participants.',
  },
  {
    q: 'Any Hotel Near the venue?',
    a: 'Yes, there are a few hotels within 10 km of the venue with good facilities. You can check and book them online.',
  },
];

const teamMembers = [
  {
    photo: raceDirectorPhoto,
    name: 'Nithin',
    designation: 'Race Director',
  },
  {
    photo: routeDirectorPhoto,
    name: 'Vivek',
    designation: 'Route Director',
  },
];

const CheckIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/** Extra hero confetti: star, ribbon, ring, etc. (see `.photo-hero-popper--*` in home.css) */
const HERO_POPPER_DESIGNS = [
  'star', 'diamond', 'ring', 'ribbon', 'streamer', 'burst', 'curl',
  'star', 'diamond', 'ring', 'ribbon', 'streamer', 'burst', 'curl', 'star',
];

/** In dev, use Vite proxy (`vite.config.js`) so the results API is not blocked by CORS. */
const NOVARACE_API_BASE = import.meta.env.DEV ? '/api/novarace' : 'https://api.novarace.in';

function normalizeResultsPayload(data) {
  if (!Array.isArray(data)) return [];
  return data.filter((cat) => {
    const race = (cat?.race ?? '').toString().toUpperCase().trim();
    return !['1KM', '3KM'].includes(race);
  });
}

const Home = () => {
  const [countdown, setCountdown] = useState({ days: '--', hours: '--', mins: '--', secs: '--' });
  const [untilDayEnd, setUntilDayEnd] = useState({ h: '00', m: '00', s: '00' });
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [prizeTab, setPrizeTab] = useState('full');
  const [activeBadge, setActiveBadge] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const itemWidth = carouselRef.current.children[0]?.clientWidth || 300;
          carouselRef.current.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextCarousel = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const itemWidth = carouselRef.current.children[0]?.clientWidth || 300;
        carouselRef.current.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
      }
    }
  };

  /* ── Results ── */
  const [resultsYear, setResultsYear] = useState('2025');

  const [results, setResults] = useState([]);
  const [resultsLoading, setResultsLoading] = useState(true);
  const [resultsTab, setResultsTab] = useState(0);

  const [results2024, setResults2024] = useState([]);
  const [resultsLoading2024, setResultsLoading2024] = useState(true);
  const [resultsTab2024, setResultsTab2024] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = `${NOVARACE_API_BASE}/api/events/getresults-search?event_slug=sivagiri-marathon-2025`;
        const r = await fetch(url);
        const data = r.ok ? await r.json() : null;
        if (!cancelled) setResults(normalizeResultsPayload(data));
      } catch {
        if (!cancelled) setResults([]);
      } finally {
        if (!cancelled) setResultsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = `${NOVARACE_API_BASE}/api/events/getresults-search?event_slug=sivagiri-marathon-2024`;
        const r = await fetch(url);
        const data = r.ok ? await r.json() : null;
        if (!cancelled) setResults2024(normalizeResultsPayload(data));
      } catch {
        if (!cancelled) setResults2024([]);
      } finally {
        if (!cancelled) setResultsLoading2024(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const getTop3 = (data, gender) =>
    data.filter(r => r.Gender === gender).slice(0, 3);

  const medalLabel = ['🥇 1st', '🥈 2nd', '🥉 3rd'];

  useEffect(() => {
    const calc = () => {
      const raceDate = new Date('2026-06-21T04:30:00+05:30');
      const diff = raceDate - new Date();
      if (diff <= 0) { setCountdown({ days: '00', hours: '00', mins: '00', secs: '00' }); return; }
      setCountdown({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      if (end <= now) end.setDate(end.getDate() + 1);
      const diff = end - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setUntilDayEnd({
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? -1 : i);

  const elevationHeights = [25, 40, 65, 80, 90, 75, 85, 70, 55, 60, 45, 30, 20];

  const entitlements = [
    'Race BIB with Name Print', 'RFID Timing Chip', 'Edition Finisher Medal',
    'Dry-fit Race T-Shirt', 'Aid Station Hydration', 'Digital E-Certificate',
    'Goodie Bag', 'Professional Race Photos', 'Medical Support on Course',
    'Post-Race Refreshments', 'Live Tracking Link (42.2KM)', 'Pacer Support Available',
  ];

  const highlights = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
      label: 'Finisher Medal',
      sub: 'A custom-crafted zinc alloy commemorative piece for every finisher who crosses the line.'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="8"></circle>
          <path d="M12 9v4l2 2"></path>
          <line x1="12" y1="2" x2="12" y2="4"></line>
          <line x1="8" y1="2" x2="16" y2="2"></line>
        </svg>
      ),
      label: 'Chip Timed',
      sub: 'RFID high-precision timing chips ensuring your split seconds are recorded accurately.'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a8.5 8.5 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
        </svg>
      ),
      label: 'Premium Tee',
      sub: 'Moisture-wicking, high-performance athletic fabric designed for marathon heat.'
    },
    {
      icon: (
        <svg fill="var(--green)" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      label: 'Hydration',
      sub: 'Electrolytes and water stations positioned every 2.5km for optimal recovery.'
    },
  ];

  const racePhotos = [
    racePhoto1, racePhoto2, racePhoto3, racePhoto4, racePhoto5,
    racePhoto6, racePhoto7, racePhoto8, racePhoto9, racePhoto10,
    racePhoto11, racePhoto12, racePhoto13, racePhoto14, racePhoto15,
    racePhoto16, racePhoto17, racePhoto18, racePhoto20,
    racePhoto21, racePhoto22, racePhoto23, racePhoto24, racePhoto25,
    racePhoto26, racePhoto27, racePhoto28, racePhoto29, racePhoto30,
    racePhoto31, racePhoto33, racePhoto33, racePhoto34, racePhoto35, racePhoto36, racePhoto37,
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const openLightbox = (i) => { setLightboxIdx(i); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevPhoto = () => setLightboxIdx((i) => (i - 1 + racePhotos.length) % racePhotos.length);
  const nextPhoto = () => setLightboxIdx((i) => (i + 1) % racePhotos.length);

  const scheduleRows = [
    { activity: 'Early Bird Registration Closes', date: 'Apr 30, 2026', time: '11:59 PM', pill: 'pill-warn', pillText: 'Closing Soon' },
    { activity: 'General Registration Closes', date: 'Jun 10, 2026', time: '11:59 PM', pill: 'pill-green', pillText: 'Open' },
    { activity: 'Race Expo — Day (BIB Collection)', date: 'Jun 20, 2026', time: '10:00 AM – 7:00 PM', pill: 'pill-green', pillText: 'Open' },
    { activity: 'Full Marathon Flag Off', date: 'Jun 21, 2026', time: '4:00 AM', pill: 'pill-warn', pillText: 'Race Day' },
    { activity: 'Half Marathon Flag Off', date: 'Jun 21, 2026', time: '5:00 AM', pill: 'pill-warn', pillText: 'Race Day' },
    { activity: '10K Timed Run Flag Off', date: 'Jun 21, 2026', time: '6.00 AM', pill: 'pill-warn', pillText: 'Race Day' },
    { activity: '5K Timed Run Flag Off', date: 'Jun 21, 2026', time: '6:20 AM', pill: 'pill-warn', pillText: 'Race Day' },
    { activity: 'Prize Distribution & Closing Ceremony', date: 'Jun 21, 2026', time: '10:00 AM onwards', pill: 'pill-blue', pillText: 'Post Race' },
  ];

  return (
    <>
      {/* ── ALERT BANNER ── */}
      {/* <div className="alert-banner">
        <div className="alert-banner-dot"></div>
        <span className="alert-banner-text">Early Bird Closes Soon · Save ₹200 on all categories</span>
        <span className="alert-banner-sub"> · Registration open for all 5 distances including the Full 42.2KM</span>
      </div> */}

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={marathonLogo} alt="Sivagiri Marathon" className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#expo">Expo</a></li>
          <li><a href="#results">Prevoius Year Results</a></li>
          {/* <li><a href="#prizes">Prizes</a></li> */}
          <li><a href="#faqs">FAQs</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={runnersLogo} alt="Sivagiri Runners" className="nav-runners-logo" />
        </div>
      </nav>

      {/* ── PHOTO HERO ── */}
      <section className="photo-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="photo-hero-overlay" aria-hidden="true" />
        <div className="photo-hero-confetti" aria-hidden="true">
          {Array.from({ length: 40 }, (_, i) => (
            <span
              key={i}
              className={`photo-hero-confetti-piece${i % 4 === 0 ? ' photo-hero-confetti-piece--round' : ''}`}
              style={{
                '--ch-left': `${(i * 19 + 3) % 94}%`,
                '--ch-delay': `${(i * 0.13) % 4.5}s`,
                '--ch-duration': `${7.5 + (i % 8) * 0.65}s`,
                '--ch-hue': `${(i * 41) % 360}`,
                '--ch-drift': `${-36 + (i % 9) * 9}px`,
                '--ch-len': `${10 + (i % 6)}px`,
              }}
            />
          ))}
          {HERO_POPPER_DESIGNS.map((design, i) => (
            <span
              key={`hero-popper-${design}-${i}`}
              className={`photo-hero-confetti-piece photo-hero-popper photo-hero-popper--${design}`}
              style={{
                '--ch-left': `${(i * 23 + 11) % 91}%`,
                '--ch-delay': `${(i * 0.29) % 4.2}s`,
                '--ch-duration': `${8.5 + (i % 6) * 0.55}s`,
                '--ch-hue': `${(i * 47 + 18) % 360}`,
                '--ch-drift': `${-32 + (i % 8) * 9}px`,
                '--ch-len': `${13 + (i % 6)}px`,
              }}
            />
          ))}
        </div>
        <div className="photo-hero-inner">
          <div className="photo-hero-badge">June 21, 2026 &bull; Sivagiri, Erode</div>
          <div className="photo-hero-title-block">
            <span className="photo-hero-line1">Sivagiri</span>
            <span className="photo-hero-line2">
              <span className="ph-green">Marathon</span>{' '}
              <span className="ph-gold">2026</span>
            </span>
          </div>
          <p className="photo-hero-sub">
            <span className="photo-hero-sub-line">Join the 4th edition of the most celebrated runner&apos;s race in Tamil Nadu.</span>
            <span className="photo-hero-sub-line">Push your limits along the scenic routes of Sivagiri.</span>
          </p>
          <div className="photo-hero-ctas">
            <a href="https://www.novarace.in/events/sivagiri-marathon-2026" className="btn photo-hero-btn-primary">Register Now</a>
          </div>
          {/* <div className="photo-hero-daytimer" aria-live="polite">
            <span className="photo-hero-daytimer-label">Registration Opens at 12:00:00 AM</span>
            <span className="photo-hero-daytimer-clock" title="Hours : Minutes : Seconds remaining today">
              <span className="photo-hero-daytimer-seg">{untilDayEnd.h}</span>
              <span className="photo-hero-daytimer-sep">:</span>
              <span className="photo-hero-daytimer-seg">{untilDayEnd.m}</span>
              <span className="photo-hero-daytimer-sep">:</span>
              <span className="photo-hero-daytimer-seg">{untilDayEnd.s}</span>
            </span>
          </div> */}
        </div>
      </section>

      {/* ── FOUNDER STRIP ── */}
      <div className="founder-strip">
        <div className="founder-strip-inner">
          <span className="founder-text">Sivagiri Runners</span>
          <div className="founder-divider"></div>
          <span className="founder-quote">"A race born from passion, built by the community, run for the love of the sport."</span>
          <span className="founder-attr">— Founders, Sivagiri Runners</span>
        </div>
      </div>

      {/* ── 2. HIGHLIGHTS ── */}
      <section className="section" id="highlights">
        <div className="container">
          <div className="highlights-header-row">
            <div>
              <div className="eyebrow">What You Get</div>
              <h2 className="section-title">Race Day <em>Highlights</em></h2>
              <p className="section-sub">Everything that makes Sivagiri Marathon the most awaited runner's celebration in Tamil Nadu.</p>
            </div>
            <button className="highlights-arrow-btn" onClick={handleNextCarousel} aria-label="Next Highlight">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div className="highlights-carousel-wrapper">
            <div className="highlights-carousel" ref={carouselRef}>
              {[...highlights, ...highlights].map(({ icon, label, sub }, idx) => (
                <div className="highlight-item" key={`${label}-${idx}`}>
                  <div className="hi-icon-wrapper">
                    <span className="hi-icon">{icon}</span>
                  </div>
                  <span className="hi-label">{label}</span>
                  <span className="hi-sub">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="eyebrow">Our Story</div>
          <div className="about-layout">
            <div className="about-text">
              <h2 className="section-title">About <em>Sivagiri Marathon</em></h2>
              <p style={{ marginTop: '24px' }}>
                Sivagiri Marathon is more than just a race — it is a movement driven by passion, community, and purpose. Conceptualized and promoted by {' '}
                <strong style={{ color: 'var(--cream)' }}>Sivagiri Runners, </strong> the event proudly stands by its philosophy:
              </p>
              <b>“By the Runners, For the Runners.”</b>
              <br />
              <p>At Sivagiri Marathon, runners experience the best of both worlds — the <strong style={{ color: 'var(--cream)' }}>raw beauty of village landscapes</strong> combined with the <strong style={{ color: 'var(--cream)' }}>professional standards of a city marathon.</strong></p>

              <div className="about-pullquote">
                <div className="about-pullquote-text">"We didn't build this for sponsors or glory — we built it because we wanted a race we'd love to run ourselves."</div>
                <div className="about-pullquote-attr">— Sivagiri Runners</div>
              </div>

              <p>From scenic routes and close-knit community support to well-organized race execution and thoughtful runner amenities, every detail is crafted to ensure participants enjoy the same excitement, pride, and perks typically found in big-city events.</p>

              <p>Since its inception in 2022, the event has grown steadily and now proudly enters its  <strong style={{ color: 'var(--cream)' }}>4th edition, </strong> with each year bringing<strong style={{ color: 'var(--cream)' }}>new enhancements, better experiences, and stronger community participation.</strong></p>

              <div className="about-stats">
                {[
                  { num: '4th', label: 'Edition, 2026' },
                  { num: '4', label: 'Race Distances' },
                  { num: '1.5K+', label: 'Expected Runners' },
                  { num: '100%', label: 'Runner-organised' },
                ].map(({ num, label }) => (
                  <div className="about-stat" key={label}>
                    <div className="about-stat-num">{num}</div>
                    <div className="about-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-visual about-quad">
              <div className="about-img about-img-1">
                <img src={racePhoto34} alt="Race Day" />
              </div>
              <div className="about-img about-img-2">
                <img src={racePhoto35} alt="Start Line" />
              </div>
              <div className="about-img about-img-3">
                <img src={racePhoto36} alt="Volunteers" />
              </div>
              <div className="about-img about-img-4">
                <img src={racePhoto37} alt="Finish Line" />
              </div>
              <div className="about-badge">
                <div className="about-badge-num">4</div>
                <div className="about-badge-text">Years of<br />Running</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 4. RACE CATEGORIES ── */}
      <section className="section race-cats-bg" id="categories">
        <div className="container">
          <div className="cats-intro">
            <div>
              <div className="eyebrow">Find Your Distance</div>
              <h2 className="section-title">Race <em>Categories</em></h2>
              <p className="section-sub">Four distances for every kind of runner — from first-timers to seasoned marathoners.</p>
            </div>
          </div>
          <div className="cats-grid">
            {[
              { dist: '42.2', unit: 'KM', name: 'Full Marathon', flagship: true, start: '4:00 AM', elig: '18+ Yrs', cutoff: '6 Hours', price: '₹799', originalPrice: '₹999', theme: 'cat-theme-dark' },
              { dist: '21.1', unit: 'KM', name: 'Half Marathon', flagship: false, start: '5:00 AM', elig: '18+ Yrs', cutoff: '4 Hours', price: '₹699', originalPrice: '₹899', theme: 'cat-theme-green' },
              { dist: '10', unit: 'KM', name: 'Road Race', flagship: false, start: '6:00 AM', elig: '10+ Yrs', cutoff: '90 Mins', price: '₹599', originalPrice: '₹799', theme: 'cat-theme-gold' },
              { dist: '5', unit: 'KM', name: 'Timed Challenge', flagship: false, start: '6:20 AM', elig: '8+ Yrs', cutoff: '75 Mins', price: '₹499', originalPrice: '₹699', theme: 'cat-theme-grey' },
            ].map((cat) => (
              <div className={`cat-card ${cat.theme}`} key={cat.name}>
                <div className="cat-card-top">
                  {cat.flagship && <span className="flagship-tag">Flagship</span>}
                  <div className="cat-dist">{cat.dist}<span>{cat.unit}</span></div>
                  <div className="cat-name">{cat.name}</div>
                </div>
                <div className="cat-body">
                  <div className="cat-row"><span className="cat-row-l">Start Time</span><span className="cat-row-r">{cat.start}</span></div>
                  <div className="cat-row"><span className="cat-row-l">Eligibility</span><span className="cat-row-r">{cat.elig}</span></div>
                  <div className="cat-row"><span className="cat-row-l">Cut-off</span><span className="cat-row-r">{cat.cutoff}</span></div>
                </div>
                <div className="cat-footer">
                  <div className="cat-price-block">
                    <span className="cat-early-bird">Early Bird</span>
                    <div className="cat-price-row">
                      <span className="cat-original-price">{cat.originalPrice}</span>
                      <span className="cat-price">{cat.price}</span>
                    </div>
                  </div>
                  <a href="https://www.novarace.in/events/sivagiri-marathon-2026" className="cat-btn">Register Now →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM ── */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="eyebrow">The People</div>
          <h2 className="section-title">Meet Our <em>Team</em></h2>
          <div className="team-split">
            {teamMembers.slice(0, 2).map(({ photo, name, designation, bio }, i) => (
              <article className="team-card" key={`team-${i}`}>
                <div className="team-photo-wrap">
                  <img src={photo} alt={`${name}, ${designation}`} className="team-photo" />
                </div>
                <h3 className="team-name">{name}</h3>
                <p className="team-designation">{designation}</p>
                <p className="team-bio">{bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COURSE MAP ── */}
      {/* <section className="section" id="map">
        <div className="container">
          <div className="eyebrow">The Route</div>
          <div className="sec-header">
            <div>
              <h2 className="section-title">Race Course <em>Map</em></h2>
              <p className="section-sub">Through the misty hills and scenic trails of Sivagiri — a course that rewards every step.</p>
            </div>
            <a href="#" className="btn btn-ghost" style={{ flexShrink: 0 }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download GPX
            </a>
          </div>
          <div className="course-wrap">
            <div className="map-box">
              <div className="map-inner">
                <span className="map-icon">🏔️</span>
                <span className="map-label">Sivagiri Marathon Course</span>
                <span className="map-sub">Google Maps embed · Start at Sivagiri Mutt Grounds → Hills Loop → Riverside stretch → Finish Line</span>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ marginTop: '10px', padding: '10px 20px', fontSize: '.78rem' }}>Open in Google Maps →</a>
              </div>
            </div>
            <div className="course-sidebar">
              {[
                { label: 'Start / Finish',   val: 'Sivagiri Mutt Grounds, Sivagiri' },
                { label: 'Course Type',      val: 'Rolling Hills · Paved Road' },
                { label: 'Aid Stations',     val: 'Every 2.5 KM' },
                { label: 'Timing Points',    val: 'Start · 10K · 21.1KM · 32K · Finish' },
              ].map(({ label, val }) => (
                <div className="crs-card" key={label}>
                  <div className="crs-card-label">{label}</div>
                  <div className="crs-card-val">{val}</div>
                </div>
              ))}
              <div className="crs-card">
                <div className="crs-card-label">Terrain Elevation Profile</div>
                <div className="elevation-chart">
                  {elevationHeights.map((h, i) => (
                    <div className="el-col" key={i} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.52rem', color: 'var(--muted)', marginTop: '7px' }}>
                  Total Gain ≈ 210m · Rolling terrain
                </div>
              </div>
              <a href="#" className="btn btn-ghost" style={{ textAlign: 'center', justifyContent: 'center' }}>View on Strava →</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── 6. SCHEDULE ── */}
      <section className="section schedule-bg" id="schedule">
        <div className="container">
          <div className="eyebrow">Plan Your Race Week</div>
          <h2 className="section-title">Race <em>Schedule</em></h2>
          <p className="section-sub">Key dates and timings to keep you race-ready and on track.</p>
          <div className="schedule-table-wrap">
            <table className="sched-table">
              <thead>
                <tr>
                  <th style={{ fontSize: '0.85rem' }}>Activity</th><th style={{ fontSize: '0.85rem' }}>Date</th><th style={{ fontSize: '0.85rem' }}>Time</th><th style={{ fontSize: '0.85rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.activity}>
                    <td><span className="sched-activity">{row.activity}</span></td>
                    <td className="sched-date">{row.date}</td>
                    <td className="sched-time">{row.time}</td>
                    <td><span className={`status-pill ${row.pill}`}>{row.pillText}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7. EXPO ── */}
      <section className="section expo-bg" id="expo">
        <div className="container" style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ color: '#b9ccaf', letterSpacing: '0.15em', fontWeight: 700 }}>| BIB COLLECTION</div>
          <h2 className="section-title">Race <em>Expo</em></h2>
          <p className="section-sub" style={{ maxWidth: '440px', fontSize: '.95rem', color: '#4a4a4a', lineHeight: 1.6, marginTop: '20px' }}>
            Collect your race kit, meet fellow runners, and experience the pre-race buzz at the Sivagiri Marathon Expo.
          </p>

          <div className="expo-grid">
            {/* Left Card: Light Theme */}
            <div className="expo-card expo-card-light">
              <div className="expo-card-title">Expo <span className="expo-venue-hl">Venue</span> &amp; Dates</div>

              <div className="expo-row">
                <div className="expo-icon-box">

                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="expo-row-label">VENUE</div>
                  <div className="expo-row-val" style={{ fontWeight: 600 }}>Kongu Vellalar Wedding Hall,<br />Sivagiri Erode</div>
                </div>
              </div>

              <div className="expo-row">
                <div className="expo-icon-box">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <div className="expo-row-label">DATES</div>
                  <div className="expo-row-val" style={{ fontWeight: 600 }}>June 20, 2026<br /><span style={{ fontWeight: 400, color: '#666', fontSize: '.85rem' }}>10:00 AM – 7:00 PM</span></div>
                </div>
              </div>

              <div className="expo-important-note">
                <div className="expo-note-icon">
                  <span style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>i</span>
                </div>
                <div className="expo-note-content">
                  <div className="expo-note-title">IMPORTANT NOTE</div>
                  <div className="expo-note-text">
                    BIB must be collected at the Expo. No race-day BIB collection. Full Marathon participants must collect by 6:00 PM on June 20.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Dark Theme */}
            <div className="expo-card expo-card-dark">
              <div className="expo-dark-top">
                <div className="expo-card-title expo-dark-title">Documents <em>Required</em></div>
                <div className="expo-folder-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
              </div>

              <div className="expo-divider">
                <span>BRING THE FOLLOWING TO COLLECT YOUR BIB</span>
              </div>

              <ul className="expo-docs-dark">
                <li><span>Registration confirmation email / SMS / WhatsApp</span></li>
                <li><span>Valid government photo ID (Aadhaar / Driving Licence / Passport)</span></li>
                <li><span>Medical fitness certificate (Full Marathon &amp; Half Marathon)</span></li>
                <li><span>Signed indemnity form <span className="muted-text">(available at expo for 42.2KM runners)</span></span></li>
                <li><span>Proxy authorization letter + your photo ID copy <span className="muted-text">(if collecting for another runner)</span></span></li>
              </ul>

              <div className="expo-alert-banner">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>BIBs will not be distributed on race morning – plan ahead!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RUNNER ARMORY ── */}
      <section className="section armory-bg" id="entitlements">
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '60px' }}>

          <div className="armory-header">
            <div className="armory-eyebrow">THE KIT LIST</div>
            <div className="armory-title-wrap">
              <h2 className="section-title">RUNNER <br /><em>ARMORY</em></h2>
              <p className="armory-sub">
                A performance package engineered for <br />those who refuse to stand still.
              </p>
            </div>
          </div>

          <div className="armory-grid">
            {/* 01 */}
            <div className="armory-card theme-light-green style-normal">
              <div className="armory-bg-number">01</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                  <div className="armory-tag">ELITE TECH</div>
                </div>
                <div className="armory-card-title">PERSONALIZED<br />RACE BIB</div>
              </div>
            </div>

            {/* 02 */}
            <div className="armory-card theme-dark-gold style-slant offset-mid">
              <div className="armory-bg-number">02</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div>
                  <div className="armory-tag">PRECISION</div>
                </div>
                <div className="armory-card-title">RFID TIMING<br />CHIPSET</div>
              </div>
            </div>

            {/* 03 */}
            <div className="armory-card theme-light-gold style-normal offset-high">
              <div className="armory-bg-number">03</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></div>
                  <div className="armory-tag">ICONIC</div>
                </div>
                <div className="armory-card-title">EDITION<br />FINISHER MEDAL</div>
              </div>
            </div>

            {/* 04 */}
            <div className="armory-card theme-grey-green style-normal">
              <div className="armory-bg-number">04</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.38 3.46L16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg></div>
                  <div className="armory-tag">KINETIC WEAR</div>
                </div>
                <div className="armory-card-title">DRY-FIT<br />RACE TEE</div>
              </div>
            </div>

            {/* 05 */}
            <div className="armory-card theme-light-black style-normal offset-mid">
              <div className="armory-bg-number">05</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><path d="M16 8V6a4 4 0 0 0-8 0v2"></path></svg></div>
                  <div className="armory-tag">SWAG</div>
                </div>
                <div className="armory-card-title">PREMIUM<br />GOODIE BAG</div>
              </div>
            </div>

            {/* 06 */}
            <div className="armory-card theme-green-green style-slant offset-high">
              <div className="armory-bg-number">06</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
                  <div className="armory-tag">MEMORIES</div>
                </div>
                <div className="armory-card-title">PRO RACE<br />PHOTOGRAPHS</div>
              </div>
            </div>

            {/* 07 */}
            <div className="armory-card theme-light-green style-normal">
              <div className="armory-bg-number">07</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
                  <div className="armory-tag">FUEL</div>
                </div>
                <div className="armory-card-title">AID STATION<br />HYDRATION</div>
              </div>
            </div>

            {/* 08 */}
            <div className="armory-card theme-dark-gold style-slant offset-mid">
              <div className="armory-bg-number">08</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
                  <div className="armory-tag">ACHIEVEMENT</div>
                </div>
                <div className="armory-card-title">DIGITAL<br />E-CERTIFICATE</div>
              </div>
            </div>

            {/* 09 */}
            <div className="armory-card theme-light-gold style-normal offset-high">
              <div className="armory-bg-number">09</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
                  <div className="armory-tag">SUPPORT</div>
                </div>
                <div className="armory-card-title">MEDICAL SUPPORT<br />ON COURSE</div>
              </div>
            </div>

            {/* 10 */}
            <div className="armory-card theme-grey-green style-normal">
              <div className="armory-bg-number">10</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg></div>
                  <div className="armory-tag">RECOVERY</div>
                </div>
                <div className="armory-card-title">POST-RACE<br />REFRESHMENTS</div>
              </div>
            </div>

            {/* 11 */}
            <div className="armory-card theme-light-black style-normal offset-mid">
              <div className="armory-bg-number">11</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></div>
                  <div className="armory-tag">TRACKING</div>
                </div>
                <div className="armory-card-title">LIVE TRACKING<br />LINK (42.2KM)</div>
              </div>
            </div>

            {/* 12 */}
            <div className="armory-card theme-green-green style-slant offset-high">
              <div className="armory-bg-number">12</div>
              <div className="armory-card-inner">
                <div className="armory-top-row">
                  <div className="armory-icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                  <div className="armory-tag">PACING</div>
                </div>
                <div className="armory-card-title">PACER SUPPORT<br />AVAILABLE</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 9. PRIZES ── */}
      {/*  <section className="section" id="prizes">
        <div className="container">
          <div className="eyebrow">Compete &amp; Win</div>
          <h2 className="section-title">Prizes &amp; <em>Rewards</em></h2>
          <p className="section-sub">Run for love, compete for glory. Cash prizes and trophies across all major categories.</p>

          <div className="prizes-tabs">
            {[
              { key: 'full', label: 'Full Marathon' },
              { key: 'hm',   label: 'Half Marathon' },
              { key: '10k',  label: '10K' },
              { key: 'age',  label: 'Age Category' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`prize-tab${prizeTab === key ? ' active' : ''}`}
                onClick={() => setPrizeTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="prizes-table-wrap">
            <table className="prizes-table">
              <thead>
                <tr><th>Rank</th><th>Category</th><th>Men</th><th>Women</th></tr>
              </thead>
              <tbody>
                {prizeData[prizeTab].map((r, i) => (
                  <tr key={i}>
                    <td>
                      <div className="prize-rank-cell">
                        <div className={`prize-medal-icon ${r.cls}`}>{r.icon}</div>
                        <span className="prize-pos">{r.pos}</span>
                      </div>
                    </td>
                    <td>{r.cat}</td>
                    <td className="prize-amt">{r.men}</td>
                    <td className="prize-amt">{r.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: '12px' }}>
            * Prize winners must present valid ID at distribution. Results subject to timing verification by NovaRace.
          </p>
        </div>
      </section>

      {/* ── 10. SPONSORS ── */}
      <section className="section sponsors-bg" id="sponsors">
        <div className="container">
          <div className="eyebrow">Partners &amp; Supporters</div>
          <h2 className="section-title">Our <em>Sponsors</em></h2>
          <p className="section-sub">Proud organisations that believe in the spirit of community running.</p>

          <div className="owned-by-bar">
            <span className="owned-by-label">Owned &amp; Organised by</span>
            <img src={runnersLogo} alt="Sivagiri Runners" className="owned-by-logo" />
          </div>

          <div className="race-partner-bar">
            <span className="race-partner-label">Race Technology Partner</span>
            <a href="https://www.novarace.in" target="_blank" rel="noopener noreferrer" className="race-partner-link">
              <img src={novaraceLogo} alt="NovaRace" className="race-partner-logo" />
            </a>
          </div>

          {/* <div className="sponsors-tier">
            {[
              { tier: 'Title Sponsor',        items: [{ name: 'Sivagiri Heritage Trust', extra: 'title-sp' }] },
              { tier: 'Powered By',           items: [{ name: 'Sivagiri Sports Council' }, { name: 'RunGear India' }] },
              { tier: 'Associate Sponsors',   items: [{ name: 'SivagiriHotels' }, { name: 'Coconut Valley Resort' }, { name: 'HealthFirst Clinic' }, { name: 'Sivagiri Tourism' }] },
              { tier: 'Community Partners',   items: [{ name: 'Sivagiri Runners Club' }, { name: 'Sivagiri Running Community' }, { name: 'Trail Runners Sivagiri' }] },
              { tier: 'Race Technology Partner', items: [{ name: 'NovaRace', extra: 'novarace' }] },
            ].map(({ tier, items }) => (
              <div key={tier}>
                <div className="tier-label">{tier}</div>
                <div className="sponsor-logos">
                  {items.map(({ name, extra }) => (
                    <div className={`sp-item${extra ? ` ${extra}` : ''}`} key={name}>
                      <span className="sp-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── 11. RESULTS ── */}
      <section className="section results-bg" id="results">
        <div className="container">
          <div className="eyebrow">Sivagiri Marathon</div>
          <h2 className="section-title">Race <em>Results</em></h2>
          <p className="section-sub">Top 3 podium finishers by category and gender.</p>

          {/* Year switcher */}
          <div className="results-year-switch">
            {['2025', '2024'].map(yr => (
              <button
                key={yr}
                className={`results-year-btn${resultsYear === yr ? ' active' : ''}`}
                onClick={() => setResultsYear(yr)}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* ── 2025 ── */}
          {resultsYear === '2025' && (
            resultsLoading ? (
              <div className="results-loading"><div className="results-spinner" /><span>Loading results…</span></div>
            ) : results.length === 0 ? (
              <p style={{ color: 'var(--muted)', marginTop: 32 }}>Results not available.</p>
            ) : (
              <>
                <div className="results-tabs">
                  {results.map((cat, i) => (
                    <button key={cat.race} className={`results-tab${resultsTab === i ? ' active' : ''}`} onClick={() => setResultsTab(i)}>
                      {cat.race}
                    </button>
                  ))}
                </div>
                {results[resultsTab] && (() => {
                  const data = results[resultsTab].urlData;
                  const ageCats = ['Overall', ...Array.from(new Set(data.map(r => r.Category).filter(Boolean))).sort()];
                  return ageCats.map(cat => {
                    const top3Men = cat === 'Overall' ? data.filter(r => r.Gender === 'Male').slice(0, 3) : data.filter(r => r.Gender === 'Male' && r.Category === cat).slice(0, 3);
                    const top3Women = cat === 'Overall' ? data.filter(r => r.Gender === 'Female').slice(0, 3) : data.filter(r => r.Gender === 'Female' && r.Category === cat).slice(0, 3);
                    if (!top3Men.length && !top3Women.length) return null;
                    return (
                      <div className="res-age-block" key={cat}>
                        <div className="res-age-label">{cat}</div>
                        <div className="res-cards-pair">
                          {top3Men.length > 0 && (
                            <div className="res-card">
                              <div className="res-card-hdr">Men</div>
                              {top3Men.map((r, i) => (
                                <div className="res-row" key={r.Bib}>
                                  <div className={`res-rank res-rank-${i + 1}`}>{i + 1}</div>
                                  <div className="res-info"><div className="res-name">{r.Name}</div><div className="res-bib">BIB {r.Bib}</div></div>
                                  <div className="res-time">{r['Chip time']}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          {top3Women.length > 0 && (
                            <div className="res-card">
                              <div className="res-card-hdr">Women</div>
                              {top3Women.map((r, i) => (
                                <div className="res-row" key={r.Bib}>
                                  <div className={`res-rank res-rank-${i + 1}`}>{i + 1}</div>
                                  <div className="res-info"><div className="res-name">{r.Name}</div><div className="res-bib">BIB {r.Bib}</div></div>
                                  <div className="res-time">{r['Chip time']}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  });
                })()}
                <div className="results-footer">
                  <a href="https://www.novarace.in/results/sivagiri-marathon-2025" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Full Results on novarace.in
                  </a>
                </div>
              </>
            )
          )}

          {/* ── 2024 ── */}
          {resultsYear === '2024' && (
            resultsLoading2024 ? (
              <div className="results-loading"><div className="results-spinner" /><span>Loading results…</span></div>
            ) : results2024.length === 0 ? (
              <p style={{ color: 'var(--muted)', marginTop: 32 }}>
                2024 results are not available here — the list could not be loaded. Try{' '}
                <a href="https://www.novarace.in/results/sivagiri-marathon-2024" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cream)' }}>
                  full results on NovaRace
                </a>
                .
              </p>
            ) : (() => {
              /* 2024: API may repeat the same urlData per race bucket — use first non-empty block */
              const first = results2024.find((c) => Array.isArray(c?.urlData) && c.urlData.length);
              const allRunners = first?.urlData;
              if (!allRunners?.length) {
                return (
                  <p style={{ color: 'var(--muted)', marginTop: 32 }}>
                    2024 results are not available — missing data from the results feed.
                  </p>
                );
              }
              const distances = Array.from(new Set(allRunners.map(r => r.Distance).filter(Boolean)));
              const activeDist = distances[resultsTab2024] || distances[0];
              const byDist = allRunners
                .filter(r => r.Distance === activeDist)
                .sort((a, b) => parseInt(a.Place) - parseInt(b.Place));

              const ageCats = ['Overall', ...Array.from(new Set(byDist.map(r => r.Category).filter(Boolean))).sort()];

              return (
                <>
                  <div className="results-tabs">
                    {distances.map((d, i) => (
                      <button key={d} className={`results-tab${resultsTab2024 === i ? ' active' : ''}`} onClick={() => setResultsTab2024(i)}>
                        {d}
                      </button>
                    ))}
                  </div>

                  {ageCats.map(cat => {
                    const pool = cat === 'Overall' ? byDist : byDist.filter(r => r.Category === cat);
                    const top3Men = pool.filter(r => r.Gender === 'Male').slice(0, 3);
                    const top3Women = pool.filter(r => r.Gender === 'Female').slice(0, 3);
                    if (!top3Men.length && !top3Women.length) return null;
                    return (
                      <div className="res-age-block" key={cat}>
                        <div className="res-age-label">{cat}</div>
                        <div className="res-cards-pair">
                          {top3Men.length > 0 && (
                            <div className="res-card">
                              <div className="res-card-hdr">Men</div>
                              {top3Men.map((r, i) => (
                                <div className="res-row" key={r.Bib}>
                                  <div className={`res-rank res-rank-${i + 1}`}>{i + 1}</div>
                                  <div className="res-info"><div className="res-name">{r.Name}</div><div className="res-bib">BIB {r.Bib}</div></div>
                                  <div className="res-time">{r['Chip time']}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          {top3Women.length > 0 && (
                            <div className="res-card">
                              <div className="res-card-hdr">Women</div>
                              {top3Women.map((r, i) => (
                                <div className="res-row" key={r.Bib}>
                                  <div className={`res-rank res-rank-${i + 1}`}>{i + 1}</div>
                                  <div className="res-info"><div className="res-name">{r.Name}</div><div className="res-bib">BIB {r.Bib}</div></div>
                                  <div className="res-time">{r['Chip time']}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  <div className="results-footer">
                    <a href="https://www.novarace.in/results/sivagiri-marathon-2024" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Full Results on novarace.in
                    </a>
                  </div>
                </>
              );
            })()
          )}
        </div>
      </section>

      {/* ── 12. GALLERY ── */}
      <section className="section" id="gallery">
        <div className="container">
          <div className="sec-header">
            <div>
              <div className="eyebrow">Past Editions</div>
              <h2 className="section-title">Race <em>Gallery</em></h2>
            </div>
            <button className="btn btn-ghost" style={{ flexShrink: 0 }} onClick={() => openLightbox(0)}>View All Photos →</button>
          </div>

          {/* Thumbnail grid */}
          <div className="gallery-grid">
            {/* Featured large thumbnail */}
            <div className="gal-thumb gal-thumb-featured" onClick={() => openLightbox(0)}>
              <img src={racePhotos[0]} alt="Dawn Start · 4:30AM · 2025 Edition" />
              <div className="gal-thumb-overlay">
                <span className="gal-thumb-icon">🏃</span>
                <span className="gal-thumb-title">Dawn Start · 4:30 AM · 2025 Edition</span>
                <span className="gal-thumb-sub">Race Day 2025 · Click to view all {racePhotos.length} photos</span>
              </div>
            </div>
            {/* Small thumbnails (next 5) */}
            <div className="gal-thumbs-side">
              {racePhotos.slice(1, 6).map((src, i) => (
                <div className="gal-thumb" key={i} onClick={() => openLightbox(i + 1)}>
                  <img src={src} alt={`Race Day 2025 · Photo ${i + 2}`} />
                  <div className="gal-thumb-overlay">
                    {i === 4 && <span className="gal-thumb-more">+{racePhotos.length - 6} more</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prevPhoto}>‹</button>
            <div className="lightbox-img-wrap">
              <img src={racePhotos[lightboxIdx]} alt={`Race Day 2025 · Photo ${lightboxIdx + 1}`} className="lightbox-img" />
            </div>
            <button className="lightbox-nav lightbox-next" onClick={nextPhoto}>›</button>
            <div className="lightbox-footer">
              <span className="lightbox-counter">{lightboxIdx + 1} / {racePhotos.length}</span>
              <span className="lightbox-caption">🏃 Dawn Start · 4:30 AM · Race Day 2025</span>
              <div className="lightbox-dots">
                {racePhotos.map((_, i) => (
                  <button key={i} className={`lightbox-dot${i === lightboxIdx ? ' active' : ''}`} onClick={() => setLightboxIdx(i)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 12. FAQs ── */}
      <section className="section faq-bg" id="faqs">
        <div className="container">
          <div className="eyebrow">Quick Answers</div>
          <h2 className="section-title">Frequently <em>Asked Questions</em></h2>
          <div className="faq-layout">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                  <button className="faq-btn" onClick={() => toggleFaq(i)}>
                    <span className="faq-q">{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-a">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-sidebar">
              <div className="faq-sidebar-title">Still have questions?</div>
              <div className="faq-sidebar-sub">The Sivagiri Runners team is here to help. Reach out and a fellow runner will get back to you.</div>
              <a href="mailto:hello@sivagirimarathon.in" className="faq-contact-item">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                sivagirimarathon@gmail.com
              </a>
              <a href="tel:+919876500000" className="faq-contact-item">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
                +91 9788887888
              </a>
              <a href="#" className="faq-contact-item">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                sivagirimarathon.in
              </a>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div className="tier-label" style={{ marginBottom: '14px' }}>WhatsApp Community</div>
                <a href="#" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', fontSize: '.82rem' }}>
                  Join Runners Group →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. ORGANIZER ── */}
      <section className="section" id="organizer">
        <div className="container">
          <div className="eyebrow">Behind the Race</div>
          <h2 className="section-title">Meet the <em>Organiser</em></h2>
          <div className="organizer-card">
            <div className="org-logo">
              <img src={runnersLogo} alt="Sivagir i Runners" className="org-logo-img" />
            </div>
            <div>
              <div className="org-name">Sivagiri Runners</div>
              <p className="org-desc">Sivagiri Runners is a grassroots running collective based in Sivagiri, Erode — founded by a group of passionate runners who believed that the best running events are built by runners who understand what runners need. From choosing the perfect dawn start time to ensuring post-race Sivagiri sadya, every decision reflects that philosophy. The Sivagiri Marathon is their proudest achievement, growing year after year through word of mouth and community love.</p>
              <div className="org-socials">
                {[
                  { label: 'IG', href: 'https://www.instagram.com/sivagiri_runners/' },
                  { label: 'FB', href: '#' },
                  { label: 'ST', href: '#' },
                  { label: 'YT', href: '#' },
                ].map(({ label, href }) => (
                  <a href={href} className="social-btn" key={label} target="_blank" rel="noopener noreferrer">{label}</a>
                ))}
              </div>
            </div>
            <div className="org-contacts">
              <a href="mailto:sivagirimarathon@gmail.com" className="org-contact">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                sivagirimarathon@gmail.com
              </a>
              <a href="tel:+919876500000" className="org-contact">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
                +91 97888 87888
              </a>
              <a href="https://sivagirimarathon.in" className="org-contact">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                sivagirimarathon.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. REVIEWS ── */}
      <section className="section" id="reviews" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="eyebrow">Runner Voices</div>
          <h2 className="section-title">What Runners <em>Say</em></h2>
          <div className="reviews-grid">
            {[
              { name: 'Raghu Nair', text: 'Running through Sivagiri at 5 AM with mist on the hills and no sound but footsteps is an experience I cannot describe. This race has soul. Completely different from city races — the community here treats every runner like family.' },
              { name: 'Anitha Mohan', text: 'The fact that this event is run by runners shows in every tiny detail. The aid stations are perfectly placed, the volunteers are enthusiastic, and the post-race Sivagiri sadya is worth the entire trip. Already planning to upgrade to the full in 2026!' },
              { name: 'Vivek Suresh', text: 'Sivagiri Marathon is the most runner-centric event I\'ve been to in South India. Beautiful scenery, great organisation, and a finish line atmosphere that gives you goosebumps.' },
            ].map(({ name, text }) => (
              <div className="review-card" key={name}>
                <div className="review-text">{text}</div>
                <div className="review-author">— {name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. SAFETY ── */}
      <section className="section" id="safety">
        <div className="container">
          <div className="eyebrow">Participant Safety</div>
          <h2 className="section-title">Safety &amp; Medical <em>Support</em></h2>
          <p className="section-sub">Your safety on the course is our highest priority — always.</p>
          <div className="safety-grid">
            {[
              { icon: '🚑', title: 'Ambulances', text: '4 ambulances stationed at key points across the full course, with dedicated coverage for the 42.2KM route from 4:00 AM until last finisher.' },
              { icon: '🏥', title: 'Medical Stations', text: 'First aid posts every 5KM with trained medical volunteers, bandaging, sports injury support, and emergency response capability.' },
              { icon: '👨‍⚕️', title: 'Doctors On-Site', text: 'Qualified sports medicine physicians stationed at start/finish and at the 21.1KM midpoint. Full medical tent at finish line.' },
              { icon: '🔦', title: 'Pre-Dawn Safety', text: 'For 4:00 AM starters, runners are required to carry a torch/headlamp and wear reflective gear for visibility in low-light conditions.' },
              { icon: '📞', title: 'Emergency Contacts', text: null },
            ].map(({ icon, title, text }) => (
              <div className="safety-card" key={title}>
                <div className="safety-card-icon">{icon}</div>
                <div className="safety-card-title">{title}</div>
                {text
                  ? <div className="safety-card-text">{text}</div>
                  : <div className="safety-card-text">Race Emergency: <strong style={{ color: 'var(--amber)' }}><br />+91 99435 07743</strong></div>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. TERMS ── */}
      <section className="section terms-bg" id="terms">
        <div className="container">
          <div className="eyebrow">Policies</div>
          <h2 className="section-title">Terms &amp; <em>Policies</em></h2>
          <div className="terms-grid">
            {[
              { title: 'Refund Policy', text: 'All registrations are non-refundable. In case of event cancellation due to force majeure or weather, registrations will be rolled over to the next edition or a partial credit will be issued per the organiser\'s discretion.' },
              { title: 'Transfer Policy', text: 'Bib transfers are permitted until June 1, 2026. To transfer a bib, participants must send a request to sivagirimarathon@gmail.com with the appropriate registration details.' },
              { title: 'Medical Requirements', text: '42.2KM and 21.1KM participants must submit a medical fitness certificate at expo. Participants with cardiac conditions, diabetes, or recent injuries are advised to consult their physician before registering.' },
              { title: 'Liability Waiver', text: 'By registering, participants confirm they are medically fit to compete and acknowledge the inherent physical risks of long-distance running. Sivagiri Runners and partners are not liable for personal injury, loss, or damage.' },
            ].map(({ title, text }) => (
              <div className="terms-card" key={title}>
                <div className="terms-title">{title}</div>
                <div className="terms-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY BAR ── */}
      <div className={`sticky-bar${stickyVisible ? ' visible' : ''}`}>
        <div className="sticky-inner">
          <div>
            <div className="sticky-name">Sivagiri Marathon <em style={{ fontStyle: 'italic', color: 'var(--amber-lt)' }}>2026</em></div>
            <div className="sticky-meta">June 21, 2026 · Sivagiri, Erode</div>
          </div>
          <div className="sticky-cats">
            {['42.2KM', '21.1KM', '10KM', '5KM'].map((c) => (
              <span className="sticky-cat" key={c}>{c}</span>
            ))}
          </div>
          <a href="https://www.novarace.in/events/sivagiri-marathon-2026" className="btn btn-primary">Register Now →</a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <img src={marathonLogo} alt="Sivagiri Marathon" className="footer-logo" />
              <div className="footer-brand-tagline">By the Runners · For the Runners</div>
              <div className="footer-address">
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Sri Ram E-Seva, GH Road, Sivagiri, Erode
              </div>
            </div>
            <div>
              <div className="footer-col-title">Event</div>
              <ul className="footer-links">
                <li><a href="#about">About the Race</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#map">Course Map</a></li>
                <li><a href="#expo">Race Expo</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Race Info</div>
              <ul className="footer-links">
                <li><a href="#prizes">Prizes</a></li>
                <li><a href="#entitlements">Race Kit</a></li>
                <li><a href="#safety">Safety</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#terms">Policies</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Connect</div>
              <ul className="footer-links">
                <li><a href="tel:+919876500000">+91 9788887888</a></li>
                <li><a href="#">sivagirimarathon@gmail.com</a></li>
                <li><a href="https://photos.novarace.in/events/sivagiri-marathon-2025-5663/photos">Finisher Photos</a></li>
                <li><a href="https://www.novarace.in/results/sivagiri-marathon-2025">2025 Results</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 Sivagiri Runners. All rights reserved.</span>
            <span className="footer-powered">Race Technology by <span>NovaRace</span></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
