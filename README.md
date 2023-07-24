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
