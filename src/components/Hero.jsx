import heroImage from "../assets/images/hero2.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
         Capturing Beautiful Wedding Stories
        </h1>

        <p className="mt-6 max-w-2xl text-lg">
          We capture emotions, traditions and timeless memories so that
          your wedding story can be relived for generations.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            View Portfolio
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;