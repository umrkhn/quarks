import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'react-feather';

const faqList = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, modi adipisci quia facilis repudiandae placeat? Dolore vel doloribus similique soluta',
  },
];

const FaqList = () => {
  const [selected, setSelected] = useState('');

  const renderAnswer = (id, answer) => {
    const toggle = id === selected ? '' : 'hidden';
    return (
      <p className={`mt-2 text-base text-gray-500 md:text-lg ${toggle}`}>
        {answer}
      </p>
    );
  };
  const renderIcon = (id) => {
    return id === selected ? (
      <MinusCircle color='#7F56D9' />
    ) : (
      <PlusCircle color='#7F56D9' />
    );
  };
  const onBtnClick = (id) => {
    if (id === selected) return setSelected('');
    setSelected(id);
  };

  const renderList = () => {
    return faqList.map((faqItem, id) => {
      const style = id ? 'pt-6 border-t border-gray-200' : '';
      return (
        <li className={`flex justify-between ${style}`} key={id}>
          <div>
            <p className='text-gray-900 text-lg font-medium md:text-xl'>
              {faqItem.question}
            </p>
            {renderAnswer(id, faqItem.answer)}
          </div>
          <button
            className='self-start ml-3 md:ml-6'
            onClick={() => onBtnClick(id)}
          >
            {renderIcon(id)}
          </button>
        </li>
      );
    });
  };
  return <ul className='grid gap-y-8'>{renderList()}</ul>;
};

export default FaqList;
