import Image from 'next/image';
import Link from 'next/link';

const locations = [
  {
    id: 1,
    country: 'USA',
    city: 'Boston, MA',
    description: "BEC US program will be hosted on MIT/Harvard/BU campus with dormitory, classrooms, and meals provided. All courses are designed and taught by MIT and Harvard professors and students. ",
    imageSrc: '/图片1.png',
    altText: 'View of Rennes, France',
    link: '/france'
  },
  {
    id: 2,
    country: 'China',
    city: 'Beijing, China',
    description: "BEC China program will be hosted on Tsinghua/Peking campus with dormitory, classrooms, and meals provided. All courses are designed and taught by Tsinghua and Peking University professors and students. ",
    imageSrc: '/图片2.png',
    altText: 'View of Zaragoza, Spain',
    link: '/spain'
  },
];

export default function LocationCards() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {locations.map((location, index) => (
          <div
            key={location.id}
            className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 gap-4 ${
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
              {/* <Link
                href={location.link}
                className="inline-block bg-sya-blue hover:bg-sya-navy text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                Learn more
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
