# Development Guide

## Development Tooling

This project uses a comprehensive development tooling setup to ensure code quality, consistency, and maintainability.

### Code Quality Tools

#### ESLint
- **Purpose**: JavaScript/TypeScript linting and code quality enforcement
- **Configuration**: `eslint.config.js` (primary) and `.eslintrc.json` (editor compatibility)
- **Rules**: TypeScript-specific rules, React hooks rules, and general code quality rules
- **Usage**:
  ```bash
  npm run lint          # Check for linting issues
  npm run lint:fix      # Auto-fix linting issues where possible
  ```

#### Prettier
- **Purpose**: Code formatting and style consistency
- **Configuration**: `.prettierrc`
- **Ignore patterns**: `.prettierignore`
- **Usage**:
  ```bash
  npm run format        # Format all source files
  npm run format:check  # Check if files are properly formatted
  ```

#### TypeScript
- **Purpose**: Type checking and compile-time error detection
- **Configuration**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Usage**:
  ```bash
  npm run type-check    # Run TypeScript type checking without emitting files
  npm run build         # Build the project (includes type checking)
  ```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all TypeScript/React files |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format all source files with Prettier |
| `npm run format:check` | Check if files are properly formatted |
| `npm run type-check` | Run TypeScript type checking |

### Code Quality Standards

#### ESLint Rules
- **TypeScript**: Strict type checking, no unused variables, prefer const
- **React**: Hooks rules, component export rules for fast refresh
- **General**: No console warnings, no debugger, prefer const over let/var

#### Prettier Configuration
- **Semicolons**: Always use semicolons
- **Quotes**: Single quotes for strings, single quotes for JSX
- **Trailing Commas**: ES5 compatible trailing commas
- **Print Width**: 80 characters
- **Tab Width**: 2 spaces
- **Line Endings**: LF (Unix-style)

### Editor Integration

#### VS Code
The project includes ESLint and Prettier configurations that work seamlessly with VS Code extensions:
- **ESLint Extension**: Provides real-time linting feedback
- **Prettier Extension**: Formats code on save
- **TypeScript**: Built-in support for type checking and IntelliSense

#### Recommended VS Code Settings
Add to your `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### Pre-commit Workflow
Before committing code, run:
```bash
npm run type-check    # Ensure no TypeScript errors
npm run lint          # Check for linting issues
npm run format:check  # Ensure code is properly formatted
```

### Troubleshooting

#### ESLint Issues
- If you see "rule not found" errors, ensure all ESLint plugins are installed
- Check that the ESLint configuration matches your project's dependencies

#### Prettier Conflicts
- ESLint and Prettier are configured to work together via `eslint-config-prettier`
- If you see conflicts, run `npm run format` followed by `npm run lint:fix`

#### TypeScript Errors
- Ensure all dependencies have proper type definitions
- Check `tsconfig.json` for correct path mappings and compiler options

### Dependencies

#### Core Development Dependencies
- `eslint`: JavaScript/TypeScript linting
- `prettier`: Code formatting
- `typescript`: Type checking and compilation
- `@typescript-eslint/parser`: TypeScript parser for ESLint
- `@typescript-eslint/eslint-plugin`: TypeScript-specific ESLint rules
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier

#### React-Specific Dependencies
- `eslint-plugin-react-hooks`: React Hooks linting rules
- `eslint-plugin-react-refresh`: Fast refresh compatibility rules

### Configuration Files

| File | Purpose |
|------|---------|
| `eslint.config.js` | Primary ESLint configuration (flat config) |
| `.eslintrc.json` | Legacy ESLint configuration for editor compatibility |
| `.prettierrc` | Prettier formatting rules |
| `.prettierignore` | Files/directories to ignore during formatting |
| `tsconfig.json` | TypeScript compiler configuration |
| `tsconfig.app.json` | App-specific TypeScript configuration |
| `tsconfig.node.json` | Node.js-specific TypeScript configuration |