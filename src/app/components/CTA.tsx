export default function CTA() {
  return (
    <section className="py-24" style={{ backgroundColor: '#FAF7F4' }}>
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '300', color: '#8B6F47' }}>
          Build Your Own Comfort Experience
        </h2>
        <p className="mb-8" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#7A6A5C' }}>
          Join our community and be the first to know when we launch.
        </p>
        <button
          className="px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 mb-6"
          style={{ backgroundColor: '#8B6F47', color: '#FFFFFF' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6F5838'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B6F47'}
        >
          Follow Us
        </button>
        <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
          @komfora.official
        </p>
      </div>
    </section>
  );
}
