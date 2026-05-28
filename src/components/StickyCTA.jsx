import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      const top = document.getElementById('founders')?.offsetTop || Infinity;
      setVisible(window.scrollY > h * 0.8 && window.scrollY < top - 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#founders"
      className={`sticky-cta${visible ? ' sticky-cta--visible' : ''}`}
      onClick={(e) => { e.preventDefault(); document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' }); }}>
      <span>Cercle Zahowa Privilège</span>
      <span className="sticky-cta__arrow">→</span>
    </a>
  );
}
