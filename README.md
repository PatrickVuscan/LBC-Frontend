# Welcome to the Lady Ballers Camp Frontend Repository 👋

<!-- > _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. -->

![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)

> This is a mobile app for Lady Ballers Camp (https://ladyballerscamp.org/) made with React Native.

## Git Commit Standards

Our git commits obey these coding standards:
[Documentation on Git Commit Standards](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

## Viewing our Deployed React Native App

Since LBC is a non-profit, we are currently in the middle of registering LBC as a non-profit to
take advantage of non-profit AWS deployment pricing.
As such, there is currently no URL to our deployed React Native app for Deliverable 2. It may not be
ready until about a month after the Fall 2020 semester ends.

<!-- ## ✨ Here's the URL to our deployed React Native App:  [Our Demo](example.com) -->
<!-- (TODO: Insert deployed react native app here) -->

## Install

Make sure you have all of the right development dependencies.

```sh
npm install
```

## Run tests

To run jest with the ```--coverage``` flag, enter:

```sh
npm test
```

All tests should pass. 

![All Passing Tests](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/all_passing_tests.png)

## Description 
 <!-- * Provide a high-level description of your application and its value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem? -->

- Our LBC app attempts to arm BIPOC (Black, Indigenous, and People of Color) youth ages 6 - 16 with various empowerment
and mental health resources that will allow them to feel safe, welcome, and healthy.

## Key Features
 <!-- * Describe the key features in the application that the user can access.
 * Provide a breakdown or detail for each feature that is most appropriate for your application.
 * This section will be used to assess the value of the features built. -->

- Users can create accounts and log in (but cannot yet reset their password).
- Users can read posts written by other LBC users.
- Users can create posts for the timeline with a title under their username or as an anonymous user, and delete their
own posts.
- Users can comment on other people's posts as well as their own.
- Users can view articles related to social justice.
- Users can report hate crimes that occur at work, school, in private, or in public to authorities with the given contact
info (e.g. URLs, email addresses, and phone numbers), access mental health resources, read empowerment articles, and stories 
from other LBC users.

## Instructions
 <!-- * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully -->

<!-- - If you're a new user, you must first create a new account by tapping the "Create New Account" button
on the login page before you can log in. -->

<!-- (TODO: Insert picture of create new account page) -->

<!-- - If you've forgotten your password, you can reset it by tapping the "Reset Password" button. -->
<!-- Just enter in an existing username, and a new password. -->

<!-- (TODO: Insert picture of password reset page) -->

- If you have an existing account, you can simply log in by entering your credentials and then tapping the 
```Log In``` button. Once you've logged in, you are taken to the ```Timeline``` page.

For the purposes of deliverable 2, the credentials are:

Username: user
Password: user

In deliverable 2, there is no option to create a new account or reset your password.

![Log In Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/login_page.png)

- You can view timeline posts in the ```Timeline``` page, with the most recent post displayed first. In order to create a new post click the ```New Post``` button on the top right of the screen. 

![Timeline Page with No Personal Posts](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/timeline_page_no_personal_posts.png)
![Timeline Page with Personal Posts](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/timeline_page_with_personal_posts.png)

From there, you can add a title and content and click the ```Post``` button to post. If you want to remain anonymous, you can click the ```Anonymous``` button on the bottom left of the screen before you post.

![Create New Post Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/create_new_post.png)

- In order to comment on posts, you can click on the comment icon on the bottom left of each post to add a new comment.
On the ```Write a New Post!``` page, you can leave a comment with the text box and then click the ```Add Comment``` button to post a comment.

<!-- ![Create New Comment Page]() -->

- In order to view articles, you can click on the ```Article``` button on the bottom navigator. Initially, you'll see a list of article cards, but you can view the full article by clicking on the ```View the Full Article``` button.

![Start of Article Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/articles_page.png)
![Sample Article from Article Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/sample_lbc_article.png)

- In order to view resources, you can click on the ```Resources``` button on the bottom navigator. On this page, you can view the contact info of various local officials.

If we have time in Deliverable 3 or 4, we will add buttons in the ```Resources``` page that let you select which resource you want to access -- mental health resource, ability to report emergencies and non-emergencies, whether they occur at school, work, in public, or in private.

![Resources Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/README.md/readme_images/resources_page.png)
 
 ## Development requirements
 <!-- * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README). -->
 
 ### Frontend
 1) See ```Install``` section at the top.
 2) Enter ```npm run start``` into your terminal to run the app locally.
 3) See ```Run tests``` section at the top.

 ### Backend 
 1) Navigate to the target directory
 2) Enter ```git clone https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-backend.git``` into your terminal.
 3) Follow the instructions written in ```setup.md```.
 
 ## Deployment and Github Workflow
<!-- Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it! -->
 
 Frontend and Backend Common Workflow
 - Each teammate works on their assigned feature(s) on their own branch(es), named after the feature we are working on.
 Although we try our best to work on different files to eliminate merge conflicts, sometimes it's possible that two or more teammates may end up making conflicting changes to the same file. Regardless, working on separate branches helps mitigate 
 merge conflicts and isolate errors and warnings on their current branch from the master branch.
 - When a major feature was done, we would first merge master into their branch to ensure our work was up to date
 with master and address any conflicts that appear via pair programming. Next, we'd submit a pull request to merge all 
 changes on our current branch to master. Another teammate would review this code for style, syntax, or other errors and then approve the changes before finally allowing us to merge to master.
 
 Frontend-Specific Workflow
 - Naming Convetion: camelCase (React Native/Javascript)
 - We're using ESLint that checks for common linting errors. However, we don't have any branch checks or any CI set up for deliverable 2, since it doesn't make much sense to write tests for UI components; component design is subject to change.
 - The pull request process is the same as in the ```Frontend and Backend Common Workflow``` section.
 - We do not have a deployment process yet.
 - We plan on using AWS to deploy our app, and we plan on setting up auto-deployment to trigger upon pushing to master.
 - For now, we're using jest to house a set of simple unittests until we can either add more jest tests or replace the jest testing framework with better ones (e.g. selenimum for integration testing, cypress for end-to-end testing). 

Backend-Specific Workflow
 - Naming Convention: snake_case (Python)
 - We have a pre-commit hook that checks for linting errors in the files we commit, so that we are consistent in our code writing style.
 - The pull request process is the same as in the ```Frontend and Backend Common Workflow``` section, except there is a 
 branch rule that states that at least 1 other member of the backend team must approve the pull request before we can
 merge to master.
 - We do not have a deployment process yet either.
 - We plan on using AWS to deploy our app, and we plan on setting up auto-deployment to trigger upon pushing to master.
 - We will use a docker with GitHub actions to deploy to AWS as this is what is natural to us. 

 ## Licenses 
 <!-- Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice? -->

LBC already has a website, so they want a mobile app instead.
We chose React Native, and Facebook announced as of February 2018 that all React products are under the MIT License.
(https://www.asapdevelopers.com/react-native-update-to-mit-license/#:~:text=In%20September%202017%2C%20Facebook%20announced,Native%2C%20Metro%2C%20and%20Yoga.)
MIT licenses offer permissions to distribute this software freely provided that we include the MIT license text at the beginning of our app.
(https://www.quora.com/What-are-the-pros-and-cons-of-the-MIT-license)
