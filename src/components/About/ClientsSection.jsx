export default function ClientsSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-green-500 font-semibold mb-2 text-sm sm:text-base">
            OUR CLIENTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Have More Than 150+
            <br className="hidden sm:block" />
            Global Clients
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center opacity-70">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
          ].map((logo, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={logo}
                alt={`Client ${i + 1}`}
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
