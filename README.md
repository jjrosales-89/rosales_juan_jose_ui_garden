# Coding Assignment 12 - React Storybook Component Library

## Project Description

This project is a React component library built with Create React App, Storybook, TypeScript, and Styled Components.

The component library includes reusable UI components that can be viewed and tested in Storybook. Storybook is used to display each component, test different props through controls, and show default and disabled states.

The project can be run locally with npm or inside Docker. The Docker version runs on:

```text
http://localhost:8083
```

or:

```text
http://127.0.0.1:8083
```

## Requirements

To run this project, you need:

- Docker Desktop
- Node.js and npm
- Terminal or PowerShell
- Web browser

## Technologies Used

- Create React App
- React
- TypeScript
- Storybook
- Styled Components
- Jest and React Testing Library
- Docker

## Components Included

The component library includes the following required components:

- Button
- Label
- Text
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter
- Dropdown
- RadioButton
- Img
- HeroImage
- Card

## Component Folder Structure

Each component is organized in its own folder inside:

```text
src/components
```

Each component folder includes files such as:

```text
ComponentName.tsx
ComponentName.stories.tsx
ComponentName.types.tsx
ComponentName.tests.tsx
index.ts
```

The story files are used by Storybook.

The test files are used by Jest and React Testing Library.

The type files define the TypeScript props for each component.

## Install Dependencies

From the project folder, run:

```bash
npm install
```

This installs the required npm packages for React, Storybook, Styled Components, and testing.

## Run Storybook Locally

To run Storybook locally, use:

```bash
npm run storybook
```

Storybook will run at:

```text
http://localhost:6006
```

This lets you view the component library outside of Docker.

## Run Tests

To run the component tests, use:

```bash
npm test -- --watchAll=false
```

Expected test result:

```text
Test Suites: 2 passed, 2 total
Tests: 27 passed, 27 total
```

The tests confirm that the components render correctly and that required states, such as disabled states, work as expected.

## Docker Image Name

```bash
rosales_juan_jose_ui_garden
```

## Docker Container Name

```bash
rosales_juan_jose_coding_assignment12
```

## Workdir Inside Container

```bash
/rosales_juan_jose_ui_garden
```

## Build the Docker Image

From the project folder, run:

```bash
docker build -t rosales_juan_jose_ui_garden .
```

This command builds a Docker image for the React Storybook component library.

## Run the Docker Container

Run the container with:

```bash
docker run -p 8083:6006 --name rosales_juan_jose_coding_assignment12 rosales_juan_jose_ui_garden
```

This maps port `6006` inside the container to port `8083` on the computer.

## Open the Site

Open the following URL in your browser:

```text
http://localhost:8083
```

or:

```text
http://127.0.0.1:8083
```

The Storybook component library should open in the browser.

## Stop the Container

In the terminal where the container is running, press:

```text
Ctrl + C
```

## If the Container Name Already Exists

If Docker says the container name is already in use, remove the old container first:

```bash
docker rm -f rosales_juan_jose_coding_assignment12
```

Then run the container again:

```bash
docker run -p 8083:6006 --name rosales_juan_jose_coding_assignment12 rosales_juan_jose_ui_garden
```

## Check Existing Docker Containers

To see all containers, run:

```bash
docker ps -a
```

To see only running containers, run:

```bash
docker ps
```

## Check Existing Docker Images

To see Docker images, run:

```bash
docker images
```

## Notes

The project includes Storybook controls so component props can be changed in the browser.

Components include default and disabled states where appropriate.

Disabled components visually change and use a disabled cursor style to show that they cannot be clicked.

The project includes a local TypeScript declaration file:

```text
src/storybook-framework.d.ts
```

This file allows TypeScript to recognize the Storybook Webpack framework package used by the story files.

## GitHub Repository

GitHub repository link:

```text
https://github.com/jjrosales-89/rosales_juan_jose_ui_garden.git
```

## Author

Juan Jose Rosales
