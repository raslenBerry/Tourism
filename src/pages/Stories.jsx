import { useState } from 'react';
import marketImage from '../../images/sou9.jpg';
import oceanImage from '../../images/woman-sitting-rocks-top-by-ocean.jpg';
import camelImage from '../../images/camel.jpg';
import blueCityImage from '../../images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg';

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stories = [
    {
      id: 1,
      title: 'Hidden Gems of the Medina: A Local\'s Guide',
      excerpt: 'Discover the winding alleys and secret courtyards of Tunis\'s historic medina that tourists rarely find. Learn where locals eat, shop, and gather for authentic Tunisian experiences.',
      category: 'culture',
      categoryLabel: 'Culture',
      date: 'March 15, 2024',
      author: 'Amira Ben Ahmed',
      authorRole: 'Local Guide',
      image: marketImage,
      featured: true,
      content: `The Medina of Tunis is a labyrinth of history, tradition, and authentic Tunisian life. While most visitors stick to the main thoroughfares, there's an entirely different world waiting to be discovered in the lesser-known alleyways.

Start early in the morning when the medina comes alive with locals. The souks are organized by trade - the spice souk (Souk El Attarine) is a sensory explosion of colors and aromas, while the textile souk showcases rich fabrics and traditional garments.

But the real magic lies in the hidden riads - traditional houses with central courtyards. Many have been converted into museums or workshops where artisans still practice centuries-old crafts. A local tea ceremony in one of these spaces is an unforgettable experience.

Pro tip: Get lost intentionally. The narrow streets may seem confusing, but they always lead somewhere interesting. And don't miss the small cafes tucked away near the Great Mosque - the coffee and pastries are authentic and affordable.`,
      readTime: '5 min read',
      views: 3421,
      likes: 286
    },
    {
      id: 2,
      title: 'Sunset in the Sahara: A Desert Love Story',
      excerpt: 'Experience the magic of the Sahara through sunset camel treks, starlit nights, and connections with Bedouin communities. A story of transformation and wonder.',
      category: 'adventure',
      categoryLabel: 'Adventure',
      date: 'March 8, 2024',
      author: 'Marco Rossi',
      authorRole: 'Travel Photographer',
      image: camelImage,
      featured: false,
      content: `The Sahara isn't just a destination - it's a state of mind. When I first saw the golden dunes stretching endlessly under the African sky, I understood why travelers have been captivated by this landscape for centuries.

My desert journey began in Douz, the "Gateway to the Sahara." After a brief market tour and camel introduction, I mounted my first camel and embarked on what would become the most transformative journey of my life.

The first day flew by - literally running at sunset. But the second night, when we camped deep in the dunes and I emerged from my Berber tent to see the Milky Way stretching across the night sky, I experienced a profound silence and peace that's impossible to describe.

The next morning, watching the sun rise over the dunes while sharing tea and dates with our Bedouin guides, I realized that travel isn't about collecting stamps - it's about collecting moments that change your perspective on life.`,
      readTime: '4 min read',
      views: 5123,
      likes: 412
    },
    {
      id: 3,
      title: 'A Culinary Journey: The Flavors of Tunisia',
      excerpt: 'From street food stalls to family kitchens, explore Tunisia\'s rich culinary heritage and learn how to prepare authentic dishes.',
      category: 'food',
      categoryLabel: 'Food & Culture',
      date: 'March 1, 2024',
      author: 'Sophie Levant',
      authorRole: 'Food Blogger',
      image: oceanImage,
      featured: false,
      content: `Tunisian cuisine is a beautiful blend of Mediterranean, Arab, and North African influences. Every meal tells a story of trade routes, cultural exchange, and family traditions.

The journey began with a cooking class in a traditional Tunis home. My instructor, Leila, walked me through the markets to select fresh ingredients - vibrant tomatoes, aromatic cilantro, and unique spices I'd never encountered before.

In her kitchen, I learned the patience required to make proper couscous, the technique of rolling dozens of brik (crispy pastries), and the philosophy behind Tunisian food: simple ingredients, big flavors, and always cooked with love.

But the real education came at family dinners across Tunisia. From humble harissa in a desert village to fresh seafood in Hammamet, every region has its specialty, every family their secret recipe.`,
      readTime: '6 min read',
      views: 4567,
      likes: 389
    },
    {
      id: 4,
      title: 'Beach Escapes: Finding Paradise on the Mediterranean',
      excerpt: 'Discover Tunisia\'s most beautiful beaches beyond the resorts. Secret coves, local favorites, and the perfect Mediterranean escape.',
      category: 'beach',
      categoryLabel: 'Beach & Relaxation',
      date: 'February 20, 2024',
      author: 'Emma Thompson',
      authorRole: 'Travel Journalist',
      image: blueCityImage,
      featured: false,
      content: `Tunisia's coastline is one of the longest and most beautiful in the Mediterranean, yet many visitors stick to the main resort areas. I decided to explore beyond the beaten path and discovered hidden beach paradises.

Starting in Hammamet, I ventured to Nabeul's quieter beaches where locals gather on weekends. The water is impossibly clear, the sand pristine, and unlike the crowded resorts, you can actually have a conversation without shouting.

Further up the coast is Sousse, a beach town with history. The medina is just minutes from the shore, and the combination of culture and beach life creates a perfect balance.

But the real discoveries were the small coves accessible only by boat or along coastal paths. These untouched stretches of Mediterranean paradise are where Tunisian beach life truly reveals itself. Fishermen bring in the day's catch, families gather for picnics, and the sunset is never interrupted by resort entertainment.`,
      readTime: '4 min read',
      views: 3890,
      likes: 305
    },
    {
      id: 5,
      title: 'Wellness Retreats: Traditional Hammams & Modern Spas',
      excerpt: 'Rejuvenate your body and soul in Tunisia\'s centuries-old hammams and luxury spa resorts. A guide to relaxation the Tunisian way.',
      category: 'wellness',
      categoryLabel: 'Wellness',
      date: 'February 10, 2024',
      author: 'Dr. Lisa Chen',
      authorRole: 'Wellness Expert',
      image: oceanImage,
      featured: false,
      content: `The traditional hammam is more than a bath - it's a ritual, a social experience, and a cornerstone of Tunisian culture. I experienced both traditional neighborhood hammams and luxury resort spas to understand Tunisia's approach to wellness.

The neighborhood hammam is pure tradition. Segregated by gender, these steamy chambers are where locals gather weekly. After a visit to one in the heart of Tunis, I understood why this practice has endured for centuries - it's affordable, effective, and profoundly community-oriented.

But Tunisia also offers world-class spa experiences. High-end resorts combine traditional hammam culture with modern wellness practices, offering treatments using local ingredients like argan oil and natural salts.

The philosophy is consistent: wellness isn't about luxury; it's about balance, natural ingredients, and the understanding that taking care of yourself is not indulgent - it's essential.`,
      readTime: '5 min read',
      views: 2876,
      likes: 234
    },
    {
      id: 6,
      title: 'Photography Tales: Capturing Tunisia\'s Soul',
      excerpt: 'Behind-the-scenes stories from professional photographers. Where to find the best light, the most authentic moments, and the most photogenic destinations.',
      category: 'photography',
      categoryLabel: 'Photography',
      date: 'January 28, 2024',
      author: 'Hassan Bourguiba',
      authorRole: 'Professional Photographer',
      image: camelImage,
      featured: false,
      content: `Photography in Tunisia is a dream. Every corner compounds a story, every sunset rivals the last, and the light - consistently golden and warm - seems designed for the camera.

The Sahara at sunrise is technically perfect but emotionally transcendent. The sand dunes create natural reflectors, while the color palette shifts from purple to gold as the sun rises. It's photographer heaven.

But the true magic lies in the candid moments. A vendor in the souk mid-laugh, children playing in a coastal village, an elderly craftsman at his loom - these unguarded moments tell deeper stories than any landscape.

My advice to travel photographers: arrive early, stay late, respect your subjects, and always ask permission. Tunisia's people are beautiful - inside and out - and they appreciate genuine interest in their lives and cultures.`,
      readTime: '5 min read',
      views: 3200,
      likes: 267
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === selectedCategory);

  const featuredStory = stories.find(s => s.featured && (selectedCategory === 'all' || s.category === selectedCategory));

  return (
    <section className="page stories-page">
      <div className="page-head">
        <h2>Travel Stories</h2>
        <p>Real experiences and inspiring tales from travelers and experts</p>
      </div>

      {/* ===== CATEGORY FILTER ===== */}
      <div style={{ marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className={selectedCategory === 'all' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('all')}
        >
          All Stories
        </button>
        <button
          className={selectedCategory === 'culture' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('culture')}
        >
          Culture
        </button>
        <button
          className={selectedCategory === 'adventure' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('adventure')}
        >
          Adventure
        </button>
        <button
          className={selectedCategory === 'food' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('food')}
        >
          Food & Culture
        </button>
        <button
          className={selectedCategory === 'beach' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('beach')}
        >
          Beach
        </button>
        <button
          className={selectedCategory === 'wellness' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('wellness')}
        >
          Wellness
        </button>
        <button
          className={selectedCategory === 'photography' ? 'btn btn-primary' : 'btn btn-outline'}
          onClick={() => setSelectedCategory('photography')}
        >
          Photography
        </button>
      </div>

      {/* ===== FEATURED STORY ===== */}
      {featuredStory && (
        <div className="blog-featured">
          <img src={featuredStory.image} alt={featuredStory.title} className="blog-featured-image" />
          <div className="blog-featured-content">
            <span className="blog-featured-category">{featuredStory.categoryLabel}</span>
            <div className="blog-featured-meta">
              <div className="blog-featured-meta-item">
                📅 {featuredStory.date}
              </div>
              <div className="blog-featured-meta-item">
                ✍️ {featuredStory.author}
              </div>
              <div className="blog-featured-meta-item">
                👁️ {featuredStory.views.toLocaleString()} views
              </div>
            </div>
            <h2>{featuredStory.title}</h2>
            <p className="blog-excerpt">{featuredStory.excerpt}</p>
            <span className="read-more">
              Read Full Story
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </span>
          </div>
        </div>
      )}

      {/* ===== STORIES GRID ===== */}
      <div className="blog-grid" style={{ marginTop: '3rem' }}>
        {filteredStories.filter(s => !s.featured).map(story => (
          <div key={story.id} className="blog-card">
            <img src={story.image} alt={story.title} className="blog-card-image" />
            <div className="blog-card-content">
              <span className="blog-card-category">{story.categoryLabel}</span>
              <div className="blog-card-date">
                {story.date} • {story.readTime}
              </div>
              <h3>{story.title}</h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
                {story.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  By <strong>{story.author}</strong>
                </div>
                <span className="read-more" style={{ fontSize: '0.9rem' }}>
                  Read More →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CTA SECTION ===== */}
      <section style={{ marginTop: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, #e6f0ff, #e6fdf7)', padding: '3rem', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Have Your Own Story?</h2>
        <p style={{ marginBottom: '2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Share your Tunisia experience with our community. We'd love to feature your story, photos, and insights!
        </p>
        <button className="btn btn-primary btn-lg">Submit Your Story</button>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section style={{ marginTop: '3rem', background: '#111827', color: 'white', padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem' }}>Never Miss a Story</h3>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Subscribe to our newsletter for travel stories, expert tips, and exclusive offers delivered weekly.
        </p>
        <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              minWidth: '250px',
              padding: '0.75rem 1rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem'
            }}
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </section>
  );
}

export default Stories;
