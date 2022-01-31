import Link from 'next/link';
const Cta = () => {
  return (
    <section className='bg-gray-50'>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='text-center mb-8 max-w-3xl mx-auto md:mb-10'>
          <h2 className='text-gray-900 text-3xl font-semibold md:text-4xl'>
            Start your free trial
          </h2>
          <p className='text-gray-500 text-lg mt-4 md:mt-5 md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, aliquam.
          </p>
        </div>
        <div className='text-center grid gap-y-3 md:grid-flow-col md:place-content-center md:gap-x-3'>
          <Link href='/learn-more'>
            <a className='btn-secondary btn-xl'>learn more</a>
          </Link>
          <Link href='/get-started'>
            <a className='btn-primary btn-xl'>get started</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
