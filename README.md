# WouldYouRather

In the "Would You Rather?" Project, a user can play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

Users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

User can select an account from the list of existing users.

<img width="438" alt="image" src="https://user-images.githubusercontent.com/17203612/173904377-fbdaffa7-676a-494d-a895-0163516fec82.png">

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the page.

<img width="1450" alt="image" src="https://user-images.githubusercontent.com/17203612/173904484-8000bc3f-4cf0-40d1-9634-3a62937911f5.png">

Each polling question links to the details of that poll. The details of each poll is available at questions/:question_id.

<img width="880" alt="image" src="https://user-images.githubusercontent.com/17203612/173904578-2510a5f6-0eff-4750-a232-5db283e94dd5.png">

The application shows a 404 page if the user is trying to access a poll that does not exist.

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll and are not allowed to change their answer after they’ve voted.

<img width="880" alt="image" src="https://user-images.githubusercontent.com/17203612/173904648-b963a926-8b8c-408a-81c8-3f880b33e2b6.png">

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions is available at the /add route.

<img width="880" alt="image" src="https://user-images.githubusercontent.com/17203612/173904710-3f44d9ac-a49e-409b-8428-2bb361703975.png">

Upon submitting the form, a new poll is created, the user is taken to the home page

You can also see the ranking of users on the leaderboard.

<img width="880" alt="image" src="https://user-images.githubusercontent.com/17203612/173905023-bf7513db-b97d-4375-a285-711873b30fe6.png">

To install the dependencies run:
npm install --force

To start the development server run:
npm start
