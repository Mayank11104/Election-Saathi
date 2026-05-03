# Testing — Election Saathi

## Test Architecture
Three-layer testing strategy:
- **Unit Tests** — Vitest + React Testing Library (parser functions, components)
- **Integration Tests** — Component interaction and user flows
- **E2E Tests** — Playwright full browser automation

## Running Tests
```bash
npm test                 # unit + integration
npm run test:coverage    # with coverage report  
npm run test:e2e         # end-to-end browser tests
npm run test:all         # everything
```

## Coverage Targets
- Lines: 70%+
- Functions: 70%+
- Branches: 60%+

## What is Tested
- All 7 parser functions (`isNumberedStep`, `isBullet`, `isHeading`, etc.)
- MessageFormatter — all 9 block types
- ChatMessage — user/assistant/loading states, copy button functionality
- ChatPage — full send/receive/error flow, language selection, starter chips
- E2E — real browser user journey, input interactions

Run `npm test` before every commit to ensure nothing is broken.
