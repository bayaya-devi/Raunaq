'use strict';
(() => {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bayaya-devi.github.io/Raunaq/#organization',
        name: 'RAUNAQ',
        alternateName: 'رونق',
        url: 'https://bayaya-devi.github.io/Raunaq/',
        logo: 'https://bayaya-devi.github.io/Raunaq/Logo.png'
      },
      {
        '@type': 'Product',
        '@id': 'https://bayaya-devi.github.io/Raunaq/#product',
        name: 'RAUNAQ Formule Royale 250 g',
        image: ['https://bayaya-devi.github.io/Raunaq/A.png'],
        description: 'Complément alimentaire naturel RAUNAQ en pot de 250 g.',
        sku: 'RAUNAQ-ROYAL-250G',
        brand: { '@id': 'https://bayaya-devi.github.io/Raunaq/#organization' },
        offers: {
          '@type': 'Offer',
          url: 'https://bayaya-devi.github.io/Raunaq/#buy',
          priceCurrency: 'MAD',
          price: '390',
          availability: 'https://schema.org/PreOrder',
          itemCondition: 'https://schema.org/NewCondition'
        }
      }
    ]
  };
  const node = document.createElement('script');
  node.type = 'application/ld+json';
  node.textContent = JSON.stringify(graph);
  document.head.appendChild(node);
})();