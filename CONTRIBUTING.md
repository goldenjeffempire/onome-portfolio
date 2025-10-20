# Contributing to Jeffery Onome's Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Style

- Follow the existing code style and formatting
- Use TypeScript for all new code
- Run `npm run lint` before committing
- Ensure all TypeScript types are properly defined (no `any` types)

### Commit Messages

Use clear and descriptive commit messages:
- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update README`
- `style: format code`
- `refactor: improve code structure`
- `test: add tests`
- `chore: update dependencies`

### Pull Request Process

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test thoroughly

3. Run the linter and type checker:
   ```bash
   npm run lint
   npm run type-check
   ```

4. Build the project to ensure it compiles:
   ```bash
   npm run build
   ```

5. Commit your changes with a clear message

6. Push to your fork and create a Pull Request

7. In your PR description:
   - Describe the changes made
   - Reference any related issues
   - Include screenshots for UI changes
   - List any breaking changes

### Code Review

- All submissions require review before merging
- Address any feedback from reviewers promptly
- Keep PRs focused on a single feature/fix

## Project Structure

```
src/
├── components/    # React components
├── data/         # Static data and content
├── pages/        # Page components
├── services/     # API and service logic
├── styles/       # Global styles
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Questions or Problems?

Feel free to open an issue if you have questions or encounter problems.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
