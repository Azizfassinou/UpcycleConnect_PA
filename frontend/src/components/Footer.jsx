import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.grid}>
                <div style={styles.brandCol}>
                    <div style={styles.logoPlaceholder}></div>
                    <p style={styles.desc}>La plateforme de l'upcycling intelligent. Donnez une seconde vie à vos objets.</p>
                    <p style={styles.contact}></p>
                </div>

                <div style={styles.linkCol}>
                    <h4 style={styles.title}>Plateforme</h4>
                    <a href="#" style={styles.link}>Annonces</a>
                    <a href="#" style={styles.link}>Conteneurs</a>
                    <a href="#" style={styles.link}>Projets</a>
                </div>

                <div style={styles.linkCol}>
                    <h4 style={styles.title}>Entreprise</h4>
                    <a href="#" style={styles.link}>À propos</a>
                    <a href="#" style={styles.link}>Notre mission</a>
                    <a href="#" style={styles.link}>L'équipe</a>
                </div>

                <div style={styles.linkCol}>
                    <h4 style={styles.title}>Légal</h4>
                    <a href="#" style={styles.link}>Mentions légales</a>
                    <a href="#" style={styles.link}>RGPD</a>
                </div>
            </div>
            <div style={styles.bottom}>
                © 2026 UpcycleConnect - PA 2026
            </div>
        </footer>
    );
};

const styles = {
    footer: { backgroundColor: '#111C44', color: '#FFF', padding: '60px 40px 20px 40px', marginTop: 'auto' },
    grid: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' },
    brandCol: { display: 'flex', flexDirection: 'column', gap: '15px' },
    logoPlaceholder: { width: '40px', height: '40px', backgroundColor: '#FFF', borderRadius: '5px' },
    desc: { color: '#A3AED0', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' },
    contact: { fontWeight: 'bold', fontSize: '14px' },
    linkCol: { display: 'flex', flexDirection: 'column', gap: '12px' },
    title: { fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' },
    link: { color: '#A3AED0', textDecoration: 'none', fontSize: '14px', transition: '0.2s' },
    bottom: { borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#707EAE' }
};

export default Footer;
