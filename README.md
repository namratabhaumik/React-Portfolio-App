# About the final project

This is my portfolio, in React, as a software engineer. **All the images and few of the internal links are used just for illustration purposes.**

## What is the purpose of the portfolio project?

The primary purpose of this project is to demonstrate an understanding of React through a creative project. I have used as many React concepts as possible within this portfolio. I have used component composition, code reusability, hooks, states, interacted with an external API, created forms and lists.

### The 5 parts of the app contains:

- A header with external links to my social media accounts and internal links to other sections of the page.

- A landing section with an avatar picture and a short bio of myself.

- A section to display some of my featured projects as cards in a grid fashion.

- A contact me section with a form to allow visitors to contact me.

- A footer containing a copyright label of the developer.

### Some of the app functionalities:

- The header have external links that take the reader to different social apps.

- The header have internal links that, when clicked, will smoothly scroll into their corresponding section.

- The header stays hidden when scrolling down the page but reappears when scrolling up.

- The project section display a 2x2 grid with each project rendered in a card widget.

- The Contact Me form contains required fields that need to be filled in order for the form to get submitted.

### Some popular external libraries used:

- **Formik**: Popular open-source library that helps you to create forms in React. The library takes care of the repetitive tasks of managing the state of the form, validation and submission, so we can focus on the business logic of our application. It does so by providing a set of components and hooks that Iwe can plug into our forms. Formik comes with built-in support for schema based form-level validation through Yup, so they work together seamlessly.

- **Yup**: A JavaScript open-source library used to validate the form data before submitting it to the server. It provides a set of chainable operators that we can apply to your form fields to declaratively specify the validation rules.

- **Chakra UI**: A simple, modular and accessible component library that provides the building blocks needed for React applications. Chakra groups its different components by categories, like layout, forms, data display, feedback, typography or overlay. Layout components are in charge of setting virtual delimiters or boundaries for your content. They also manage how their children are laid (row or column) and the spacing between them among other properties. Some layout components to highlight are:

  - **HStack** and **VStack**: They display children using flex properties and stack elements horizontally or vertically respectively. Both take a spacing prop that allows us to set the spacing between the elements.

  - **Box**: It allows us to create a box with a background color, border, shadow, etc. It takes a bg prop that allows us to set the background color.

  - **Heading**: Renders one of the different DOM header tags (h1, h2, h3…). It takes a size prop that allows us to set the size of the heading and an as prop to specify the particular semantic HTML tag.

  - **Text**: Used to render text and paragraph within an interface. It offers a fontSize prop to increase the font size of the text.

### Quick summary of formik and yup:

The useFormik hook takes an object as an argument with the following properties:

- initialValues: An object with the initial values of the form fields

- onSubmit: A function that will be called when the form is submitted, with the form values as an argument. In that example we could access the message via values.comment.

- validationSchema: A Yup schema that will be used to validate the form fields. In that example, the message is a field with a string value that is required. As we can see the rules are human-readable and easy to understand.

The hook returns an object with the following properties:

- values: An object with the current values of the form fields. In that example we could access the message via values.comment.

- errors: An object with the current errors of the form fields. If validation fails for the "comment" field, which would be the case if the input has been touched and its value is empty, according to the validation schema, we could access the message error via errors.comment. In that particular case, the message error would be "Required". If the field is valid though, the value will be undefined.

- touched: An object with the current touched state of the form fields. We can use this to determine if a field has been touched (focused at least once) or not. In that example, we could access the comment state via touched.comment. If the field has been touched, the value will be true, otherwise it will be false.

- getFieldProps: A function that takes a field name as an argument and returns an object with the following properties:

  - name: The field name.

  - value: The current value of the field.

  - onChange: The handleChange function.

  - onBlur: A function that will be called when the field is blurred. It updates the corresponding field in the touched object.

### Getting Started-->Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
