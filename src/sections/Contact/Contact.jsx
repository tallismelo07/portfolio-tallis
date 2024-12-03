import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      <div className={styles.contactInfo}>
        <div className={styles.line}></div>
        <p className={styles.email}>
          Email: 
          <a href="mailto:tteixeirademelo@gmail.com?subject=Contato%20pelo%20site">tteixeirademelo@gmail.com</a>
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.line}></div>
        <p className={styles.email}>
          Email: 
          <a href="mailto:tallisteixeiradev@gmail.com?subject=Contato%20pelo%20site">tallisteixeiradev@gmail.com</a>
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.line}></div>
        <p className={styles.phone}>
          Phone: 
          <a href="https://api.whatsapp.com/send?phone=5535998759985&text=Ol%C3%A1%20Tallis,%20Tudo%20bem?">
            (35) 99875-9985
          </a>
        </p>
        <div className={styles.line}></div>
      </div>
    
    </section>
  );
}

export default Contact;
