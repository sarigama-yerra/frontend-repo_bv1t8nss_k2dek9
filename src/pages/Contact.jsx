import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')
      setDone(true)
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  return (
    <main id="contact" className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
        <p className="mt-2 text-gray-600">Tell us about your event goals and we’ll reach out within 24 hours.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input value={form.name} onChange={(e) => update('name', e.target.value)} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input value={form.company} onChange={(e) => update('company', e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea value={form.message} onChange={(e) => update('message', e.target.value)} required rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button disabled={loading} className="mt-2 inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {done && <p className="text-green-600 text-sm">Thanks! We’ll be in touch shortly.</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
          </form>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Why teams choose us</h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm list-disc list-inside">
              <li>Enterprise-grade reliability and compliance</li>
              <li>Modular platform that grows with you</li>
              <li>Dedicated support from event experts</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-700">Reach us directly</h4>
              <p className="text-sm text-gray-600">hello@eventify.app</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
