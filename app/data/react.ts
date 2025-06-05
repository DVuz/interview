// data.ts - React Questions and Answers
export interface QAItem {
  id: string;
  question: string;
  answer: string;
  codeExample?: string;
}

export const reactQAData: QAItem[] = [
  {
    id: 'what-is-react',
    question: 'What is React?',
    answer:
      'React is an open-source Javascript library for building user interfaces (UIs). It was developed and is maintained by Meta, and is widely used by developers to create interactive and dynamic web applications.',
  },
  {
    id: 'react-features',
    question: 'What are the features of React?',
    answer:
      'Use of Virtual DOM instead of Real DOM, JSX, Server-side rendering, Unidirectional data flow or data binding, Reusable components, etc.',
  },
  {
    id: 'what-is-jsx',
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React "elements". You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.',
  },
  {
    id: 'real-vs-virtual-dom',
    question: 'What is the difference between Real DOM and Virtual DOM?',
    answer:
      'Virtual DOM is the representation of a UI in the form of a plain Javascript object. It is a node tree that lists the elements, their attributes and content as Object and their properties. Real DOM is the real representation of a UI which can be seen and inspected in the browser. Manipulating the virtual DOM is much faster than real DOM, because nothing gets drawn on the screen. React uses this virtual DOM to figure out the most efficient way to update the browser DOM.',
  },
  {
    id: 'how-virtual-dom-works',
    question: 'How does React Virtual DOM work?',
    answer:
      'Virtual DOM works in these steps:\n\n1. Whenever any underlying data changes, new virtual DOM representation will be created.\n2. Then the difference between the previous DOM representation and the new one is calculated.\n3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.',
  },
  {
    id: 'state-vs-props',
    question: 'What is the difference between state and props?',
    answer:
      'Props are used to pass data from parent to child. They are like function arguments. They are immutable. State is managed within the component and is mutable.',
  },
  {
    id: 'change-state-directly',
    question: 'Can we change the state of the component directly?',
    answer:
      "No, we can't change the state of the component directly. State can only be changed by using `setState()` method. Changing the state variable directly won't re-render the component.",
  },
  {
    id: 'styling-options',
    question: 'What are different options to style a React component?',
    answer:
      'CSS Stylesheets, Inline styles, CSS Modules, Styled Components, CSS in JS libraries, etc.',
  },
  {
    id: 'pure-components',
    question: 'What are Pure Components?',
    answer:
      'Pure components re-render only when the props passed to the component changes. For example, if you have a pure child component inside a parent component state changes in the parent component will not re-render the child component unless the props passed to the child component change.\n\nTo create a pure component, you can use the `memo` function from React. It is a higher order component which takes a component as an argument and returns a new component. The new component renders only if the props change.',
    codeExample: `import React, { memo } from 'react';

const ChildComponent = ({ name }) => {
  console.log('Rendering child component');
  return <div>{name}</div>;
};

const PureChildComponent = memo(ChildComponent);

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName('Jane')}>Change name</button>
      <PureChildComponent name={name} />
    </div>
  );
};`,
  },
  {
    id: 'synthetic-events',
    question: 'What are Synthetic Events in React?',
    answer:
      "React differs from HTML in that it uses a synthetic event system instead of directly binding to the browser's native events. This system brings consistency and performance benefits, and it allows React to be agnostic of environments like browser, server, or React Native.\n\nThe events such as `onClick`, `onSubmit`, `onFocus`, etc. are all camel-cased to be consistent with the naming convention in JavaScript. React event handlers are written inside curly braces.",
    codeExample: `function activateLasers(e) {
    e.preventDefault();
    console.log('The button was clicked.');
}

<button onClick={activateLasers}>Activate Lasers</button>`,
  },
  {
    id: 'key-attribute',
    question: 'What is the purpose of `key` attribute in React?',
    answer:
      'The string attribute `key` is a special attribute you need to include when rendering an array of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.',
  },
  {
    id: 'refs-in-react',
    question: 'What are refs in React?',
    answer:
      'Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render method. You can also use refs when you want a component to "remember" some information, but you don\'t want that information to trigger new renders, you can use a ref.',
  },
  {
    id: 'react-hooks',
    question: 'What are React Hooks?',
    answer:
      'Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don\'t work inside classes — they let you use React without classes. Some common hooks include `useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`, etc.',
  },
  {
    id: 'context-in-react',
    question: 'What is Context in React?',
    answer:
      'Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels.',
  },
  {
    id: 'useeffect-hook',
    question: 'What is the purpose of the `useEffect` hook in React?',
    answer:
      'The useEffect hook in React is used for performing side effects in functional components. Side effects can include data fetching, DOM manipulation, and subscribing to external data sources.',
  },
  {
    id: 'usecontext-hook',
    question: 'What is the purpose of the `useContext` hook in React?',
    answer:
      'The useContext hook is used to access and consume context values in functional components. It provides a way to access context data without the need for a context consumer. useContext is particularly useful when you want to access context values in nested components without having to pass props through intermediate components.',
  },
  {
    id: 'lazy-loading',
    question: 'How to lazy load components in React?',
    answer:
      "You can use React's `lazy()` function in conjunction with dynamic `import()` to lazily load a component. This is often combined with `Suspense` to display fallback content while the component is being loaded.",
    codeExample: `// The component has to be exported as a default export
export default function RoadmapRender() {
  return <h1>This is a lazily-loaded component!</h1>;
}

// Usage with lazy loading
import { lazy, Suspense } from 'react';

const LazyRoadmapRender = lazy(() => delay(import('./RoadmapRender')));

export function App() {
  const [showRoadmapRender, setShowRoadmapRender] = useState(false);
  return (
    <>
      <button onClick={() => setShowRoadmapRender(true)}>
        Show RoadmapRender
      </button>
      {showRoadmapRender && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRoadmapRender />
        </Suspense>
      )}
    </>
  );
}

// Helper function to simulate a 2 seconds delay
function delay(promise) {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => promise
  );
}`,
  },
  {
    id: 'suspense-in-react',
    question: 'What is `Suspense` in React?',
    answer:
      'Suspense is a component in React that lets you specify the fallback content to display while waiting for a component to load. It is used in conjunction with `lazy()` to lazily load components.',
    codeExample: `import { lazy, Suspense } from 'react';

const LazyRoadmapRender = lazy(() => import('./RoadmapRender'));

export function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Show</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRoadmapRender />
        </Suspense>
      )}
    </>
  );
}`,
  },
  {
    id: 'comments-in-react',
    question: 'How to write a comment in React?',
    answer:
      "You can write a comment in JSX by wrapping it in curly braces and using JavaScript's multi-line comment syntax.",
    codeExample: `{/* This is a comment */}`,
  },
  {
    id: 'stateful-vs-stateless',
    question: 'What is the difference between stateful and stateless components?',
    answer:
      "The main difference between stateful and stateless components is one has state and the other doesn't. Stateful components keep track of changes to their state and re-render themselves when the state changes. Stateless components, on the other hand, render whatever is passed to them via `props` or always render the same thing.",
  },
];

// Utility functions for working with the data
export const getQuestionById = (id: string): QAItem | undefined => {
  return reactQAData.find(item => item.id === id);
};

export const searchQuestions = (query: string): QAItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return reactQAData.filter(
    item =>
      item.question.toLowerCase().includes(lowercaseQuery) ||
      item.answer.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRandomQuestions = (count: number): QAItem[] => {
  const shuffled = [...reactQAData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTotalQuestions = (): number => {
  return reactQAData.length;
};

export default reactQAData;
