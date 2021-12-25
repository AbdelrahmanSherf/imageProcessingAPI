# Udacity Image Processing API

## Description
This API can be used as a placeholder that allows you to resize an image's width and height based on url parameters. 

**Project Structure.**
```
images 
resizzedImages
spec
    support
        jasmine.json
src
    functionality
        resizeFunc.ts
    routes
        api
            resizingRoute.ts
        router.ts
    tests
        helpers
            reporter.ts
        homeRouteSpec.ts
        resizingRouteSpec.ts
    app.ts
node_modules
.eslintrc.js
.prettierignore
.prettierrrc
package-lock.json
pachage.json
tsconfig.json
LICENSE.txt
README.md 
```

# Initialize The project
## start the server
1. Install all dependencies
``` npm install ```

2. Build the project from TypeScript to JavaScript
``` npm run build ```

3. Start the Server
``` npm start ```
## The server will start on port: 3000, and the default host is on: http://localhost:3000.

4. Run the Tests
``` npm run test ```

5. Run Prettier and ESLint 
``` npm run prettier ```
``` npm run lint ```

# Functionality and Endpoints
1. Homepage Endpoint
``` http://localhost:3000/home-page ```

2. Resizing Endpoint
``` /api/image/resize?name={image-name}width=<image-width>&height=<image-height> ```

3. API main Endpoint 
``` /api ```
_________________________________
## License
[License](LICENSE.txt)

### Abdelrahman Mostafa
