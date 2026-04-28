export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F1ED]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1687806556074-5e8c7a985c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Person relaxing in comfort"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1ED]/60 to-[#F5F1ED]/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="mb-6 tracking-tight" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '300', letterSpacing: '0.02em' }}>
          Komfora
        </h1>

        <p className="mb-4 tracking-wide" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: '400', color: '#6B5E52' }}>
          Comfort, Redefined.
        </p>

        <p className="mb-12 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#8B7E6F', lineHeight: '1.8' }}>
          Designed for Relaxation, Focus & Everyday Comfort
        </p>

        <button className="px-10 py-4 bg-[#6B5E52] text-[#F5F1ED] rounded-full transition-all duration-300 hover:bg-[#544A3F] hover:shadow-xl hover:scale-105">
          Explore Komfora
        </button>
      </div>
    </section>
  );
}
