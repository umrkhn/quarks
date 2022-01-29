import { Zap, Smile, Mail, BarChart2, Command, MessageCircle } from './Icons';

const features = [
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <Zap />,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <Smile />,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <Mail />,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <BarChart2 />,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <Command />,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad quisquam ut nemo, dolorem sunt!',
    icon: <MessageCircle />,
  },
];

const FeatureSection = () => {
  const renderFeatures = () => {
    return features.map((feature, id) => {
      return (
        <div className='grid justify-items-center text-center' key={id}>
          <div className='md:w-12 md:h-12'>{feature.icon}</div>
          <h4 className='text-lg font-medium mt-4 text-gray-900 md:text-xl md:mt-5'>
            {feature.title}
          </h4>
          <p className='text-base text-gray-500 mt-1 md:mt-2'>{feature.text}</p>
        </div>
      );
    });
  };
  return (
    <section id='features'>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto'>
          <span className='capitalize text-primary-700 text-sm font-semibold block md:text-base'>
            features
          </span>
          <h2 className='text-gray-900 text-3xl font-semibold mt-3 md:text-4xl'>
            Lorem ipsum dolor sit, amet
          </h2>
          <p className='text-lg text-gray-500 mt-4 md:mt-5 md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sint iusto sequi eius ducimus omnis.
          </p>
        </div>
        <div className='grid gap-y-10 mt-12 md:mt-16 md:gap-x-8 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
          {renderFeatures()}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
