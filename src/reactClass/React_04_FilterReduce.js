import React from 'react';
const employees = [
  {
    name: 'Raj',
    age: '20'
  },
  {
    name: 'Laxma',
    age: '25'
  },
  {
    name: 'Himanshu',
    age: '23'
  },
  {
    name: 'Imran',
    age: '27'
  },
  {
    name: 'Imad',
    age: '25'
  }
];

// Array -> name, age: 25

// filter
// map - foreach

//
export function PrintFilteredArray() {
  return employees
    .filter(item => item.age >= 25)
    .map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <p>{item.age}</p>
      </div>
    ));
}

// Angular -> Kitchen -> You'll get every recepie in one place (File size is high)
// React -> Kitchen -> Purchase Recepie according to your needs
//(FIle size increases as per your need)
