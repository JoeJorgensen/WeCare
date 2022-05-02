# Starter Project

1. Using rails 6.1.4.7 and ruby 3.0.2

2. This starter Project includes

- devise_token_auth
- react
- react-router
- axios
- react bootstrap
- proxy set to localhost:3001
- folder structure
- custom hooks to provide Authentication data

# Getting started

# Clone

1. git clone https://github.com/JoeJorgensen/starter-auth-project.git 'project name'

- ssh: git@github.com:JoeJorgensen/starter-auth-project.git

2. cd 'project name'

# Rails things

1. Renaming our database in the config/database.yml file (lines: 26/60/84-86)
2. bundle
3. $ rails db:create db:migrate (db:seed if needed)
4. $ rails s -p 3001

# React things

- $ cd client
- $ yarn
- $ yarn start

# Git Things

1. $ git remote rm origin
2. Create a new repo in github
3. $ git remote add origin <your ssh-link>

# Features / Explanation

# Tokens

1. When client logs in, the server will check the clients credentials
   and if valid it will give the client back a token via response.
2. When client makes subsequent resquests, needs to send toke, if token is invalid server will respond with a 401 error. (Unauthorized)
3. How does the server send and recieve tokens?
   (backend):devise_token_auth: sending in response.
   (frontend): devise-axios library (in index.js)

```javascript
import { initMiddleware } from "devise-axios";
// this is going to get token from api calls
// and set them to be sent on the next api call, also stored info to localStorage
initMiddleware();
```

# Auth Provider

1. gives us a way to control the 'user' state(where user is an authorized user)
   and methods to login, logout, register, etc.

```javascript
<AuthProvider>
  <App />
</AuthProvider>
```

### Three parts here

1. FetchUser: Checks to see if there is a valid user, and prevent Routes from
   getting render until the check is done

if fetchUser is in progress of Checking it looks like this

```javascript
<FetchUser>{null}</FetchUser>
```

2. Unprotected routes
   routes you don't need to be logged in to see..

```javascript
   {/* Unprotected */}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Home />}/>
```

3. Protected routes
   routes you do need to be logged in to see..

```javascript
<Route element={<ProtectedRoute />}>
  {/* Any Routes we throw in here, user needs to be logged in */}
  <Route path="/home" element={<HomeClass yo={"yoyo"} />} />
</Route>
```

```javascript
const ProtectedRoute = (props) => {
  // get user from Provider
  const auth = useContext(AuthContext);
  // if we have auth.user render the route
  // if not we can do something else, in this
  // case we redirect to Login screen
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};
```
