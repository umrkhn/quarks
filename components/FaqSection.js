import FaqList from './FaqList';

const FaqSection = () => {
  return (
    <section id='faq'>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto'>
          <h2 className='text-gray-900 text-3xl font-semibold md:text-4xl'>
            Lorem, ipsum dolor.
          </h2>
          <p className='mt-4 text-gray-500 text-lg md:text-xl md:mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            porro?
          </p>
        </div>
        <div className='my-12 md:my-16 max-w-3xl mx-auto'>
          <FaqList />
        </div>
        <div className='bg-gray-50 px-5 py-8 text-center rounded-2xl'>
          <h4 className='text-gray-900 text-xl font-medium'>
            Lorem, ipsum dolor.
          </h4>
          <p className='text-gray-500 text-base mt-2 md:text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            numquam.
          </p>
          <button className='btn-primary mt-6'>Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
