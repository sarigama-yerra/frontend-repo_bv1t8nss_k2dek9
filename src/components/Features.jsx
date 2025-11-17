export default function Features() {
  const features = [
    {
      title: 'End-to-end ticketing',
      desc: 'Tiered pricing, promo codes, check-in, and instant payouts with fraud protection.',
    },
    {
      title: 'CRM built for events',
      desc: 'Segment audiences, automate campaigns, and track engagement across channels.',
    },
    {
      title: 'Real-time analytics',
      desc: 'Dashboards that surface sales trends, no-shows, and on-site conversions.',
    },
    {
      title: 'On-site ops',
      desc: 'Badge printing, box office, crew passes, and access control—all synced.',
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Everything you need to run events</h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Purpose-built tools that work beautifully together so you can move faster and delight attendees.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
