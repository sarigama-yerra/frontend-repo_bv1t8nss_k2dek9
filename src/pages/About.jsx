export default function About() {
  const stats = [
    { label: 'Years in business', value: '6+' },
    { label: 'Events powered', value: '12k+' },
    { label: 'Avg. ROI for clients', value: '4.3x' },
  ]

  return (
    <main className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          We’re a team of event operators, designers, and engineers who’ve lived the pain of manual workflows. Our mission is to make world‑class event tools accessible to every organizer—so you can focus on experiences, not admin.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
