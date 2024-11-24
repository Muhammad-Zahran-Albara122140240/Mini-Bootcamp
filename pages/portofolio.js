export default function Portofolio() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Portofolio</h1>
        <div style={styles.project}>
          <h2 style={styles.projectName}>Gehenna</h2>
          <p style={styles.projectDescription}>
            Gehenna adalah sebuah game yang saya buat dengan tim saya. Game ini adalah platformer 2D role play, 
            di mana pemain harus menghadapi monster di setiap level hingga mencapai akhir.
          </p>
          <video controls style={styles.video}>
            <source src="/Gehenna.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#3c71a5',
      color: '#333',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    project: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#fff',
    },
    projectName: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    projectDescription: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    video: {
      width: '100%',
      borderRadius: '5px',
    },
  };
  