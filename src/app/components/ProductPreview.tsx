export default function ProductPreview() {
  const products = [
    {
      name: "Oversized Hoodies",
      description: "Soft, breathable fabric designed for ultimate comfort and relaxation.",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      name: "Ergonomic Cushions",
      description: "Perfectly contoured support for work, rest, and everything in between.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      name: "Comfort Kits",
      description: "Curated bundles to create your personal comfort sanctuary.",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#6B5E52' }}>
            Comfort Essentials
          </h2>
          <p style={{ fontSize: '1rem', color: '#8B7E6F' }}>
            Thoughtfully designed for your everyday comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                {console.log("product.image -> ", product.image)}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '400', color: '#6B5E52' }}>
                  {product.name}
                </h3>
                <p className="mb-6" style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#8B7E6F' }}>
                  {product.description}
                </p>
                <span className="inline-block px-6 py-2 bg-[#F5F1ED] text-[#6B5E52] rounded-full" style={{ fontSize: '0.875rem' }}>
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
