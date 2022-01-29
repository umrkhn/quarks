import PricingCard from './PricingCard';

const pricingPlans = [
  {
    price: '$10/mth',
    title: 'Basic plan',
    offers: [
      'consectetur adipisicing elit',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
    ],
  },
  {
    price: '$20/mth',
    title: 'Buisness plan',
    offers: [
      'consectetur adipisicing elit. Mollitia',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
    ],
  },
  {
    price: '$30/mth',
    title: 'Enterprise plan',
    offers: [
      'consectetur adipisicing elit. Mollitia',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
      'Quam rem voluptates qui sint',
    ],
  },
];

const PricingSection = () => {
  const renderCards = () => {
    return pricingPlans.map((pricingPlan, id) => (
      <PricingCard key={id} {...pricingPlan} />
    ));
  };
  return (
    <section id='pricing'>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='mb-12 md:mb-16 max-w-3xl'>
          <span className='capitalize text-primary-700 text-sm font-semibold block md:text-base'>
            pricing
          </span>
          <h2 className='text-gray-900 text-3xl font-semibold mt-3 md:text-4xl'>
            Lorem ipsum dolor sit
          </h2>
          <p className='text-lg text-gray-500 mt-4 md:mt-5 md:text-xl'>
            Ipsum nunc mauris in ut vitae varius est lacus, senectus.
          </p>
        </div>
        <div className='grid gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'>
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
