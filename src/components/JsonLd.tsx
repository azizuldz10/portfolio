export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'DzDev',
    url: 'https://your-domain.com',
    image: 'https://your-domain.com/profile.jpg',
    sameAs: [
      'https://github.com/azizuldz10',
      // Update dengan social media Anda
    ],
    jobTitle: 'Frontend Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    description: 'Frontend Developer specializing in React, Next.js, and TypeScript'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 