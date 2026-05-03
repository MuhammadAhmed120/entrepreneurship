export default function Team() {
  const team = [
    {
      name: "Sobia Arshad Hussain",
      note: "Focused on building the vision and strategy of Komfora."
    },
    {
      name: "Anishay Sheikh",
      note: "Worked on design, branding, and user experience."
    },
    {
      name: "Muhammad Ahmed Khan",
      note: "Handled research, operations, and development."
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Meet the Team
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            The people behind Komfora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-10 text-center transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundColor: '#FAF7F4', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(139, 111, 71, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(139, 111, 71, 0.1)'}
            >
              <div className="mb-6 mx-auto w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A68968 0%, #8B6F47 100%)' }}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: '400', color: '#3D2E28' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#7A6A5C' }}>
                {member.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
