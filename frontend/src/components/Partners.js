import React from 'react';

// Sample image paths (replace these with the actual paths to your images)
const universityLogos = [
  '/path/to/logo1.png', '/path/to/logo2.png', '/path/to/logo3.png', '/path/to/logo4.png',
  '/path/to/logo5.png', '/path/to/logo6.png', '/path/to/logo7.png', '/path/to/logo8.png',
  '/path/to/logo9.png', '/path/to/logo10.png', '/path/to/logo11.png', '/path/to/logo12.png',
  '/path/to/logo13.png', '/path/to/logo14.png',
];

const companyLogos = [
  '/path/to/companyLogo1.png', '/path/to/companyLogo2.png', '/path/to/companyLogo3.png',
  '/path/to/companyLogo4.png', '/path/to/companyLogo5.png', '/path/to/companyLogo6.png',
  '/path/to/companyLogo7.png', '/path/to/companyLogo8.png', '/path/to/companyLogo9.png',
  '/path/to/companyLogo10.png', '/path/to/companyLogo11.png', '/path/to/companyLogo12.png',
  '/path/to/companyLogo13.png', '/path/to/companyLogo14.png',
];

function Partners() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
  };

  const titleStyle = {
    color: '#FFD700',
    fontSize: '36px',
    fontWeight: 'bold',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '40px',
  };

  const columnStyle = {
    flex: 1,
    padding: '0 20px',
  };

  const dividerStyle = {
    width: '2px',
    backgroundColor: '#ddd',
    height: '100%',
    margin: '0 20px',
  };

  const sectionTitleStyle = {
    color: 'red',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // 5 images per row
    gap: '20px',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>PARTNERS</h1>

      {/* Section with two columns and a divider */}
      <div style={sectionStyle}>
        {/* Universities Column */}
        <div style={columnStyle}>
          <h2 style={sectionTitleStyle}>UNIVERSITIES</h2>
          <div style={gridStyle}>
            {universityLogos.map((logo, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + logo}
                alt={`University Logo ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={dividerStyle}></div>

        {/* Companies Column */}
        <div style={columnStyle}>
          <h2 style={sectionTitleStyle}>COMPANIES</h2>
          <div style={gridStyle}>
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + logo}
                alt={`Company Logo ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
