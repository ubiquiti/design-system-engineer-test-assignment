# Ubiquiti Design System Engineer Test Assignment

## Goal

The goal of this test is to evaluate your ability to create components that are reusable and consistent throughout the design system. You will be given access to a Figma file containing designs for a set of components, and a list of design tokens that you should use to style these components. Using Storybook, you will create a simulated design system that showcases these components and their variations.

To successfully complete this test, you will need to follow these guidelines:

- Use the Figma designs as a reference to create the components within Storybook.
- Utilize the design tokens provided to style the components within Storybook.
- Ensure that the components are **reusable** and **accessible**.
- Write **clean**, **organized**, **type-safe**, and **maintainable code** that adheres to **industry best practices**.

## Resources

- [Figma](https://www.figma.com/file/8qV0sjXX45tzthIfuvIMOV/Example-Components?node-id=25%3A20577&t=kESn8xQxJQlUGO4D-1)
- [Design Tokens](https://docs.google.com/spreadsheets/d/1qIjZMMU-I0V9w_zs4dTU54k6tVR6iyQBexvT0TEdzZs/edit?usp=share_link)

## Approach

### Getting Started

1. Go to https://github.com/new/import.
1. Paste the URL of this repository into the "Your old repository’s clone URL" field.
1. Choose a name for your mirror repository, and make it **private**.
1. Clone your mirror repository to your local machine.
1. Run `yarn install` to install dependencies.
1. Run `yarn run storybook` to start the Storybook server.
1. Open `http://localhost:6006` in your browser.
1. Continue to the next section.

### Assignment

1. In the `src/` directory, you will find the following structure:

```
src/
├─ FormItem/
│  ├─ docs/
│  │  ├─ FormItem.stories.tsx
│  ├─ FormItem.tsx
│  ├─ FormItem.module.css
├─ Input/
│  ├─ docs/
│  │  ├─ Input.stories.tsx
│  ├─ Input.tsx
│  ├─ Input.module.css
```

> Each component has its own folder, containing the source React component, stylesheet, as well as a Storybook story file.

2. Start with adding design tokens to your project. You are free to implement them the way you want.
3. Create the `FormItem` component. Showcase it well in your Storybook.
4. Create the `Input` component, and showcase it too. Note that this component is to be a primitive component.
5. Create a separate component that uses both the `FormItem` and `Input` in one: `PasswordInput` component. Showcase this well.
6. Bonus:
   - Add unit tests
   - Update the look & feel of the Storybook environment

### Submission

1. Commit your changes to your mirror repository.
1. Add alan.hajo@ui.com as a collaborator.
1. Email alan.hajo@ui.com and simon.perstorper@ui.com a link to your repository.

## Considerations

### What you CAN do

- Take inspiration from public design systems, [example](https://style.monday.com/?path=/story/welcome--page).
- Use third party libraries, but reconsider when you don’t need to.
- Create & rename files, change the project file structure, as well as use `.mdx` instead of `.tsx` for story files if you want.

### What you CAN NOT do

- Plagiarize or clone code from other resources.
- Deviate from the Figma design.
- Use unsafe typing.

## Help

Feel free to reach out to alan.hajo@ui.com for any questions or concerns.

Good luck!
