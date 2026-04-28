export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Focus"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Relax"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: "Recharge"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '2', color: '#6B5E52' }}>
            Komfora is a comfort-first lifestyle brand dedicated to creating products and experiences
            that help you relax, focus, and recharge. We believe that true productivity comes from
            moments of rest, and that everyday comfort is the foundation of well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#7F9E7C]">
                {value.icon}
              </div>
              <p style={{ fontSize: '1.125rem', fontWeight: '400', color: '#6B5E52' }}>
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
