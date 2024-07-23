# Event Listener
This project was created for the purpose of practicing using Hooks (```useState```, ```useEffect```, ```useRef```). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), uses routing [React Router](https://reactrouter.com/en/main), uses "lazy loading"
```Suspense``` and ```React.lazy```and has been added the spinner from the [React Spinners](https://mhnpd.github.io/react-loader-spinner/) library.

### The project created to practice using an event listener in framework React:
* Two identical counters, the first uses functional components (hooks - used to control state), the second using a class component (the old method);
* Feedback is a functional component that has three buttons: Good, Neutral and Bad. After the user leaves rating, a statistics component appears at the bottom that counts the number of reviews left by category, the total and the percentage of positive reviews left;
* The phone book is a functional component that has two fields for entering a name and phone number; after entering this data, a list of added contacts is created below, which we can delete, view details (a modal window opens) or find the contact we need by name. This project uses the [nanoid](https://www.npmjs.com/package/nanoid) library, which creates an id for each contact and [notiflix](https://notiflix.github.io/notify);
* Background light switch, with two ```Start``` and ```Stop``` buttons. The hooks used are: useEffect, useRef, useState and a random color function;
* The list of posts consists of two input fields (name and body of the post), after adding a post, a list of added posts is created below? which can be edited with the ```Delete``` button;
* Book list is a functional component that has two fields for entering the name and author of the book (they open as a modal window when you click the ```Create book list``` button); after entering this data, a list of added books is created below, which we can sort (by title or author) or delete. The project uses hooks: useState, useMemo, and also created its own hooks for code readability.

## How to Use the Repository

1. Clone the repository: `https://github.com/ShevchenkoOl/react-event-listener.git`

2. use ```npm install``` command to install package dependencies

3. Navigate to the relevant section to explore the corresponding material.

4. Open files and study the provided code examples.

## Author
This repository was created and maintained by [Oleksii Shevchenko](https://shevchenkool.github.io/portfolio/). Questions, suggestions and feedback can be directed to [email](uzlabini@gmail.com) or [linkedin profile](linkedin.com/in/oleksii-shevchenko-535ab61b8).
If you have any questions or suggestions, feel free to create an issue or submit a pull request.
