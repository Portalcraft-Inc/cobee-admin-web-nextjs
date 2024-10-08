# Cobee Admin Web (Next.js)

This is the admin web project for Cobee, built with Next.js and TypeScript.

## System Requirements

- Node.js (version >=18.17.0)
- Yarn

## Installation and Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cobee-admin-web-nextjs.git
   cd cobee-admin-web-nextjs
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up Husky for pre-commit hooks:
   ```bash
   yarn prepare
   ```

## Development

To run the development server:

To run the development server:

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Linting

To check for code errors:

## Running Tests

To run the tests:

## Build

To build the project for production:

## Deployment

This project uses GitHub Actions for automatic deployment to Firebase Hosting. There are two workflows for staging and production:

- Staging: `.github/workflows/deploy-firebase-stg.yml`
- Production: `.github/workflows/deploy-firebase-prod.yml`

To deploy, you need to configure the following secrets in your GitHub repository:

- `FIREBASE_SERVICE_ACCOUNT_STG`: Service account for staging environment
- `FIREBASE_SERVICE_ACCOUNT_PROD`: Service account for production environment
- `REACT_APP_FIREBASE_API_KEY_PROD`: Firebase API key for production environment

## Project Structure

- `src/`: Contains the main application source code
- `public/`: Contains static resources
- `.github/workflows/`: Contains CI/CD configuration files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.json`: ESLint configuration

## Technologies Used

- Next.js
- React
- TypeScript
- ESLint
- Jest (for testing)
- Husky (for pre-commit hooks)
- Firebase (for hosting and other services)

## Contributing

Please ensure your code adheres to the linting rules and passes all tests before creating a pull request.

## Contact

If you have any questions, please contact the development team.
