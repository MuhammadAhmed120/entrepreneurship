export default function ProductPreview() {
  const products = [
    {
      name: "Oversized Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      name: "Ergonomic Cushion",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      name: "Comfort Kits",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <section id="products" className="py-24" style={{ backgroundColor: '#FAF7F4' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Our Products
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            Thoughtfully designed for your everyday comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 111, 71, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(139, 111, 71, 0.1)'}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: '400', color: '#3D2E28' }}>
                  {product.name}
                </h3>
                <span className="inline-block px-6 py-2 rounded-full" style={{ fontSize: '0.875rem', backgroundColor: '#F0E8DD', color: '#8B6F47' }}>
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
