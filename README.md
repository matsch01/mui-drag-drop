# MUI Drag & Drop Event Issue

## To Reproduce

1. Run test using @mui/x-data-grid-premium 8.8.0 and see that it passes.
2. Run again using 8.9.1 and see that it fails

## Steps

### Run in 8.8.0 and see that it passes.

1. Run yarn install
```
yarn install
```
2. Run Cypress test in watch mode
```
yarn unit:watch
```
3. Run test Demo.ct.tsx from UI.
- The test should pass.

### Run in 8.9.1 and see that it fails.

1. Delete node_modules
2. Kill Cypress
3. Update package json
```
 "@mui/x-data-grid-premium": "8.9.1"
```
4. Run yarn install
```
yarn install
```
5. Run Cypress test in watch mode
```
yarn unit:watch
```
6. Run test Demo.ct.tsx from UI.
- The test should fail.



