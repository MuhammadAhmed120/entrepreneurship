export default function Hero() {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578910338777-0a8b54fec4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Person relaxing in comfort"
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="mb-6 tracking-tight" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '300', letterSpacing: '0.05em', color: '#FFF9F2' }}>
          Komfora
        </h1>

        <p className="mb-12 tracking-wide" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '300', color: '#F5EFE7' }}>
          Comfort, Redefined.
        </p>

        <button
          onClick={scrollToProducts}
          className="px-12 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
          style={{ fontSize: '1.125rem', fontWeight: '400', backgroundColor: '#8B6F47', color: '#FFFFFF' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6F5838'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B6F47'}
        >
          Explore
        </button>
      </div>
    </section>
  );
}
