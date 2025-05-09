import React from 'react';
import Image from 'next/image';

interface TestimonialsSectionProps {
  id: string;
}

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Patient',
    quote: 'The dental team is amazing! They made me feel comfortable during my treatment and explained everything clearly. My new smile looks fantastic!',
    image: '/images/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg'
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    role: 'Patient',
    quote: 'I was always afraid of dental visits until I found this clinic. The staff is friendly and professional, and the procedures were painless.',
    image: '/images/reviews/charles-etoroma-95UF6LXe-Lo-unsplash.jpg'
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    role: 'Parent',
    quote: 'I bring my entire family here. The dentists are great with children and make the experience positive. Highly recommended for families!',
    image: '/images/reviews/ivana-cajina-_7LbC5J-jw4-unsplash.jpg'
  },
  {
    id: 4,
    name: 'Mihai Stanescu',
    role: 'Patient',
    quote: 'I had a dental emergency and they accommodated me immediately. The service was excellent and the follow-up care was outstanding.',
    image: '/images/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg'
  },
  {
    id: 5,
    name: 'Cristina Vasilescu',
    role: 'Patient',
    quote: 'The cosmetic dental work I received has transformed my smile and boosted my confidence. The results exceeded my expectations!',
    image: '/images/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">What Our Patients Say</h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our patients have to say about their experience with our dental care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-green-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-green-600 italic flex-grow">
                {testimonial.quote}
              </p>
              <div className="mt-4 text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
