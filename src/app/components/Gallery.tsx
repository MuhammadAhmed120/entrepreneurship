export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1671104695361-8b16c458b552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Minimal study desk with laptop"
    },
    {
      url: "https://images.unsplash.com/photo-1713352533011-601ad0689860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Cozy corner with warm lighting"
    },
    {
      url: "https://images.unsplash.com/photo-1713623640591-c30b2bc680c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Cozy bed with blankets and pillows"
    },
    {
      url: "https://images.unsplash.com/photo-1607292684272-c50c6d5b45bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Person relaxing comfortably"
    },
    {
      url: "https://images.unsplash.com/photo-1726938756960-5b348c48676a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Couch with blanket and books"
    },
    {
      url: "https://images.unsplash.com/photo-1676553801375-86fd07ae9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Clean workspace with natural light"
    },
    {
      url: "https://images.unsplash.com/photo-1773061941695-43568f71bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Coffee and comfort corner"
    },
    {
      url: "https://images.unsplash.com/photo-1699976106369-8de97be08fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Minimal bedroom aesthetic"
    },
    {
      url: "https://images.unsplash.com/photo-1722340319321-f73f2b96e0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Books and cozy textures"
    }
  ];

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Gallery
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            Moments of comfort and inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden transition-all duration-500 hover:scale-105"
              style={{ borderRadius: '1rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(139, 111, 71, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(139, 111, 71, 0.1)'}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
