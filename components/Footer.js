import { QuarksLogo } from './Icons';

const Footer = () => {
  return (
    <footer>
      <div className='px-4 py-12 grid gap-y-12 place-content-center md:grid-flow-col md:justify-between md:px-8 max-w-7xl mx-auto'>
        <div className='justify-self-center'>
          <QuarksLogo />
        </div>
        <p className='text-gray-400 text-base self-center'>
          © 2022 Quarks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
