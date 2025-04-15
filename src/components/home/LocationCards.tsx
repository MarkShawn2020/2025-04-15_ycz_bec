import Image from 'next/image';
import Link from 'next/link';

const locations = [
  {
    id: 1,
    country: 'France',
    city: 'Rennes, France',
    description: 'Rennes, the capital of Brittany, allows you to experience the distinct Breton culture as you simultaneously master the French language and discover Frances place in the world.',
    imageSrc: '/france-hero.jpeg',
    altText: 'View of Rennes, France',
    link: '/france'
  },
  {
    id: 2,
    country: 'Spain',
    city: 'Zaragoza, Spain',
    description: 'Zaragoza is Spains fifth-largest city and is located halfway between Madrid and Barcelona. Relatively unspoiled by tourism, it is an ideal location for immersing yourself in the local community.',
    imageSrc: '/spain-hero.jpeg',
    altText: 'View of Zaragoza, Spain',
    link: '/spain'
  },
  {
    id: 3,
    country: 'Italy',
    city: 'Viterbo, Italy',
    description: 'Viterbo provides the ideal launching point - big enough to offer an exciting day-to-day life, small enough to feel like home and only a 90-minute train ride from Rome.',
    imageSrc: '/italy-hero.jpeg',
    altText: 'View of Viterbo, Italy',
    link: '/italy'
  }
];

export default function LocationCards() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {locations.map((location, index) => (
          <div
            key={location.id}
            className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-80 md:h-96 mb-8 md:mb-0">
              <Image
                src={location.imageSrc}
                alt={location.altText}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bebas">{location.country}</h2>
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 md:px-8 ${index % 2 === 1 ? 'md:pr-0' : 'md:pl-0'}`}>
              <h3 className="text-2xl font-bebas text-sya-blue uppercase mb-4">{location.city}</h3>
              <p className="text-gray-700 mb-6">{location.description}</p>
              <Link
                href={location.link}
                className="inline-block bg-sya-blue hover:bg-sya-navy text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
