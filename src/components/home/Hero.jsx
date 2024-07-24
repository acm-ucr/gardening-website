import React from 'react';

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.leftSection}>
        <h1 style={styles.welcomeText}>Welcome to</h1>
        <h1 style={styles.mainTitle}>UCR Gardening!</h1>
        <div>
          <img 
            src="your_image_path_here" 
            alt="Gardening Illustration" 
            style={styles.image}
          />
        </div>
      </div>
      <div style={styles.rightSection}>
        {/* Placeholder for the content on the right side */}
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#fdf5e6', 
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: '2rem',
    color: '#4b4b4b',
    marginBottom: '10px',
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#6b4b3a',
    marginLeft: '50px',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    width: '200px', 
    height: 'auto',
  },
  rightSection: {
    width: '400px', 
    height: '300px', 
    backgroundColor: '#d3c4a1', 
    borderRadius: '8px',
    marginRight: '100px',
  },
};
export default Hero;