# Welcome to the Lady Ballers Camp Frontend Repository 👋

<!-- > _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. -->

![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)

> This is a mobile app for Lady Ballers Camp (https://ladyballerscamp.org/) made with React Native.

## Git Commit Standards

Our git commits obey these coding standards:
[Documentation on Git Commit Standards](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

## Viewing our Deployed React Native App

Here's the URL to our deployed React Native App: <!-- ## ✨ [Our Demo](example.com) -->

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
 <!-- * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem? -->

- Our LBC app attempts to arm BIPOC (Black, Indigenous, and People of Color) youth ages 6 - 16 with resources that will allow them to stand up for social justice issues that matter most to them.

## Key Features
 <!-- * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built -->

- Users can create accounts and log in (and perhaps reset their password)?
- Users can see a timeline of posts related to social justice.
- Users can create posts for the timeline with a title, and delete these posts 
- Users can comment on other people's posts as well as their own 
- Users can view articles related to social justice.
- Users can view helpful resources, like URLs, email addresses, and phone numbers of police center websites.

## Instructions
 <!-- * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully -->

- If you're a new user, you must first create a new account by tapping the "Create New Account" button
on the login page before you can log in.

<!-- (TODO: Insert picture of create new account page) -->

- If you have an existing account, you can simply log in by entering your credentials and then tapping
"Log In." Once you've logged in, you are taken to your timeline.

<!-- (TODO: Insert picture of log in page) -->

<!-- - If you've forgotten your password, you can reset it by tapping the "Reset Password" button. -->

<!-- (TODO: Insert picture of password reset page) -->

- You can view timeline posts in the "Timeline" page. In order to create a new post click the "New Post" button. From here you can add a title and content and click the "Post" button to post. If you want to remain anonymous, you can click the "Anonymous" button before you post. 
- In order to comment on posts, you can click on the comment button on the bottom left of each post. From this screen you can leave a comment with the text box and the "Add Comment" button. 

<!-- (TODO: Insert picture of timeline page) -->

- In order to view articles, you can click on the articles button on the bottom navigator. This applies to resources as well for getting in contact with local officials. 
 
 ## Development requirements
 <!-- * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README). -->
 
 ### Backend 
 1) Navigate to the target directory
 2) ```git clone https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-backend.git```
 3) Follow the instructions written in ```setup.md```
 
 ## Deployment and Github Workflow
<!-- Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it! -->
 
 - We had each major feature worked on by one member on their own branch. This was to avoid conflicts and isolate code issues. 
 - When a major feature was done, this user would first merge master into their branch in order to check for conflicts and address them. After that, they would create a pull request for their branch to be merged with master. Another developer would review this code for style, syntax, or other errors and then confirm the changes to master if they were ready.
 
 ### Backend
 - We have a pre-commit hook that checks for linting errors in the files we commit, so that we are consistent in our code writing style 
 - As tasks were divided up between the backend team based on functionality, we each used a separate branch for each functionality. Pull-requests were made with the other members as the reviewers. At least one had to review and approve it and then merge it. Merge conflicts were avoided as much as possible by working on separate files, but when they would emerge, we pair programmed to resolve it. 

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
