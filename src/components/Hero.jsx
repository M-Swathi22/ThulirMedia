import heroImage from "../assets/images/hero2.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-brand-dark"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
          Capturing Beautiful <span className="text-brand-red">Wedding Stories</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-brand-gray">
          We capture emotions, traditions and timeless memories so that
          your wedding story can be relived for generations.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">

          {/* Primary Button */}
          <button className="bg-brand-red px-7 py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-brand-redhover transition-all duration-300 shadow-lg">
            View Portfolio
          </button>

          {/* Secondary Button */}
          <button className="border border-white px-7 py-3 rounded-md uppercase tracking-wide hover:bg-brand-red hover:border-brand-red transition-all duration-300">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;