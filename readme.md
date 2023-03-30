## API
This API's serve 3 roles: Mentor - Mentee - Normal User.
Using the sign up API we can create one of mentioned above user roles.
Then by signing in, we can use the token to access:

Mentor:
- Able to Create a classroom 
- Able to Get classroom list
- Able to Update exercise within a classroom
- Able to assign a mentee into a classroom
- Able to see list of mentee in class
- Able to update a mentee score

Mentee:
- Able to Get classroom list
- Able to check a classroom

Other Roles:
- Able to see leaderboards

## How to use the app
- Clone the repositories
- Create `.env` from the `.env.example`
- `npm install`
- `npm start`

## Depedencies
Node v14.21.3
Mongo 5.1.0
Mongoose 6.7.3
ExpressJs
bcryptJs