export default function Journey() {
  const milestones = [
    {
      month: "Phase 1",
      title: "Idea Formation",
      description: "Identified the gap in Pakistan’s market for a comfort-first lifestyle brand focusing on students, freelancers, and home-based users."
    },
    {
      month: "Phase 2",
      title: "Concept Development",
      description: "Developed Komfora as a comfort ecosystem including wearable hoodies, ergonomic cushions, and comfort kits for study, work, and relaxation."
    },
    {
      month: "Phase 3",
      title: "Business Model Design",
      description: "Created seasonal drop strategy, comfort bundles, mood-based collections, and a customer retention system instead of subscriptions."
    },
    {
      month: "Phase 4",
      title: "Brand Identity & Design",
      description: "Designed Komfora branding, selected warm beige-brown color palette, and created UI/UX concepts for website and marketing materials."
    },
    {
      month: "Phase 5",
      title: "Validation & Financial Planning",
      description: "Prepared startup cost, ROI, payback period, and per-unit cost estimates based on market research and supplier assumptions."
    },
    {
      month: "Phase 6",
      title: "Current Stage – Presentation Ready",
      description: "Finalized Business Model Canvas, website structure, branding, flyer design, and ready for academic presentation and approval."
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#FAF7F4' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Our Journey
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            Building comfort, one moment at a time
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block" style={{ backgroundColor: 'rgba(166, 137, 104, 0.3)' }}></div>

          {milestones.map((milestone, index) => (
            <div key={index} className={`relative mb-16 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:pl-12'}`}>
                <div className="p-8" style={{ backgroundColor: '#FFFFFF', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}>
                  <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ fontSize: '0.875rem', backgroundColor: '#8B6F47', color: '#FFFFFF' }}>
                    {milestone.month}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.375rem', fontWeight: '400', color: '#3D2E28' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#7A6A5C' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 hidden md:block" style={{ backgroundColor: '#8B6F47', borderColor: '#FAF7F4' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
