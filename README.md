# Coding Assignment 13 - UI Component Library Build Checks

## Project Description

This project extends the Assignment 12 React Storybook UI Component Library by adding automated code-quality checks to the development and build process.

The project uses Prettier, ESLint, Jest, Husky, GitHub Actions, and Docker. Before Git creates a commit, Husky automatically runs formatting checks, linting, and all tests. GitHub Actions runs the same checks when code is pushed to GitHub or submitted through a pull request.

The production Storybook application runs in Docker at:

```text
http://localhost:8018
```

or:

```text
http://127.0.0.1:8018
```

## Requirements

- Docker Desktop
- Node.js 20
- npm
- Git
- Terminal or PowerShell
- Web browser

## Technologies Used

- React
- TypeScript
- Create React App
- Storybook
- Styled Components
- Jest
- React Testing Library
- Prettier
- ESLint
- Husky
- GitHub Actions
- Docker

## Install Dependencies

From the project directory, run:

```bash
npm ci
```

The `prepare` script installs the Husky Git hooks automatically.

## Run Storybook Locally

Run the Storybook development server:

```bash
npm run storybook
```

Open:

```text
http://localhost:6006
```

## Code-Quality Commands

### Check Prettier Formatting

```bash
npm run format:check
```

### Format Project Files

```bash
npm run format
```

### Run ESLint

```bash
npm run lint
```

### Run Tests Without Watch Mode

```bash
npm run test:ci
```

### Run All Quality Checks

```bash
npm run quality
```

The quality command runs the following checks in sequence:

1. Prettier
2. ESLint
3. Jest tests

Expected test result:

```text
Test Suites: 2 passed, 2 total
Tests:       27 passed, 27 total
```

## Husky Pre-commit Hook

The project contains a pre-commit hook at:

```text
.husky/pre-commit
```

Before Git creates a commit, Husky automatically runs:

```bash
npm run quality
```

If Prettier, ESLint, or any test fails, Git blocks the commit until the problem is corrected.

## GitHub Actions

The GitHub Actions workflow is located at:

```text
.github/workflows/code-quality.yml
```

The workflow runs automatically for pushes and pull requests. It performs the following steps:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies with `npm ci`
4. Checks Prettier formatting
5. Runs ESLint
6. Runs all tests
7. Creates the production Storybook build

If a developer bypasses the local Husky pre-commit hook, GitHub Actions still runs the checks. GitHub reports a failed workflow when any check fails.

## Build the Production Storybook Locally

```bash
npm run build-storybook
```

The generated production files are placed in:

```text
storybook-static
```

## Docker Image Name

```text
rosales_juan_jose_coding_assignment13
```

## Docker Container Name

```text
rosales_juan_jose_coding_assignment13
```

## Container Working Directory

```text
/rosales_juan_jose_ui_garden_build_checks
```

## Build the Docker Image

Make sure Docker Desktop is running. From the project directory, run:

```bash
docker build -t rosales_juan_jose_coding_assignment13 .
```

## Run the Docker Container

```bash
docker run -d -p 8018:8018 --name rosales_juan_jose_coding_assignment13 rosales_juan_jose_coding_assignment13
```

## Open the Docker Application

Open:

```text
http://localhost:8018
```

or:

```text
http://127.0.0.1:8018
```

## Check the Running Container

```bash
docker ps --filter "name=rosales_juan_jose_coding_assignment13"
```

## Stop the Container

```bash
docker stop rosales_juan_jose_coding_assignment13
```

## Start the Existing Container

```bash
docker start rosales_juan_jose_coding_assignment13
```

## Remove the Container

```bash
docker rm -f rosales_juan_jose_coding_assignment13
```

## Rebuild After Project Changes

Remove the existing container:

```bash
docker rm -f rosales_juan_jose_coding_assignment13
```

Rebuild the image:

```bash
docker build -t rosales_juan_jose_coding_assignment13 .
```

Create and run the container again:

```bash
docker run -d -p 8018:8018 --name rosales_juan_jose_coding_assignment13 rosales_juan_jose_coding_assignment13
```

## GitHub Repository

```text
https://github.com/jjrosales-89/rosales_juan_jose_ui_garden
```
