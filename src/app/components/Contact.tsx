import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", inquiryType: "general", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#FAF7F4' }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '300', color: '#8B6F47' }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: '1rem', color: '#7A6A5C' }}>
            We'd love to hear from you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10" style={{ backgroundColor: '#FFFFFF', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(139, 111, 71, 0.1)' }}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2" style={{ fontSize: '0.9375rem', color: '#3D2E28' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
              style={{ fontSize: '1rem', color: '#3D2E28', backgroundColor: '#F5EFE7', border: '1px solid rgba(139, 111, 71, 0.2)' }}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 111, 71, 0.3)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2" style={{ fontSize: '0.9375rem', color: '#3D2E28' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
              style={{ fontSize: '1rem', color: '#3D2E28', backgroundColor: '#F5EFE7', border: '1px solid rgba(139, 111, 71, 0.2)' }}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 111, 71, 0.3)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="inquiryType" className="block mb-2" style={{ fontSize: '0.9375rem', color: '#3D2E28' }}>
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
              style={{ fontSize: '1rem', color: '#3D2E28', backgroundColor: '#F5EFE7', border: '1px solid rgba(139, 111, 71, 0.2)' }}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 111, 71, 0.3)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <option value="general">General Inquiry</option>
              <option value="product">Product Question</option>
              <option value="partnership">Partnership</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block mb-2" style={{ fontSize: '0.9375rem', color: '#3D2E28' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all resize-none"
              style={{ fontSize: '1rem', color: '#3D2E28', backgroundColor: '#F5EFE7', border: '1px solid rgba(139, 111, 71, 0.2)' }}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 111, 71, 0.3)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ fontSize: '1.125rem', fontWeight: '400', backgroundColor: '#8B6F47', color: '#FFFFFF' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6F5838'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B6F47'}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
