# Lady Ballers Camp - Team 13

## Product Details

#### Q1: What are you planning to build?
* A social mobile (both iOS and Android) app
* Target Group: BIPOC (Black, Indigenous and People of Colour) girls for ages 6 - 16 

1) Education: articles provided by LBC displayed, to empower users about their rights
2) Take Action: resources for users to connect with their elected officials (contact info, email templates, etc.)
3) Reporting: provides closest location for mental health centers, police stations, etc (with map)
4) User Stories: users can submit and view personal experience stories (Facebook-like interface)

Essentially this app is meant for LBC users to get access to articles, resources, other users’ stories, and empowerment to take action. In our case as developers, this is primarily a CMS delivery app, paired with posting, commenting, etc.


#### Q2: Who are your target users?

BIPOC youth (Black, Indigenous, People of Colour)
- Primarily marginalized girls age 6-16
- Will also be accessed by more users as LBC rebrands this app to be for LBC Youth, i.e. to work for members that are outside of its girl-camps.


#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

This app will make the helpful resources more easily found and accessible to those who are racialized and also to those who want to help racialized individuals. More specifically: 
* Equip racialized youth and students with the resources they need to deal with microaggressions at school, work etc. This provides them with the knowledge and understanding to feel supported in any situation. 
* Educate the target group on how to handle oppressive people and situations.
* Provide the latest resources created by LBC catered tailored to individual users. The app allows users to search for their particular topic of interest.
* Build a community experience and support by allowing users to create posts and stories about their personal experiences



#### Q4: How will you build it?

Frontend 
- React Native application
- Redux Toolkit for state management
- Native Base

Backend
- Python
- FastAPI

Database
- PostgresSQL

CI/CD
- Github Actions

Testing
- Jest
- PyTest

Deployment
- Google Cloud Platform

Architecture

![diagram](https://user-images.githubusercontent.com/21181457/96378031-72284200-1157-11eb-9039-1190390b7b92.png)

#### Q5: What are the user stories that make up the MVP?

Epics:
1) As a user, I want to find local mental health centers in order to get mental health support. 
2) As a user, I want to write to my government officials in order to inform them on issues of racism in my community.
3) As a user, I want to share my own experiences and view the experiences of others like me in order to connect with similar people in my community. 
4) As a user, I want to be informed on how to deal with microaggressions and oppression in order to stand up for myself and fight back against racism. 
5) As a user, I want to find articles in order to inform myself on my rights. 

These are just some of our epics. For a better reference of user stories, look at these, which are actually in our JIRA.

1) As a user, I need to be able to log in with an existing account, so that I have access to the application.
 - Acceptance Criteria: The working login displays properly, and I can use an existing account to log in.
2) As a user, I need to be able to register for a new account, so that I have access to the application.
 - Acceptance Criteria: The account creation screen displays properly, and I can create a new account and log in.
 - Blocked by: Story 1
3) As a user, I want to be able to create a post, so that I can share my message with other users.
 - Acceptance Criteria: I can enter text into a post, send this post, save it in the back-end, and then retrieve it from the backend for display.
4) As a user, I want to be able to upload photos and videos with my post, so that I can share better content with other users.
 - Acceptance Criteria: I can add photos to posts, store photos in the backend, and be able to retrieve them from the backend for display.
Blocked by: Story 3
5) As LBC, I want to be able to deploy content to the app, so the users can see good resources
 - Acceptance Criteria: Sanity is put to use, content can be pulled from Sanity
6) As a user, I want to be able to see other users' posts, so that I can learn from their experiences
 - Acceptance Criteria: I can pull posts from the backend, and display them in the front-end for users similar to a Facebook feed.

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Roles:

##### Designated Partner Contacts
- Patrick and Mohammad:
  - In charge of contact and communication with LBC. This entails setting up meetings and keeping the partner up to date with team progress. All messages and correspondence will have both Mo and Patrick CC’d.

##### Sprint Planners/Scrum Masters
- Frontend: Patrick
- Backend: Mohammad

They will assign and prioritize tasks, usually in the form of user stories for the team members to work on.

