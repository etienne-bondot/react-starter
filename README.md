# React Starter v1.0.0

# Summary

[in progress...]

# Commands

## Bundles

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `yarn run build`       | Build all assets and app in development mode |
| `yarn run build:prod`  | Build all assets and app in production mode  |
| `yarn run start:watch` | Build app in hot reload mode                 |

## Storybook

| Command              | Description            |
| -------------------- | ---------------------- |
| `yarn run storybook` | Generate the storybook |

## Testing

| Command                                    | Description                      |
| ------------------------------------------ | -------------------------------- |
| `yarn run test:linter`                     | Execute the linter command       |
| `yarn run test:jest -- [options]`          | Run the Jest tests               |
| `yarn run test:jest:coverage -- [options]` | Run the Jest tests with coverage |
| `yarn run test`                            | Run all tests concurrently       |

> Notes on Jest

Some common options we use for **Jest**:

- `--no-cache` (after changing branch)
- `-u` updates the snapshots:
- To generate code coverage information in the `coverage/` folder: `yarn jest:coverage`;
- To test just one file: `path/to/the/file.js`

All the tests are located in the `__tests__/stories` directory with the name of the file they test. For example:

```bash
____ src/
  |____ app/
      |____ __tests__/
          |____ __snapshots__/
          |____ stories/
             |____ components
                 |____ foo.js
```
