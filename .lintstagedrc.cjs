module.exports = {
  // "*.{ts,tsx}": ["pnpm type-check", "pnpm format", "pnpm lint"],
  "*.{ts,tsx}": ["pnpm prettier . --write", "pnpm eslint . --fix"],
};
