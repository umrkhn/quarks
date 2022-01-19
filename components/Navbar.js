import { useState } from 'react';
import { Menu, X } from 'react-feather';
import Link from 'next/link';
import { QuarksLogo } from './Icons';

const links = [
  { label: 'home', href: '/#home' },
  { label: 'features', href: '/#features' },
  { label: 'pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = !open ? 'hidden' : '';

  const renderLinks = () => {
    return links.map((link, index) => (
      <li
        key={index}
        className='font-medium capitalize text-gray-900 md:text-gray-500 px-4 py-3 md:p-0'
      >
        <Link href={link.href}>
          <a>{link.label}</a>
        </Link>
      </li>
    ));
  };
  return (
    <nav className='bg-gray-50 sticky top-0'>
      <div className='flex justify-between items-center p-4 pr-3 md:px-8 md:py-4.5 max-w-7xl mx-auto'>
        <QuarksLogo />
        <button className='p-2 md:hidden' onClick={() => setOpen(!open)}>
          {!open ? <Menu color='#344054' /> : <X color='#667085' />}
        </button>
        <ul className='hidden md:flex md:gap-x-8'>{renderLinks()}</ul>
        <Link href='/get-started'>
          <a className='btn-primary hidden md:block'>get started</a>
        </Link>
      </div>
      <ul
        className={`grid gap-y-2 py-6 border-y border-y-gray-100 bg-white md:hidden ${toggleNav}`}
      >
        {renderLinks()}
      </ul>
    </nav>
  );
};
export default Navbar;
