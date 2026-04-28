export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '300', color: '#6B5E52' }}>
          Build Your Own Comfort Experience
        </h2>
        <p className="mb-8" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#8B7E6F' }}>
          Join our community and be the first to know when we launch.
        </p>
        <button className="px-10 py-4 bg-[#6B5E52] text-[#F5F1ED] rounded-full transition-all duration-300 hover:bg-[#544A3F] hover:shadow-xl hover:scale-105 mb-6">
          Follow Us
        </button>
        <p style={{ fontSize: '1rem', color: '#8B7E6F' }}>
          @komfora.official
        </p>
      </div>
    </section>
  );
}
