import { useEffect, useState } from 'react'

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/blogs`)
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900">Blogs</h1>
        <p className="mt-2 text-gray-600">Insights and playbooks for modern event teams.</p>

        {loading ? (
          <p className="mt-10 text-gray-500">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="mt-10 text-gray-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {posts.map((p) => (
              <article key={p.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                {p.cover_image && (
                  <img src={p.cover_image} alt="" className="w-full h-36 object-cover rounded-md mb-4" />
                )}
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 text-xs text-gray-500">By {p.author}</div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