##### Frontend:
Patrick:
  * Strengths:
    * JavaScript and TypeScript
    * ReactJS is their bloodline when it comes to programming for web development
    * Redux for state management is something they are somewhat comfortable
    * Can use Material UI for lean development

  * Weaknesses:
   	* Not great at backend development
 	* Needs help with connecting front-end to backend
	* Cannot, for the life of him, set up servers and hosting
	* Cannot set up most things like middleware and CI/CD tools
	

Nate:
 * Strengths: 
   * Python, C
   * Android development,
   * Light React / React Native experience

 * Weaknesses:
   * No experience working with databases
   * Little knowledge of Node.js
   * New to JavaScript 
	

Arun
 * Strengths: 
   * Most experience with Android Dev
   * Light experience with local react projects and material ui
   * PostgreSQL knowledge

 * Weaknesses:
   * No practical experience with REST 
   * No practical experience with HTTP 
   * No deployment or CI/CD experience
Danny:
* Strengths: 
  * Python, Java, C
  * Databases (PostgreSQL, I’m currently learning mongoDB)
  * Data structures (but please don’t ask me how to code an AVL tree yet, I haven’t figured it out yet)
  * Design, and any kind of creative decisions (e.g. making UML diagrams, CRC cards, making ER database diagrams for DB design, etc.)
  * Refactoring code
  * Writing clear prose and documentation (things like short answer questions, preconditions and postconditions)
* Weaknesses:
  * Rusty on how each SOLID design principle and design pattern works
  * Rusty on advanced git commands such as git reset, git rebase, and git status, I’m more comfortable with basics ones like git add, git commit, and git push
  * New to writing basic unit tests, integration tests, UI tests
  * New to web development (HTML, CSS, JS)
  * New to frontend (React, Angular, Vue)
  * New to backend (Django, Flask, Node.js)
  * New to CI/CD (Heroku, AWS, CircleCI, TravisCI)

##### Backend:
Henry:
* Strengths: 
  * Javascript / Node, Python backend
  * SQL, MongoDB
  * Android Dev
* Weaknesses: 
  * Front end frameworks
  * UI designs
  * CI/CD tool familiarity
  

Sophie:
* Strengths: 
  * Python, C#, Java
  * Good understanding of REST api
  * Experience with PostgreSQL and MongoDB
* Weaknesses:  
  * New to front end 
  * New to JS
  * Not much full stack dev
  

Mohammad:
* Strengths:
  * Python/Nodejs for backend dev.
  * ReactJs with Sass for frontend dev + UI Designer
  * CI/CD using both AWS and GCP infrastructure.
* Weaknesses:
  * Mobile Development
  * Testing UI
  * SEO and website visibility in general

#### Q7: What operational events will you have as a team?

##### Partner Meetings:

Meeting 1
* Wednesday Oct 14
  * Introduced our team
  * LBC introduced themselves, stated their vision, and what they are looking for
  * Dove into their ideas as deeply as possible to get a good list of requirements, features, and what MUST be in the MVP
  * Showed them a mock-design based off of LBC's project proposal, and asked for their feedback on it.
  * Discussed how we are going to deliver content, and make it easy for them to create content
  * Discussed hosting, databases
  * Discussed how we are going to deploy app to app stores
  * Discussed pricing and costs of everything

Meeting 2
* Friday Oct 16
  * Discussed latest findings on which CMS to use, ended up choosing Sanity
  * Found deals for hosting as a non-profit
  * Decided on hosting with GCP
  * Found out that deploying on app stores is free for nonprofits

##### Regular Meetings:

* Sundays 12-4pm: Coding sessions, where members can easily ask each other questions and help each other out. Online (Zoom). 

* Meeting times for other things such as meeting with partner: Mondays 5-6pm, Wednesdays any time after 5pm, Fridays after 5pm. Meetings are to plan out development, check up on how members are doing and what they are working on, etc. Online (Zoom)


#### Q8: What artifacts will you use to self-organize?

* Discord
  * Sharing relevant links
  * Channels for live collaboration during designated work periods
