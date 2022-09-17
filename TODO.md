- [ ] login page -> choose user == login

- [ ] ALL page: show user, logout button
- [ ] chapters: answered/unanswered pools
- [ ] default unanswered

---

Pool page: questions/:question_id

- [ ] Text “Would You Rather”;
- [ ] Avatar of the user who posted the polling question; and
- [ ] Two options.

answered pool:

- [ ] Text of the option;
- [ ] Number of people who voted for that option; and
- [ ] Percentage of people who voted for that option.

- [ ] The option selected by the logged-in user should be clearly marked

- [ ] 404 page if the user is trying to access a poll that does not exist
- [ ] navigation bar so that the user can easily navigate anywhere in the application
- [ ] Users can only vote once per poll

---

Pool add /add
Form

- [ ] text “Would You Rather”
- [ ] have a form for creating two options
- [ ] a new poll should be created, the user should be taken to the home page

---

Leader board /leaderboard

- [ ] User’s name;
- [ ] User’s picture;
- [ ] Number of questions the user asked; and
- [ ] Number of questions the user answered

- [ ] The more questions you ask and answer, the higher up you move.
- [ ] The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar

---

You will also be expected to write at least ten unit tests for the project. The first six should be the following:

- [ ] For the \_DATA.js file, write an async unit test for \_saveQuestion to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
- [ ] For the \_DATA.js file, write an async unit test for \_saveQuestion to verify that an error is returned if incorrect data is passed to the function.
- [ ] For the \_DATA.js file, write an async unit test for \_saveQuestionAnswer to verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function.
- [ ] For the \_DATA.js file, write an async unit test for \_saveQuestionAnswer to verify that an error is returned if incorrect data is passed to the function.
- [ ] Write a snapshot test for at least one file.
- [ ] Write a DOM test for at least one file which uses the fireEvent function. For example use fireEvent.click() for clicking a button and verifying that something changed in a component or fireEvent.change() to add text to an input field or select an option in a dropdown. After doing this, verify the UI changed in some way using the expect() method from jest.
      The remaining four unit tests can be to verify any function or component you are writing for this project. Here are some ideas:

- [ ] On the login page, verify that a user name field, password field, and submit button are present on the page.
- [ ] Verify that a user entering an incorrect username or password and clicking submit will see an error on the page.
- [ ] Verify that the leaderboard is displaying the correct user name, number of questions asked, and number of questions answered.
- [ ] For answered polls, verify that the percentage of people who voted for an option is calculated and displayed correctly.
- [ ] Verify the navigation bar displays all expected links.
