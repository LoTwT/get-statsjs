# get-statsjs

[![get-statsjs](https://img.shields.io/npm/v/get-statsjs.svg)](https://npmjs.com/package/get-statsjs)

## Usage

### Installation

```bash
pnpm add get-statsjs
```

### Example

```typescript
import { getStatsjs } from "get-statsjs"

// get the stats.js instance
// receive a target element, the default is document.body
const { stats, mount, dispose } = getStatsjs()
```

## License

[MIT](./LICENSE)
