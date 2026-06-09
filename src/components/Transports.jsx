import './Transports.css';

const transports = [
  { id: 't1', name: 'Driver Name 1', number: '+91 8012143241' },
  { id: 't2', name: 'Driver Name 2', number: '+91 8610716925' },
  { id: 't3', name: 'Driver Name 3', number: '+91 9442994347' },
  { id: 't4', name: 'Driver Name 4', number: '+91 9345552456' },
  { id: 't5', name: 'Driver Name 5', number: '+91 9965056643' },
  { id: 't6', name: 'Driver Name 6', number: '+91 9952256643' },
];

const telHref = (num) => `tel:${num.replace(/\s+/g, '')}`;

const TransportCard = ({ item, index }) => (
  <article
    className="transport-card"
    style={{ '--card-index': index }}
  >
    <div className="transport-card-num">
      {String(index + 1).padStart(2, '0')}
    </div>

    <div className="transport-card-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17h14M6 17l1.5-7h9L18 17M7 17v2H5v-2M19 17v2h-2v-2" />
        <circle cx="8" cy="17" r="1.5" />
        <circle cx="16" cy="17" r="1.5" />
      </svg>
    </div>

    <div className="transport-card-body">
      <h3 className="transport-card-name">{item.name}</h3>
      <a
        href={telHref(item.number)}
        className="transport-card-number"
        aria-label={`Call ${item.name} at ${item.number}`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
        </svg>
        {item.number}
      </a>
    </div>

    <a
      href={telHref(item.number)}
      className="transport-call-btn"
      aria-label={`Call ${item.name}`}
    >
      <span>Call</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    </a>
  </article>
);

const Transports = () => {
  return (
    <section className="section transport-section" id="transports">
      <div className="container">
        <div className="transport-header">
          <div className="eyebrow">Local Transport</div>
          <h2 className="section-title">
            Local Transport <em>Contact</em>
          </h2>
          <p className="section-sub">
            Trusted local drivers and transport providers to help you reach the
            race venue from nearby cities and stations. Tap a number to call directly.
          </p>
        </div>

        <div className="transport-grid">
          {transports.map((item, i) => (
            <TransportCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transports;
