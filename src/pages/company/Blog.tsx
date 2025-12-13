import PageLayout from '../../components/PageLayout'

export default function Blog() {
  const posts = [
    {
      title: '10 Tips for Your Dog\'s First Beach Adventure',
      excerpt: 'Taking your pup to the beach for the first time? Here\'s everything you need to know to make it a splashing success.',
      image: 'https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Tips & Tricks',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
    },
    {
      title: 'The Best Dog-Friendly Trails in Marin County',
      excerpt: 'From Mount Tam to Point Reyes, discover the most beautiful trails where your pup can explore off-leash.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Trail Guides',
      date: 'Dec 5, 2024',
      readTime: '8 min read',
    },
    {
      title: 'Why Dogs Need Adventure (According to Science)',
      excerpt: 'Research shows that regular outdoor adventures can improve your dog\'s mental health, behavior, and even lifespan.',
      image: 'https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Dog Health',
      date: 'Nov 28, 2024',
      readTime: '6 min read',
    },
    {
      title: 'Preparing Your Pup for Overnight Camping',
      excerpt: 'Planning a camping trip with your dog? Here\'s how to prepare for a safe and enjoyable outdoor overnight.',
      image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Camping',
      date: 'Nov 20, 2024',
      readTime: '7 min read',
    },
    {
      title: 'Meet Cooper: Our November Dog of the Month',
      excerpt: 'This golden retriever has been on 50+ adventures with PetVenture. Here\'s his story.',
      image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Community',
      date: 'Nov 15, 2024',
      readTime: '4 min read',
    },
    {
      title: 'Winter Adventures: Keeping Your Dog Active in the Cold',
      excerpt: 'Don\'t let shorter days slow down your pup! Here are our favorite winter activities for adventurous dogs.',
      image: 'https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Seasonal',
      date: 'Nov 8, 2024',
      readTime: '5 min read',
    },
  ]

  const categories = ['All', 'Tips & Tricks', 'Trail Guides', 'Dog Health', 'Camping', 'Community', 'Seasonal']

  return (
    <PageLayout
      title="The Adventure Blog"
      subtitle="Tips, stories, and inspiration for adventurous dogs and their humans."
      heroColor="forest"
      breadcrumb={[{ name: 'Blog', href: '/blog' }]}
    >
      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              index === 0
                ? 'bg-forest-500 text-white'
                : 'bg-sand-100 text-sand-600 hover:bg-sand-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-video lg:aspect-auto overflow-hidden">
            <img 
              src={posts[0].image} 
              alt={posts[0].title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-forest-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium">
                {posts[0].category}
              </span>
              <span className="text-sand-500 text-sm">{posts[0].date}</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-sand-900 mb-4">{posts[0].title}</h2>
            <p className="text-sand-600 mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sand-500 text-sm">{posts[0].readTime}</span>
              <button className="text-forest-600 font-semibold hover:text-forest-700 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.slice(1).map((post, index) => (
          <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-sand-100 text-sand-700 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-sand-400 text-xs">{post.date}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-sand-900 mb-2">{post.title}</h3>
              <p className="text-sand-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sand-400 text-xs">{post.readTime}</span>
                <button className="text-forest-600 text-sm font-semibold hover:text-forest-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-forest-500 to-ocean-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Get Adventure Updates</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for trail guides, tips, and stories delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-full text-sand-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-forest-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </PageLayout>
  )
}

