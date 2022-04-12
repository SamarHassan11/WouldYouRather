# WouldYouRather
This project is part of Udacity's React Nanodegree.

To install the dependencies run:
npm install --force

To start the development server run:
npm start

User can select an account from the list of existing users.

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the page.

Each polling question links to the details of that poll. The details of each poll is available at questions/:question_id.

The application should show a 404 page if the user is trying to access a poll that does not exist.

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll and are not allowed to change their answer after they’ve voted.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions is available at the /add route.

Upon submitting the form, a new poll is created, the user is taken to the home page