* Facebook Messenger
  * Planning meetings and quick discussions 
* Google Calendar
  * Meeting scheduling and reminders
* JIRA
  * Task management, product backlog
  * Creating stories, epics, etc.
  * Sprints used for task prioritization

Patrick and Mo will split up frontend and backend tasks, then each team member will be assigned a unique page in which they will complete work on creating the required functionality. If a task load is too much to handle for one engineer, they can request help from other team members.

Separate github repos to enable easy CI/CD without having to interface with backend/frontend dependencies. Ideally, we want to decouple the backend from the frontend to keep code as reusable as possible.

Engineers will update the progress of their features under development on JIRA


#### Q9: What are the rules regarding how your team works?

We agree to work synchronously at least once a week, so that we can gradually complete project milestones. Outside of team meetings, we expect everyone to work asynchronously on separate branches and merge branches after a feature is complete. Please update the team of any progress you make, milestones you’ve completed, or any issues you encounter. We will either post messages and updates in a project-specific Discord text channel for our project and tag members whose work this affects, or communicate via Messenger on the CSC301 project group chat. 

Group meetings exist to check in on one another and hold each other accountable on tasks we assign to you. You are expected to attend meetings, or provide a strong reason for missing a meeting (e.g. studying for a midterm or exam, finishing an assignment from another course, fulfilling work, personal, or family obligations, etc.). Meetings will continue if and only if at least 3 members can make it to the meaning. We might hold a 30 minute scrum meeting at the beginning of each week to update each other on our progress and ask the team for help. 

##### Conflict Scenarios:

* TypeScript vs JavaScript:
  * After discussing the pros and cons of these languages, we decided to use JavaScript for the frontend, and Python for the backend. We saw that using JavaScript will be quicker for us and result in more lean development, but agreed that this may result in problems down the road in typing-related aspects.

* Non-responsive team members:
  * If you do not respond to team messages for more than 48 hours, and fail to notify other team members first, we will first attempt to contact you by any means possible -- Facebook, Discord, text, phone, or even in-person (obeying social distancing orders of course). If you still don’t respond, we will report you to Adam (our project TA) and the CSC301 professors that you have ghosted us, and they will decide how to move forward with our project. (maybe the offending person gets a warning, faces a penalty, or gets removed from the team?)

* Indecisions:
  * You should try to resolve any indecisions on your own first by weighing the pros and cons of each scenario, and then discuss among your subgroup (i.e. frontend group or backend group). If the situation needs to be expanded in scope, we will first bring it up to our specific subgroup  (i.e. frontend or backend teammates), and then escalate to the whole team if needed.

If a situation arises where there is complete disagreement, all parties will present their arguments and merit before voting on an appropriate decision. We will also look at alternative outcomes that may arise through discussion with other team members, as a compromise for the parties involved. We also find the idea of planning poker quite interesting - so we intend to use it for user stories conflict/indecisions.

##### DESIGN BEFORE CODE

To minimize the amount of technical debt we accrue, we agree to prioritize sound design over implementation. We will likely use some combination of Test Driven Development (TDD) and Behavioral Driven Development (BDD) to establish our design. Our design phase consists of:

