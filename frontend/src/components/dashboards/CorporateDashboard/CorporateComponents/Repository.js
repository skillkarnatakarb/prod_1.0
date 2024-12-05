import React, { useState } from "react";

const Repository = () => {
  const [activeCard, setActiveCard] = useState(null);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    cardWrapper: {
      display: "flex",
      gap: "20px",
    },
    card: {
      width: "250px",
      padding: "20px",
      borderRadius: "15px",
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
    cardContent: {
      margin: "20px 0",
    },
    modernCard: {
      width: "500px",
      background: "rgba(240, 248, 255, 0.8)",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    },
    backButton: {
      marginTop: "20px",
      padding: "10px 20px",
      background: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    backButtonHover: {
      background: "#0056b3",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "15px",
    },
  };

  const cards = [
    {
      id: 1,
      title: "Upload Offer Letter",
      description: "Upload Offer Letter to selected Candidates",
      content: (
        <div>
          <h2 style={{ color: "#007BFF" }}>Upload Offer Letter</h2>
          <p>Please upload your offer letter using the form below.</p>
          <input type="file" style={{ margin: "10px 0", cursor: "pointer" }} />
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <button
              style={styles.backButton}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = styles.backButtonHover.background)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = styles.backButton.background)
              }
              onClick={() => setActiveCard(null)}
            >
              Back
            </button>
            <button
              style={{
                ...styles.backButton,
                background: "#28A745",
                marginLeft: "10px",
              }}
              onClick={() => alert("Upload functionality coming soon!")}
            >
              Upload
            </button>
          </div>
        </div>
      ),
      icon: "📄",
    },
    {
      id: 2,
      title: "Upload Certificate",
      description: "Upload Certificate to Certified Students",
      content: (
        <div>
          <h2 style={{ color: "#28A745" }}>Upload Certificate</h2>
          <p>Please upload your certificate to verify your credentials.</p>
          <input type="file" style={{ margin: "10px 0", cursor: "pointer" }} />
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <button
              style={styles.backButton}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = styles.backButtonHover.background)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = styles.backButton.background)
              }
              onClick={() => setActiveCard(null)}
            >
              Back
            </button>
            <button
              style={{
                ...styles.backButton,
                background: "#28A745",
                marginLeft: "10px",
              }}
              onClick={() => alert("Upload functionality coming soon!")}
            >
              Upload
            </button>
          </div>
        </div>
      ),
      icon: "🎓",
    },
    {
      id: 3,
      title: "View Projects",
      description: "View Projects received from Candidates",
      content: (
        <div style={styles.modernCard}>
          <h2 style={{ color: "#6F42C1" }}>Your Projects</h2>
          <p>No projects to display at the moment.</p>
          <button
            style={styles.backButton}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = styles.backButtonHover.background)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = styles.backButton.background)
            }
            onClick={() => setActiveCard(null)}
          >
            Back
          </button>
        </div>
      ),
      icon: "📊",
    },
  ];

  return (
    <div style={styles.container}>
      {activeCard === null ? (
        <div style={styles.cardWrapper}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                ...styles.card,
                ...(activeCard === card.id ? styles.cardHover : {}),
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
              onClick={() => setActiveCard(card.id)}
            >
              <div style={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>{cards.find((card) => card.id === activeCard)?.content}</div>
      )}
    </div>
  );
};

export default Repository;
