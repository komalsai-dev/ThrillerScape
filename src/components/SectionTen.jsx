import React from 'react';
import './SectionTen.css';

const leftImage = process.env.PUBLIC_URL + '/assets/left_image.png'; // Use correct public assets path
const rightImage = process.env.PUBLIC_URL + '/assets/right_image.png'; // Use correct public assets path

const leftHighlights = [
  'Lot of theming possibilities that match any themed area in parks.',
  'The perfect family ride that allows children and families to have fun together.',
  'Intuitive controls for young pilots.'
];

const leftTechnicalData = [
  { label: 'Height', value: '4.2 m (13.7 ft)' },
  { label: 'Footprint', value: 'Ø12.5 m (41 ft)' },
  { label: 'Rotation speed', value: '5.2 rpm (50 Hz) / 5.5 rpm (60 Hz)' },
  { label: 'Restraint type', value: 'manual safety belts' },
  { label: 'Height restriction', value: '105 cm (42 in) unaccompanied / 75 cm (30 in) minimum' },
  { label: 'Theoretical hourly capacity', value: '580 pph' },
  { label: 'Load/unload time', value: '60 s' },
  { label: 'Ride time', value: '90 s' },
  { label: 'Instant capacity', value: '24 Children (or 8 Children+8 Adults)' },
  { label: 'Power requirement', value: '15 kW' }
];

const rightHighlights = [
  "One of Thrillscape's most popular family rides.",
  "Wide demographic and high capacity.",
  "Height requirements 75 cm (30 in) minimum and 105 cm (35 in) unaccompanied.",
  "Endless ride whirls energetically, spinning both clockwise and counterclockwise, offering an exhilarating journey that delivers an instant lift."
];

const rightTechnicalData = [
  { label: 'Height', value: '7.8 m (25.7 ft)' },
  { label: 'Footprint', value: '11.4 x 5.8 m (37.4 x 19 ft)' },
  { label: 'Rotation speed', value: '10 rpm' },
  { label: 'Restraint type', value: 'unmonitored cumulative lap bar' },
  { label: 'Height restriction', value: '105 cm (35 in) unaccompanied / 75 cm (30 in) minimum' },
  { label: 'Theoretical hourly capacity', value: '480 pph' },
  { label: 'Load/unload time', value: '60 s' },
  { label: 'Ride time', value: '120 s' },
  { label: 'Instant capacity', value: '24 adults + 12 children' },
  { label: 'Power requirement', value: '37 kW' }
];

const SectionTen = () => {
  return (
    <section className="section-ten-bg">
      <div className="section-ten-content">
        <div className="section-ten-two-col">
          {/* Left Block */}
          <div className="section-ten-col">
            <div className="section-ten-image-frame">
              <img src={leftImage} alt="Left Ride" className="section-ten-image" />
            </div>
            <div className="section-ten-highlights-table">
              <div className="section-ten-highlights-title">HIGHLIGHTS</div>
              <ul className="section-ten-highlights-list">
                {leftHighlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="section-ten-tech-table-title-row">
                <div className="section-ten-tech-title">TECHNICAL DATA</div>
                <div className="section-ten-tech-title">SPECIFICS</div>
              </div>
              <div className="section-ten-tech-table">
                {leftTechnicalData.map((row, idx) => (
                  <React.Fragment key={row.label}>
                    <div className="section-ten-tech-label">{row.label}</div>
                    <div className="section-ten-tech-value">{row.value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          {/* Right Block */}
          <div className="section-ten-col">
            <div className="section-ten-image-frame">
              <img src={rightImage} alt="Right Ride" className="section-ten-image" />
            </div>
            <div className="section-ten-highlights-table">
              <div className="section-ten-highlights-title">HIGHLIGHTS</div>
              <ul className="section-ten-highlights-list">
                {rightHighlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="section-ten-tech-table-title-row">
                <div className="section-ten-tech-title">TECHNICAL DATA</div>
                <div className="section-ten-tech-title">SPECIFICS</div>
              </div>
              <div className="section-ten-tech-table">
                {rightTechnicalData.map((row, idx) => (
                  <React.Fragment key={row.label}>
                    <div className="section-ten-tech-label">{row.label}</div>
                    <div className="section-ten-tech-value">{row.value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Descriptions below the images */}
        <div className="section-ten-descriptions">
          <div className="section-ten-description-block">
            <div className="section-ten-ride-title crazy-bus">CRAZY BUS</div>
            <div className="section-ten-ride-highlight">Crazy Bus is one of Thrillscape's most popular family rides.</div>
            <div className="section-ten-ride-desc">
              The cheerful school bus theme brings back nostalgic memories for adults, while the exciting, swinging motion keeps kids on the edge of their seats.<br/>
              But Crazy Bus isn't stuck in one gear. Thrillscape offers custom themes to match any area of your park.<br/>
              Think firetrucks for aspiring firefighters, pirate ships for high-seas adventures, or even spaceships for future astronauts! The possibilities are endless.
            </div>
          </div>
          <div className="section-ten-description-block">
            <div className="section-ten-ride-title">HIGHLIGHTS</div>
            <div className="section-ten-ride-desc">
              One of Thrillscape's most popular family rides.<br/>
              Wide demographic and high capacity.<br/>
              Height requirements 75 cm (30 in) minimum and 105 cm (35 in) unaccompanied.<br/>
              Endless ride whirls energetically, spinning both clockwise and counterclockwise, offering an exhilarating journey that delivers an instant lift.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;
