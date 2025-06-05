// JavaScript Questions and Answers
export interface QAItem {
  id: string;
  question: string;
  answer: string;
  codeExample?: string;
}

export const javascriptQAData: QAItem[] = [
  {
    id: 'what-is-javascript',
    question: 'What is JavaScript?',
    answer:
      'JavaScript is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It enables interactive and dynamic behavior on websites.\n\nTrans: JavaScript (thường được viết tắt là JS) là một ngôn ngữ lập trình cấp cao, đa năng và được sử dụng rộng rãi, chủ yếu được biết đến với vai trò của nó trong phát triển web. Nó cho phép các hành vi tương tác và động trên các trang web.',
  },
  {
    id: 'var-let-const-difference',
    question: "What is the difference between 'var', 'let', and 'const' in JavaScript?",
    answer:
      'In JavaScript, var is function-scoped and was traditionally used to declare variables. Let and const are block-scoped. The key difference between let and const is that let allows for reassignment while const creates a read-only reference.\n\nTrans: Trong JavaScript, `var` có phạm vi trong hàm (function-scoped) và truyền thống được dùng để khai báo biến. `let` và `const` thì có phạm vi theo khối (block-scoped). Sự khác biệt chính giữa `let` và `const` là `let` cho phép gán lại giá trị, trong khi `const` tạo ra một tham chiếu chỉ đọc.',
  },
  {
    id: 'null-vs-undefined',
    question: "What is the difference between 'null' and 'undefined'?",
    answer:
      'The null is an assignment value. It can be assigned to a variable as representation of no value. But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.\n\nTrans: `null` là một giá trị được gán. Nó có thể được gán cho một biến để biểu thị rằng biến đó không có giá trị. Trong khi đó, `undefined` là một giá trị nguyên thủy (primitive value) đại diện cho sự vắng mặt của giá trị, hoặc cho một biến chưa được gán giá trị.',
  },
  {
    id: 'equality-operators',
    question: "What is the difference between '==' and '==='?",
    answer:
      'The == equality operator converts the operands if they are not of the same type, then applies strict comparison. The === strict equality operator only considers values equal that have the same type.\n\nTrans: Toán tử so sánh `==` sẽ chuyển đổi kiểu của các toán hạng nếu chúng không cùng kiểu, rồi mới thực hiện so sánh chặt chẽ. Còn toán tử so sánh nghiêm ngặt `===` chỉ coi hai giá trị là bằng nhau khi chúng có cùng kiểu và cùng giá trị.',
    codeExample: `console.log(1 == '1'); // true
  console.log(1 === '1'); // false
  console.log(1 === 1); // true`,
  },
  {
    id: 'variable-declaration-ways',
    question: 'What are the different ways to declare a variable in JavaScript?',
    answer: 'There are three ways to declare a variable in JavaScript: var, let, and const.',
  },
  {
    id: 'scopes-in-javascript',
    question: 'What are Scopes in JavaScript?',
    answer:
      'A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript: Global Scope, Function Scope (Local Scope), and Block Scope.',
  },
  {
    id: 'ternary-operator',
    question: 'What is ternary operator in JavaScript?',
    answer:
      'The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the `if` statement.',
    codeExample: `console.log(condition ? true : false);`,
  },
  {
    id: 'closure-in-javascript',
    question: 'What is a closure in JavaScript?',
    answer:
      'A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.',
    codeExample: `function outer() {
    const name = 'Roadmap';

    function inner() {
      console.log(name);
    }

    return inner;
  }

  const closure = outer();
  closure(); // Roadmap

  // In the above example, the inner function has access to the name variable
  // of the outer function even after the outer function has returned.`,
  },
  {
    id: 'arrow-functions-this',
    question: "Do Arrow functions have their own 'this'?",
    answer:
      'No, arrow functions do not have their own this. Instead, they inherit the this of the enclosing lexical scope.\n\nTrans: Không, arrow function không có `this` riêng của chúng. Thay vào đó, chúng kế thừa `this` từ phạm vi bên ngoài nơi chúng được định nghĩa (lexical scope).',
    codeExample: `const person = {
    name: "Dũng",

    sayHi: function () {
      // 'this' here refers to the 'person' object

      const arrow = () => {
        // Arrow function doesn't have its own 'this'
        // It uses 'this' from the surrounding scope (sayHi)
        console.log(\`Hi, I'm \${this.name}\`); // Accesses person.name
      };

      arrow(); // Call the arrow function
    }
  };

  person.sayHi(); // Output: "Hi, I'm Dũng"`,
  },
  {
    id: 'map-method-mutate',
    question: "Does 'map()' method mutate the original array?",
    answer:
      'No, the map() method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array.',
    codeExample: `const roadmaps = ['JavaScript', 'React', 'Node.js'];

  const renamedRoadmaps = roadmaps.map((roadmap) => {
    return \`\${roadmap} Roadmap\`;
  });

  console.log(roadmaps); // ['JavaScript', 'React', 'Node.js']
  console.log(renamedRoadmaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']`,
  },
  {
    id: 'foreach-return-array',
    question: "Does 'forEach()' method return a new array?",
    answer:
      'No, the forEach() method does not return a new array. It simply calls a provided function on each element in the array.',
    codeExample: `const roadmaps = ['JavaScript', 'React', 'Node.js'];

  roadmaps.forEach((roadmap) => {
    console.log(roadmap);
  });`,
  },
  {
    id: 'filter-method-usage',
    question: "How to use 'filter()' method?",
    answer:
      'You can use the filter() method to filter an array based on a condition. The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
    codeExample: `const numbers = [1, 2, 3, 4, 5, 6];

  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  console.log(numbers); // [1, 2, 3, 4, 5, 6]
  console.log(evenNumbers); // [2, 4, 6]`,
  },
  {
    id: 'map-vs-foreach',
    question: "What is the difference between 'map()' and 'forEach()' methods?",
    answer:
      'The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the forEach() method executes a provided function once for each array element.',
    codeExample: `// Map example
  const numbers = [1, 2, 3, 4];

  // Using map() to create a new array with each number doubled
  const doubledNumbers = numbers.map(num => num * 2);

  console.log(doubledNumbers); // [2, 4, 6, 8] - new array
  console.log(numbers); // [1, 2, 3, 4] - original array remains unchanged

  // forEach example
  const numbers2 = [1, 2, 3, 4];

  // Using forEach() to log each number doubled (side effect)
  numbers2.forEach(num => {
    console.log(num * 2);  // logs 2, 4, 6, 8
  });

  console.log(numbers2); // [1, 2, 3, 4] - original array remains unchanged`,
  },
  {
    id: 'map-in-javascript',
    question: 'What is Map in JavaScript?',
    answer:
      'Map is another data structure in JavaScript which is similar to Object but the key can be of any type. It is a collection of elements where each element is stored as a Key-value pair. It is also known as a hash table or a dictionary.\n\nThe key can be of any type but the value can be of any type. The key is unique and immutable, whereas the value can be mutable or immutable.',
    codeExample: `const roadmap = new Map();
  roadmap.set('name', 'JavaScript');
  roadmap.set('type', 'dynamic');
  roadmap.set('year', 1995);

  console.log(roadmap.get('name')); // JavaScript

  roadmap.delete('year');
  console.log(roadmap.has('year')); // false
  console.log(roadmap.size); // 2

  roadmap.clear();
  console.log(roadmap.size); // 0`,
  },
  {
    id: 'set-in-javascript',
    question: 'What is Set in JavaScript?',
    answer:
      'Set is another data structure in JavaScript which is similar to Array but the values are unique. It is a collection of elements where each element is stored as a value without any keys.',
    codeExample: `const roadmap = new Set();
  roadmap.add('JavaScript');
  roadmap.add('JavaScript'); // Duplicate, won't be added

  roadmap.add('dynamic');
  roadmap.add(1995);

  console.log(roadmap.size); // 3, because the value 'JavaScript' is already present in the set
  console.log(roadmap.has('JavaScript')); // true

  roadmap.delete('JavaScript');
  console.log(roadmap.has('JavaScript')); // false
  console.log(roadmap.size); // 2`,
  },
  {
    id: 'unique-values-array',
    question: 'How can you find unique values in an array?',
    answer:
      "There are several ways to find unique values in an array: Using Set, 'filter()', 'reduce()', 'forEach()', 'for...of', etc.",
    codeExample: `// Using Set
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = [...new Set(numbers)];
  console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

  // Using filter
  const uniqueNumbers2 = numbers.filter((item, index) => numbers.indexOf(item) === index);
  console.log(uniqueNumbers2); // [1, 2, 3, 4, 5]`,
  },
  {
    id: 'javascript-promise',
    question: 'What is a JavaScript promise?',
    answer:
      'A promise in JavaScript represents a value that may not be available yet but will be at some point. Promises provide a way to handle asynchronous operations, offering methods like .then() and .catch() to register callbacks for success and failure.',
    codeExample: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.error(error));`,
  },
  {
    id: 'async-await-purpose',
    question: "What is the purpose of 'async/await' in JavaScript?",
    answer:
      'The async/await, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An async function always returns a promise, and within such a function, you can use await to pause execution until a promise settles.',
    codeExample: `async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }`,
  },
  {
    id: 'strict-mode',
    question: 'How to enable strict mode in JavaScript?',
    answer:
      "To enable strict mode in JavaScript, you need to add the following line at the top of the file or function: 'use strict'",
    codeExample: `'use strict';

  // Your code here will run in strict mode

  function myFunction() {
    'use strict';
    // This function will run in strict mode
  }`,
  },
  {
    id: 'alert-prompt-confirm',
    question: "Explain 'alert()', 'prompt()', and 'confirm()' methods in JavaScript",
    answer:
      'These are browser dialog methods:\n\n- alert(): displays an alert box with a specified message and an OK button\n- prompt(): displays a dialog box that prompts the visitor for input\n- confirm(): displays a dialog box with a specified message, along with an OK and a Cancel button',
    codeExample: `// alert()
  alert('Hello World!');

  // prompt()
  const name = prompt('What is your name?');
  console.log(name);

  // confirm()
  const result = confirm('Are you sure?');
  console.log(result); // true/false`,
  },
  {
    id: 'spread-operator',
    question: 'What is the spread operator in JavaScript?',
    answer:
      'The spread operator in JavaScript is represented by three dots (...). It allows the elements of an array or properties of an object to be expanded or "spread" into individual elements or properties. This can be useful in various contexts, such as when passing elements as function arguments, cloning arrays and objects, or merging arrays and objects.',
    codeExample: `const roadmaps = ['JavaScript', 'React', 'Node.js'];
  const bestPractices = ['AWS', 'API Security'];

  const resources = [...roadmaps, ...bestPractices];
  console.log(resources); // ['JavaScript', 'React', 'Node.js', 'AWS', 'API Security']

  // Object spread
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }`,
  },
  {
    id: 'prevent-default',
    question: "What is 'preventDefault()' method in JavaScript?",
    answer:
      "The event.preventDefault() method is used to prevent the default action of an event. For example, when you click on a link, the default action is to navigate to the link's URL. But if you want to prevent the navigation, you can use event.preventDefault() method.",
    codeExample: `const link = document.querySelector('a');

  link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Clicked on link!');
  });`,
  },
  {
    id: 'hoisting',
    question: 'What is Hoisting in JavaScript?',
    answer:
      'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where the functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. Note that hoisting only moves the declaration, not the initialization.',
    codeExample: `console.log(x); // undefined (not an error)
  var x = 5;

  // This is what actually happens due to hoisting:
  // var x;
  // console.log(x); // undefined
  // x = 5;

  foo(); // "Hello!" - works due to function hoisting

  function foo() {
    console.log("Hello!");
  }`,
  },
  {
    id: 'what-is-dom',
    question: 'What is DOM?',
    answer:
      'The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects.',
    codeExample: `// Accessing DOM elements
  const element = document.getElementById('myId');
  const elements = document.getElementsByClassName('myClass');
  const element2 = document.querySelector('.myClass');

  // Modifying DOM
  element.textContent = 'New text';
  element.style.color = 'red';
  element.setAttribute('data-value', '123');`,
  },
  {
    id: 'map-vs-weakmap',
    question: "What is the difference between 'Map' and 'WeakMap' in JavaScript?",
    answer:
      'Map holds strong references to its keys, while WeakMap holds weak references. This means:\n\n- Map keys can be any type, WeakMap keys must be objects\n- WeakMap entries can be garbage collected when the key object is no longer referenced elsewhere\n- WeakMap is not enumerable (no size property, no iteration methods)\n- Map has better performance for frequent additions and removals',
    codeExample: `// Map
  const map = new Map();
  map.set('string', 'value');
  map.set(1, 'number');
  console.log(map.size); // 2

  // WeakMap
  const weakMap = new WeakMap();
  let obj = { name: 'test' };
  weakMap.set(obj, 'value');
  // console.log(weakMap.size); // Error: WeakMap has no size property
  obj = null; // The entry in WeakMap can now be garbage collected`,
  },
  {
    id: 'object-immutable',
    question: 'How to make an Object immutable in JavaScript?',
    answer:
      'To make an object immutable, you can use Object.freeze() method. It prevents the modification of existing property values and prevents the addition of new properties.',
    codeExample: `const roadmap = {
    name: 'JavaScript',
  };

  Object.freeze(roadmap);

  roadmap.name = 'JavaScript Roadmap'; // throws an error in strict mode
  console.log(roadmap.name); // JavaScript

  // For deep immutability, you need to freeze nested objects too
  const deepFreeze = (obj) => {
    Object.freeze(obj);
    Object.values(obj).forEach(val => {
      if (typeof val === 'object' && val !== null) {
        deepFreeze(val);
      }
    });
    return obj;
  };`,
  },
  {
    id: 'parallel-execution',
    question: 'Is it possible to run 2 lines of code at the same time in JavaScript?',
    answer:
      "No, it's not possible to run two lines of code at the same time in JavaScript because it is single-threaded, meaning it executes one line at a time. However, asynchronous code can simulate parallel behavior by scheduling tasks to run independently.",
    codeExample: `// This doesn't run in parallel, but asynchronously
  console.log('Start');

  setTimeout(() => {
    console.log('Async 1');
  }, 100);

  setTimeout(() => {
    console.log('Async 2');
  }, 50);

  console.log('End');

  // Output: Start, End, Async 2, Async 1`,
  },
  {
    id: 'compiled-vs-interpreted',
    question: 'Is JavaScript a compiled or interpreted language?',
    answer:
      'JavaScript is traditionally an interpreted language, meaning it executes code line-by-line at runtime. However, modern JavaScript engines (like V8) use Just-In-Time (JIT) compilation, which compiles frequently-used code into machine code during execution to make it run faster.',
  },
  {
    id: 'merge-arrays',
    question: 'Can you merge multiple arrays in JavaScript?',
    answer:
      'You can merge multiple arrays into one array using the concat() method, or the spread operator.',
    codeExample: `// Using concat()
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = arr1.concat(arr2);
  console.log(arr3); // [1, 2, 3, 4, 5, 6]

  // Using spread operator
  const arr4 = [1, 2, 3];
  const arr5 = [4, 5, 6];
  const arr6 = [...arr4, ...arr5];
  console.log(arr6); // [1, 2, 3, 4, 5, 6]

  // Merging multiple arrays
  const arr7 = [7, 8];
  const merged = [...arr1, ...arr2, ...arr7];
  console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8]`,
  },
];

// Utility functions for working with the data
export const getQuestionById = (id: string): QAItem | undefined => {
  return javascriptQAData.find(item => item.id === id);
};

export const searchQuestions = (query: string): QAItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return javascriptQAData.filter(
    item =>
      item.question.toLowerCase().includes(lowercaseQuery) ||
      item.answer.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRandomQuestions = (count: number): QAItem[] => {
  const shuffled = [...javascriptQAData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTotalQuestions = (): number => {
  return javascriptQAData.length;
};

export default javascriptQAData;
