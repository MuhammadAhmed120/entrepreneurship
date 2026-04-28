export default function Journey() {
  const milestones = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Born from a simple belief: comfort is not a luxury, but a necessity for modern living."
    },
    {
      year: "2025",
      title: "Research & Development",
      description: "Months of testing materials, designs, and comfort principles with real users in their homes."
    },
    {
      year: "2026",
      title: "Launching Soon",
      description: "Ready to bring our vision of everyday comfort to homes around the world."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#6B5E52' }}>
            Our Journey
          </h2>
          <p style={{ fontSize: '1rem', color: '#8B7E6F' }}>
            Building comfort, one moment at a time
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#7F9E7C]/30 hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className={`relative mb-16 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="inline-block px-4 py-2 bg-[#7F9E7C] text-white rounded-full mb-4" style={{ fontSize: '0.875rem' }}>
                    {milestone.year}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.375rem', fontWeight: '400', color: '#6B5E52' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#8B7E6F' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-[#7F9E7C] rounded-full border-4 border-[#F5F1ED] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
