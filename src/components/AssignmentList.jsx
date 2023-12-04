import React from 'react';
import AssignmentCard from './AssignmetCard';

const assignments = [
  { id: 1, topic: 'machine-learning', title: 'Machine Learning Assignment', questions: ['Q1:What is machine learning? ',
   'Q2: Differentiate between classification and regression in machine learning.',
   'Q3: Describe the bias-variance tradeoff in machine learning.',
   'Q4: How does regularization help in preventing overfitting? ',
   'Q5: Explain the basic concept of supervised learning',
   'Q6: Explain the k-nearest neighbors (KNN) algorithm.',
   'Q7: Discuss the advantages and disadvantages of using decision trees.',
   'Q8:  Provide an example of a classification problem.?'] },
   {
    id: 2,
    topic: 'javascript',
    title: 'JavaScript Assignment ',
    questions: [
      'Q1: What is JavaScript and where is it commonly used in web development?',
      'Q2: Explain the concept of variables and data types in JavaScript.',
      'Q3: How does JavaScript differ from other programming languages?',
      'Q4: Describe the purpose and usage of functions in JavaScript.',
      'Q5: Discuss the importance of asynchronous programming in JavaScript.',
      'Q6: Explain the Document Object Model (DOM) and its role in web development.',
      'Q7: What are closures in JavaScript, and why are they useful?',
      'Q8: Provide an example of an event handling mechanism in JavaScript.'
    ]
  },
  {
    id: 3,
    topic: 'python',
    title: 'Python Assignment ',
    questions: [
      'Q1: What is Python and why is it considered a versatile programming language?',
      'Q2: Describe the basic syntax of Python and provide an example.',
      'Q3: Explain the difference between Python 2 and Python 3.',
      'Q4: Discuss the significance of indentation in Python programming.',
      'Q5: Describe the concept of list comprehension in Python.',
      'Q6: What are Python decorators, and how are they used?',
      'Q7: Discuss the role of modules and packages in Python.',
      'Q8: Provide an example of file handling in Python.'
    ]
  },
  

];

const AssignmentList = ({ selectedTopic }) => {
  const filteredAssignments = selectedTopic === 'all'
    ? assignments
    : assignments.filter(assignment => assignment.topic === selectedTopic);

  return (
    <div className='assignment-list '>
      {filteredAssignments.map(assignment => (
        <AssignmentCard key={assignment.id} {...assignment} />
      ))}
    </div>
  );
};

export default AssignmentList;
