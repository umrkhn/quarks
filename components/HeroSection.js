import Link from 'next/link';
import Image from 'next/image';
import mockup from '../public/images/mockup.png';

const HeroSection = () => {
  return (
    <main className='bg-gray-50'>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='text-center max-w-5xl mx-auto'>
          <h1 className='text-gray-900 text-4xl font-semibold md:text-6xl'>
            Lorem ipsum dolor sit amet
          </h1>
          <p className='text-gray-500 text-lg mt-4 md:mt-6 md:text-xl max-w-3xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
            egestas fermentum, in libero hendrerit tellus nibh.
          </p>
          <div className='grid gap-y-3 mt-8 md:mt-6 md:grid-flow-col md:place-content-center md:gap-x-3'>
            <Link href='/get-started'>
              <a className='btn-primary btn-xl md:btn-2xl'>get started</a>
            </Link>
            <Link href='/learn-more'>
              <a className='btn-secondary btn-xl md:btn-2xl'>learn more</a>
            </Link>
          </div>
        </div>
        <div className='mt-16 max-w-3xl mx-auto'>
          <Image src={mockup} alt='laptop' layout='responsive' />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
