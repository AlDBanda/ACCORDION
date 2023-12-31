import React from 'react';
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg'>
      <Accordion 
      title='Do you prefer Android or IOS' 
      answer='I prefer IOS products'
      />

      <Accordion 
      title='Do you prefer writing CSS or Tailwind' 
      answer='Tailwind is my preferrence'
      />

      <Accordion 
      title='Firebase or Supabase' 
      answer='I am using Supabase!'
      />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;