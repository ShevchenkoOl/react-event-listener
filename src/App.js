// import React from 'react';
// import { Routes, Route } from "react-router-dom";

// import Contacts from 'components/Contacts/Contacts';
// import Feedback from 'components/Feedback/Feedback';
// import HomePage from 'components/HomePage/HomePage';
// import CounterWithHooks from "./components/CounterWithHooks/CounterWithHooks";
// import ClassComponent from "./components/ClassComponent/ClassComponent";

//  function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/functionComponent" element={<CounterWithHooks />} />
//       <Route path="/classComponent" element={<ClassComponent />} />
//       <Route path="/feedback" element={<Feedback />} />
//       <Route path="/contacts" element={<Contacts />} />
//     </Routes>
//   );
// }

// export default App;

// Используйте Suspense, если:
// У вас есть большие компоненты или страницы, которые можно загружать лениво.
// Вы хотите улучшить производительность вашего приложения, уменьшив начальное время загрузки.
// Если все компоненты должны быть доступны сразу или их загрузка занимает незначительное время, то использование Suspense не обязательно.

// Без ленивой загрузки (Suspense): Все компоненты загружаются сразу:

import Spinner from 'components/Spinner/Spiner';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Contacts = lazy(() => import('components/Contacts/Contacts'));
const Feedback = lazy(() => import('components/Feedback/Feedback'));
const HomePage = lazy(() => import('components/HomePage/HomePage'));
const CounterWithHooks = lazy(() => import("./components/CounterWithHooks/CounterWithHooks"));
const ClassComponent = lazy(() => import("./components/ClassComponent/ClassComponent"));

 function App() {
  return (
    <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/functionComponent" element={<CounterWithHooks />} />
      <Route path="/classComponent" element={<ClassComponent />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
   </Suspense>
  );
}

export default App;
