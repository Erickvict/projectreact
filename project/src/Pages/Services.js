import Footer from "./Footer.js";

function Services() {
  return (
    <>
       <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
         
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Daily Rentals
            </h2>
            <p className="text-gray-600">
              Flexible daily car rentals for all your short-term travel needs.
            </p>
          </div>
        
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Weekly & Monthly Rentals
            </h2>
            <p className="text-gray-600">
              Affordable long-term rental options for extended use.
            </p>
          </div>
         
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Luxury Car Rentals
            </h2>
            <p className="text-gray-600">
              Rent premium cars for weddings, parties, or business events.
            </p>
          </div>
         
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Airport Transfers
            </h2>
            <p className="text-gray-600">
              Hassle-free airport pickups and drop-offs, on time, every time.
            </p>
          </div>
        
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl font-bold">✔</span>
              <p className="text-gray-600">
                Well-maintained vehicles for a smooth driving experience.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl font-bold">✔</span>
              <p className="text-gray-600">
                Competitive pricing with no hidden charges.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl font-bold">✔</span>
              <p className="text-gray-600">
                24/7 customer support and roadside assistance.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
       <Footer/>
    </>
  );
}

export default Services;