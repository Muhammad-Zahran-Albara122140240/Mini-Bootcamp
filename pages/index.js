import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={styles.container}>
      <Image 
        src="/profile.jpg" 
        alt="Profile Photo" 
        width={200} 
        height={200} 
        style={styles.photo} 
      />
      <h1 style={styles.title}>Muhammad Zahran Albara</h1>
      <p style={styles.text}>NIM: 122140240</p>
      <p style={styles.text}>Prodi: Teknik Informatika</p>
      <div style={styles.buttonContainer}>
        <Link href="/keahlian">
          <button style={styles.button}>Keahlian</button>
        </Link>
        <Link href="/portofolio">
          <button style={styles.button}>Portofolio</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#3c71a5',
    color: '#fff',
    padding: '20px',
  },
  photo: {
    borderRadius: '50%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
