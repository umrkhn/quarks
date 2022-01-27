import { SisyphusLogo } from './Icons';

const Testimonial = () => {
  return (
    <section className='bg-gray-50'>
      <div className='grid justify-items-center gap-y-8 text-center px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <SisyphusLogo />
        <p className='text-3xl font-medium text-gray-900 md:text-5xl'>
          Keep up the excellent work. I would also like to say thank you to all
          your staff. Quarks is awesome!
        </p>
        <div>
          <h6 className='text-lg font-medium text-gray-900'>Felix C</h6>
          <small className='text-base text-gray-500 mt-1 inline-block'>
            Product Manager, Sisyphus
          </small>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
