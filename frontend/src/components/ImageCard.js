import React from 'react';

const ImageCard = () => {
  const cardStyles = {
    maxWidth: '95%',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    margin: '20px auto',
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    minHeight: '300px',
    objectFit: 'cover',
  };

  const contentStyles = {
    padding: '15px',
    backgroundColor: '#fff',
  };

  const titleStyles = {
    fontSize: '1.5rem',
    color: '#333',
    margin: 0,
  };

  const descriptionStyles = {
    fontSize: '1rem',
    color: '#666',
    marginTop: '8px',
  };

  return (
    <div style={cardStyles}>
      <img
        src={`${process.env.PUBLIC_URL}/Assets/partner.png`}
        alt="Partners"
        style={imageStyles}
      />
      <div style={contentStyles}>
        <p style={descriptionStyles}>Universities and Companies working with us.</p>
      </div>
    </div>
  );
};

export default ImageCard;
