export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Can't wait for the launch! The concept of comfort-first design is exactly what I need for my work-from-home setup.",
      rating: 5
    },
    {
      name: "Alex R.",
      text: "Finally, a brand that understands the importance of comfort in productivity. Looking forward to trying the hoodies!",
      rating: 5
    },
    {
      name: "Jamie L.",
      text: "The philosophy behind Komfora resonates with me. Quality comfort products are hard to find, excited for this!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24" style={{ backgroundColor: '#FAF7F4' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            What People Say
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            Early feedback from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-500"
              style={{ backgroundColor: '#F5EFE7', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(139, 111, 71, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(139, 111, 71, 0.1)'}
            >
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#A68968' }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#3D2E28', fontStyle: 'italic' }}>
                "{review.text}"
              </p>
              <p style={{ fontSize: '0.9375rem', fontWeight: '400', color: '#7A6A5C' }}>
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
