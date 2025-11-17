export default function CTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to elevate your next event?</h3>
            <p className="text-gray-600 mt-2">Let our team show you how organizers grow revenue with our platform.</p>
          </div>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 text-center">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  )
}