* establishing clear user stories and use cases
* establishing clear specifications
* brainstorming potential software design using UML diagrams and potential database designs using ER diagrams
* brainstorming preliminary test cases, making use of test stubs, test doubles, etc. (Think back to the Robert Martin article in the unittesting lecture: https://blog.cleancoder.com/uncle-bob/2014/05/14/TheLittleMocker.html)

In past group projects, we have found it frustrating to debug code because we did not think through the structure or misunderstood the specifications. 

If we are pressed for time, Patrick or Mo can email Adam for an extension on behalf of our team.

Whatever you do, do not push any code to GitHub before settling on an excellent design!

##### Our Coding Workflow

While we code, it is our team’s goal to make sure that our code stays well-organized, readable, clear, and adheres to our programming conventions. We will use linting to auto-format our code. Linting will help us establish good coding conventions by enforcing consistent code before we push it to our designated repositories. Well designed code will reduce the amount of time spent finding bugs or arguing over trivial style differences, and let us focus more on doing the project. 

To maintain code readability:
* Use proper indentation (even though it’s optional for Java-like languages)
* Use adequate whitespace in expressions (e.g. x = 5 vs. x=5 vs. x    =    5)
* Use meaningful, accurate variable names.
* Avoid convoluted expressions (e.g. i++ + ++i;)
* No two statements on the same line (e.g. wakeUp(); brewCoffee(); on the same line)
* No one-line if-statements or one-line loops allowed (e.g. for (int i = 0; i < n; i++) j++; or if (hoursOfSleep < 6) return false;)

For your own peace of mind…
* 2 spaces/tabs not 4.
* Curly spaces on the same line, as opposed to on separate lines. This doesn’t affect readability much, and all else equal it saves a little bit of space. (https://softwareengineering.stackexchange.com/questions/2715/should-curly-braces-appear-on-their-own-line)
* Use camelCase for Java-like languages, pothole_case for Python-like languages.

To maintain code cleanliness:
* Use helper functions wherever possible to keep code modular, and avoid repeating code (Yeah, I’m looking at you, people who write 100-line functions, and copypasta programmers).
* Proper docstrings for non-trivial methods.
* Avoid excessive nested loops or nested if-statements. Consider using a guard clause to flatten a nested if-statement: (https://medium.com/@scadge/if-statements-design-guard-clauses-might-be-all-you-need-67219a1a981a) 
* Use comments sparingly. Comments should only explain why your code does what it does, rather than remind the reader what it does and how the code does it. Any method you use whose behaviour can be found in its documentation doesn’t deserve a comment!
* Use the debugger for debugging or logging, avoid writing print statement confetti.

To progress at a reasonable pace:
* It’s best to code when you’re most alert. You’ll be more productive that way since you’ll write better code more quickly, and catch bugs more easily.
* Don’t get too attached to your code! Be open to allowing your code to evolve.

We don’t always write perfect code the first time, but we also don’t want to let bugs accumulate in our codebase either. CI frameworks only catch compilation errors, but we must catch code smells and antipatterns ourselves. Our “fail fast” approach to handling commits will give us a better chance of finding potential code smells early before they cause more trouble later on.

Before pushing code to the main branch, you must submit a pull request for the project heads to review. Before the project heads will let you push code, they must follow this procedure:
* Our code passes all GitHub Action CI tests, otherwise they will not bother reading your request.
* The team head and two other group mates verify that our code is clear, easy to read, and follows at least one design principle. We can reject pull requests if the code is hard to read and obeys no design principles, and suggest ways you can refactor your code or suggest relevant design patterns/SOLID principles for you to use.
* Commits are reasonably sized. We can reject pull requests whose commits are too large since they increase the likelihood of a major mistake that can only be solved by git reverting a large portion of your work. We may ask you to decompose your commits so that they’re atomic. An atomic commit should meaningfully improve on previous commits (e.g. “added login buttons” or “refactored login using the factory pattern” rather than “added a comment”).

----
### Highlights

1) For our content management system, we were considering using either Sanity or Contentful. Contentful is starting to be viewed as outdated, and Sanity would be more simplistic for LBC content writers to use.  Furthermore, as developers, the Sanity API looks much more attractive and easy to integrate with the rest of our backend services.
2) In the first meeting, we discussed our budget for the app. LBC wanted both an iOS and an Android app. Since LBC is a nonprofit organization, we decided to prioritize tech with lower prices/free as we already had some basic fees for publishing the app. 
3) We discussed the different non-profit programs for deployment of mobile apps driving costs from $99 for the first year + $25 for subsequent years to a one-time $25 fee, given that Apple provides free service for nonprofits.
4) For deployment, we were considering both Google Cloud Platform and Amazon Web Services. AWS has a nonprofit program that they have run out for this quarter. So we argued that we can use GCP services at lower cost, potentially driving them to zero, and then make the switch at the beginning of next year. 
5) We detailed that the app will be packaged in a way that it will be infrastructure- independent to make our app portable from one Cloud provider to another. 
