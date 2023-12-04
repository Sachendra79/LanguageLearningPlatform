import React from 'react';

const AssignmentCard = ({ title, questions }) => {
  return (
    <div className='assignment-card'>
      <h3 className='text-4xl text-[#d33737] font-bold'>{title}</h3>
      <ul className='text-[#000] font-semibold'>
        {questions.map((question, index) => (
          <li className=' border-2 border-solid border-black h-20 py-5 px-3 border-spacing-5 rounded-xl bg-white' key={index}>{question}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default AssignmentCard;
