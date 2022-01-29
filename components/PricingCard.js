import Link from 'next/link';
import { Check } from './Icons';

const PricingCard = ({ price, title, offers }) => {
  const renderList = () => {
    return offers.map((offer, id) => {
      return (
        <li className='flex' key={id}>
          <Check />
          <p className='ml-3 text-gray-500 text-base'>{offer}</p>
        </li>
      );
    });
  };
  return (
    <div className='grid px-6 shadow-lg border border-gray-200 rounded-2xl md:px-8'>
      <div className='text-center mt-10'>
        <div className='text-gray-900 text-3xl font-semibold md:text-4xl'>
          {price}
        </div>
        <h4 className='text-gray-900 text-xl font-semibold mt-4'>{title}</h4>
        <p className='text-gray-500 text-base mt-1'>Billed annually</p>
      </div>
      <ul className='my-8 mx-auto grid gap-y-4 md:mb-10'>{renderList()}</ul>
      <Link href='/get-started'>
        <a className='btn-primary btn-xl text-center mb-8'>get started</a>
      </Link>
    </div>
  );
};

export default PricingCard;
