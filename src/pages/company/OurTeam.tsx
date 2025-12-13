import PageLayout from '../../components/PageLayout'

export default function OurTeam() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Lead Guide',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former park ranger with 10+ years experience. Has hiked every trail in the Bay Area with her rescue pup, Luna.',
      funFact: 'Can identify 50+ bird species by their calls',
    },
    {
      name: 'Marcus Chen',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dog training specialist and logistics expert. Ensures every adventure runs smoothly from pickup to drop-off.',
      funFact: 'His golden retriever Max has been on 200+ adventures',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Adventure Guide',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified dog trainer and wilderness first responder. Specializes in anxious dogs and first-time adventurers.',
      funFact: 'Completed the John Muir Trail with her husky',
    },
    {
      name: 'David Park',
      role: 'Adventure Guide',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professional photographer turned dog adventurer. Captures the most amazing photos of your pup in action.',
      funFact: 'His photos have been featured in National Geographic',
    },
    {
      name: 'Jessica Thompson',
      role: 'Adventure Guide',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former veterinary technician with expertise in dog behavior. Leads our beach day adventures.',
      funFact: 'Has fostered over 30 rescue dogs',
    },
    {
      name: 'Ryan O\'Connor',
      role: 'Adventure Guide',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mountain guide and camping expert. Leads our overnight mountain adventures.',
      funFact: 'Has summited every major peak in California',
    },
  ]

  return (
    <PageLayout
      title="Our Team"
      subtitle="Meet the passionate dog lovers who make every adventure unforgettable."
      heroColor="ocean"
      breadcrumb={[{ name: 'Our Team', href: '/team' }]}
    >
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-sand-600 leading-relaxed">
          Every member of our team is a certified pet first aid responder, experienced outdoor guide, 
          and most importantly — a genuine dog lover. We treat every pup like our own.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-sand-900">{member.name}</h3>
              <p className="text-forest-600 font-medium mb-3">{member.role}</p>
              <p className="text-sand-600 text-sm mb-4">{member.bio}</p>
              <div className="bg-sand-50 rounded-lg p-3">
                <p className="text-sm text-sand-500">
                  <span className="font-semibold">Fun fact:</span> {member.funFact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join Team CTA */}
      <div className="mt-16 bg-gradient-to-r from-ocean-500 to-forest-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Want to Join Our Pack?</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate dog lovers to join our team. Check out our open positions!
        </p>
        <a
          href="/careers"
          className="inline-flex items-center gap-2 bg-white text-ocean-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          View Careers
        </a>
      </div>
    </PageLayout>
  )
}

