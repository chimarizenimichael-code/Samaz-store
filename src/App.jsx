export default function SamazWebsite() {
  const products = [
    { name: 'Smart Phone', price: '$500', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200' },
    { name: 'Premium Blender', price: '$120', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200' },
    { name: 'Smart Watch', price: '$180', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200' },
    { name: 'Microwave', price: '$250', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200' },
  ]

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-black text-2xl">S</div>
            <div>
              <h1 className="font-bold text-lg md:text-2xl">SAMAZ</h1>
              <p className="text-sm text-slate-300">Kitchen Ware & Electronics</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-red-500">Home</a>
            <a href="#electronics" className="hover:text-red-500">Electronics</a>
            <a href="#kitchenware" className="hover:text-red-500">Kitchenware</a>
            <a href="#wearables" className="hover:text-red-500">Wearables</a>
            <a href="#products" className="hover:text-red-500">Products</a>
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400')"}}>
        <div className="max-w-3xl px-6 animate-pulse">
          <h1 className="text-5xl md:text-7xl font-black mb-6">SAMAZ STORE</h1>
          <p className="text-xl text-slate-200 mb-8">Premium Electronics, Kitchenware & Smart Wearables</p>
          <a href="#products" className="bg-red-600 hover:bg-blue-600 transition px-8 py-4 rounded-full font-bold">Shop Now</a>
        </div>
      </section>

      <section id="electronics" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-14">Electronics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 transition shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200" className="h-72 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Laptops</h3>
              <p className="text-slate-300">Modern high performance laptops.</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 transition shadow-2xl">
            <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200" className="h-72 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Smart Phones</h3>
              <p className="text-slate-300">Latest Android and iPhone devices.</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 transition shadow-2xl">
            <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200" className="h-72 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Accessories</h3>
              <p className="text-slate-300">Chargers, headphones and gadgets.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kitchenware" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-14">Kitchenware</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="https://images.unsplash.com/photo-1584990347449-a53f95f0fd6f?q=80&w=1200" className="h-96 w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Premium Kitchen Essentials</h3>
              <p className="text-slate-300 text-lg leading-8">SAMAZ provides premium pots, pans, blenders, kettles, microwaves and stylish modern kitchen appliances.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="wearables" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-14">Wearables</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Smart Wearables</h3>
            <p className="text-slate-300 text-lg leading-8">Discover modern smart watches and wearable devices designed for style, productivity and fitness.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200" className="h-96 w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-14">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition">
                <img src={product.image} className="h-72 w-full object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-red-500 text-xl font-semibold mb-4">{product.price}</p>
                  <button className="bg-red-600 hover:bg-blue-600 transition px-6 py-3 rounded-full font-bold w-full">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200" className="rounded-3xl shadow-2xl" />
          <div>
            <h2 className="text-5xl font-black text-red-500 mb-8">About SAMAZ</h2>
            <p className="text-slate-300 leading-9 text-lg">SAMAZ Kitchen Ware & Electronics is a modern online business focused on providing premium electronics, kitchenware and wearable technology with stylish design and excellent customer service.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-14">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <form className="bg-slate-950 p-8 rounded-3xl shadow-2xl space-y-5">
              <input className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700" placeholder="Full Name" />
              <input className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700" placeholder="Email Address" />
              <textarea className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 h-40" placeholder="Message"></textarea>
              <button className="bg-red-600 hover:bg-blue-600 transition px-8 py-4 rounded-full font-bold w-full">Send Message</button>
            </form>
            <div className="bg-slate-950 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Admin Dashboard</h3>
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <h4 className="text-4xl font-black text-red-500">250+</h4>
                  <p>Products</p>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <h4 className="text-4xl font-black text-red-500">120+</h4>
                  <p>Orders</p>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <h4 className="text-4xl font-black text-red-500">80+</h4>
                  <p>Customers</p>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <h4 className="text-4xl font-black text-red-500">24/7</h4>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-8">Website QR Code</h2>
        <p className="text-slate-300 mb-10">Customers can scan the QR code to open your website instantly.</p>
        <div className="flex justify-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://chimarizenimichael-code.github.io/samaz-store" className="bg-white p-4 rounded-3xl" />
        </div>
      </section>

      <footer className="bg-black py-10 text-center border-t border-slate-800">
        <p className="text-slate-400">© 2026 SAMAZ KITCHEN WARE & ELECTRONICS — All Rights Reserved.</p>
      </footer>
    </div>
  )
}
