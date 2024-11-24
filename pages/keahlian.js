export default function Keahlian() {
    const skills = [
      { name: 'C++', description: 'C++ adalah bahasa pemrograman yang sering digunakan untuk membuat aplikasi desktop dan game dengan performa tinggi. C++ adalah bahasa pemrograman yang digunakan untuk membuat dan mengembangkan software dengan kinerja optimal. Bahasa C++ adalah bahasa pemrograman yang dikembangkan dari bahasa pemrograman C.' },
      { name: 'Python', description: 'Python adalah bahasa pemrograman yang mudah dipelajari dan sering digunakan untuk pengembangan web, data science, dan AI. Python merupakan bahasa pemrograman tingkat tinggi yang pertama kali dikembangkan oleh Guido van Rossum pada akhir 1980-an. Python didesain dengan fokus pada keterbacaan kode, sehingga mudah dipelajari dan digunakan oleh pemula maupun ahli. Fleksibilitasnya memungkinkan Python digunakan dalam berbagai aplikasi, mulai dari pengembangan web hingga analisis data.' },
      { name: 'HTML', description: 'Hypertext Markup Language atau HTML adalah bahasa markup standar yang digunakan untuk membuat halaman website dan aplikasi web. Sejarah HTML diciptakan oleh Tim Berners-Lee, seorang ahli fisika di lembaga penelitian CERN yang berlokasi di Swiss.Versi pertama HTML dirilis oleh Tim Berners Lee pada tahun 1991, yang memiliki 18 tag. Sejak saat itu, setiap kali ada versi barunya, pasti akan selalu ada tag dan attribute (tag modifier) yang juga baru. bahasa markup ini, Anda menggunakan struktur kode sederhana (tag dan attribute) untuk mark up halaman website. Misalnya, Anda membuat sebuah paragraf dengan menempatkan enclosed text di antara tag pembuka <p>  dan tag penutup </p>.' },
      { name: 'CSS', description: 'CSS adalah bahasa untuk mendesain tampilan halaman web. Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs.' },
    ];

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Keahlian</h1>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skill}>
            <h2 style={styles.skillName}>{skill.name}</h2>
            <p style={styles.skillDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#3c71a5',
      color: '#000c17',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    skill: {
      textAlign: 'center',
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#97b6d5',
    },
    skillName: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    skillDescription: {
      fontSize: '14px',
    },
  };
  