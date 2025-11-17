export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Event solutions that scale with your ambition
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Plan, promote, and power unforgettable events with an all‑in‑one platform for ticketing, CRM, analytics, and on‑site ops.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 text-center">
                Get a demo
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 text-center">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-gray-600">
              <div>
                <p className="text-2xl font-bold text-gray-900">1M+</p>
                <p className="text-sm">Tickets sold</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8,500</p>
                <p className="text-sm">Global organizers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">99.99%</p>
                <p className="text-sm">Uptime SLA</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200/40 blur-2xl rounded-3xl" />
              <img src="/hero-dashboard.png" alt="Dashboard" className="relative rounded-2xl shadow-lg border border-gray-100"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
