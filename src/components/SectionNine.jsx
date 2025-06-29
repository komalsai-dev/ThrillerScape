import React from 'react';
import './SectionNine.css';

const s2Bg = encodeURIComponent('s2 background.png');

const technicalData = [
  { label: 'Height', value: '7.2 m (23.7 ft)' },
  { label: 'Footprint', value: '\u2300 17.2 m (56.5 ft)' },
  { label: 'Rotation speed', value: '6 rpm' },
  { label: 'Restraint type', value: 'unmonitored individual seat belt' },
  { label: 'Height restriction', value: '120 cm (48 in) unaccompanied / 90 cm (35 in) minimum' },
  { label: 'Theoretical hourly capacity', value: '840 pph' },
  { label: 'Load/unload time', value: '120 s' },
  { label: 'Ride time', value: '120 s' },
  { label: 'Instant capacity', value: '24 adults + 24 children' },
  { label: 'Power requirement', value: '60 kW' }
];

const SectionNine = () => {
  return (
    <section className="section-nine-new">
      <div className="section-nine-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-nine-content-new">
        <div className="section-nine-two-col">
          <div className="section-nine-col section-nine-col-left">
            <div className="section-nine-main-title">sky rider 12</div>
            <div className="section-nine-image-frame">
              <img src={process.env.PUBLIC_URL + '/assets/sky-rider-12.png'} alt="Sky Rider 12" className="section-nine-image" />
            </div>
            <div className="section-nine-highlights-table">
              <div className="section-nine-highlights-title">HIGHLIGHTS</div>
              <ul className="section-nine-highlights-list">
                <li>The family ride that suits every amusement park!</li>
                <li>High capacity, every plane can accommodate 4 people at the same time.</li>
                <li>Everyone can be the pilot of his own adventure!</li>
                <li>Versatile for any kind of indoor/outdoor park</li>
              </ul>
              <div className="section-nine-tech-table-title-row">
                <div className="section-nine-tech-title">TECHNICAL DATA</div>
                <div className="section-nine-tech-title">SPECIFICS</div>
              </div>
              <div className="section-nine-tech-table">
                {technicalData.map((row, idx) => (
                  <React.Fragment key={row.label}>
                    <div className="section-nine-tech-label">{row.label}</div>
                    <div className="section-nine-tech-value">{row.value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="section-nine-col section-nine-col-right">
            <div className="section-nine-mini-title">the mini jet 8</div>
            <div className="section-nine-mini-description">
              <p>The Mini Jet 8 is a <span className="section-nine-link">ThrillScape</span> classic.</p>
            </div>
            <div className="section-nine-mini-description">
              <p className="section-nine-mini-highlight">This family-friendly ride features eight mini jets, each designed to accommodate up to 2 passengers, offering an interactive experience.</p>
              <p>Mini Jet 8 promises repeated fun for the little ones, ensuring an exhilarating journey with every flight. Intuitive controls allow young pilots to adjust the flight height.</p>
              <p className="section-nine-mini-highlight">Numerous theming possibilities are available to blend seamlessly with the park's design.</p>
            </div>
            <div className="section-nine-highlighted">Sky Rider 12</div>
            <div className="section-nine-description">
              <p><span className="section-nine-highlighted">Sky Rider 12</span> is a classic ride by <span className="section-nine-link">ThrillScape</span> designed for kids and families.</p>
              <p>This ride features twelve planes that can accommodate <b>4 passengers</b> each. The planes come equipped with a controller that lets the pilot decide how high or how low they will fly.</p>
              <p>Riders can swoop and soar to heights of <b>4 meters (13 feet)</b>. With an instant capacity of 48 riders, Sky Rider 12 promises to be a high-capacity ride with lots of repeat riders since everyone will want to control their own adventure.</p>
              <p>The Sky Rider 12 is available in custom designs to meet your park's theming requirements.</p>
              <p>Upon request, a customized version with 2-seater planes each is also available, providing an hourly capacity of 24 people.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNine; 