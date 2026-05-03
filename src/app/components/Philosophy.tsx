export default function Philosophy() {
  const modes = [
    {
      title: "Focus Mode",
      description: "Create your optimal environment for deep work and concentration. Designed to help you enter flow state effortlessly.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Relax Mode",
      description: "Unwind and let go of stress. Every element crafted to bring peace and tranquility to your space and mind.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Recharge Mode",
      description: "Restore your energy and well-being. Comfort that supports your body and mind through rest and recovery.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Our Philosophy
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            Three pillars of everyday comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {modes.map((mode, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center" style={{ color: '#A68968' }}>
                {mode.icon}
              </div>
              <h3 className="mb-4" style={{ fontSize: '1.375rem', fontWeight: '400', color: '#3D2E28' }}>
                {mode.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#7A6A5C' }}>
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
