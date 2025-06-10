export default function LegacyPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* === START: Hero Section === */}
      <section id="hero" className="h-screen relative overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/assets/videos/hero_reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Gérard El Bitar</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Award-winning filmmaker and musician translating lived experience into compelling film and sound
          </p>
          <div className="space-x-4">
            <a href="#portfolio" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              View Portfolio
            </a>
            <a href="#contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* === END: Hero Section === */}

      {/* ADD REST OF YOUR PAGE COMPONENTS BELOW */}
    </main>
  );
}
