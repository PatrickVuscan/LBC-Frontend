# Lady Ballers Camp - Team 13

## Product Details

#### Q1: What are you planning to build?

A mobile app (iOS & Android) with 4 pages:
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

This app will empower racialized youth and students and equip them with the resources they need to deal with microaggressions at school, work and anywhere else they go. They will have the knowledge and understanding to feel confident in any situation. They will know how to handle oppressive people and situations so that they can continue being the best version of themselves. 

This application is meant for accessibility of resources, which are catered specifically to this community of members. The catered content, created by LBC, will be directed towards its members. Furthermore, this community will be able to create posts and stories about their personal experiences, which will be important for building community within LBC.


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

<p align="center">
  <img src="">
</p>

![diagram](https://user-images.githubusercontent.com/21181457/96378031-72284200-1157-11eb-9039-1190390b7b92.png)

#### Q5: What are the user stories that make up the MVP?

Epics:
1) As a user, I want to find local mental health centers in order to get mental health support. 
2) As a user, I want to write to my government officials in order to inform them on issues of racism in my community.
3) As a user, I want to share my own experiences and view the experiences of others like me in order to connect with similar people in my community. 
4) As a user, I want to be informed on how to deal with microaggressions and oppression in order to stand up for myself and fight back against racism. 
5) As a user, I want to find articles in order to inform myself on my rights. 

These are just some of our epics. For a better reference of user stories, look at these, which are actually in our JIRA.

1) As a user, I need to be able to log in, so that I have access to the application
 - Acceptance Criteria: Working login
2) As a user, I need to be able to create an account, so that I have access to the application
 - Acceptance Criteria: Account creation screens, can create an account and then log in
Blocked by: Story 1
3) As a user, I want to be able to create a post, so that I can share my message with other users
 - Acceptance Criteria: Working post functionality, can type up a post as a user which gets saved in back-end, can be retrieved for displaying
4) As a user, I want to be able to upload photos and videos with my post, so that I can share better content with other users
 - Acceptance Criteria: Able to add photos to posts, photos are stored, and able to be retrieved
Blocked by: Story 3
5) As LBC, I want to be able to deploy content to the app, so the users can see good resources
 - Acceptance Criteria: Sanity is put to use, content can be pulled from Sanity
6) As a user, I want to be able to see other users' posts, so that I can learn from their experiences
 - Acceptance Criteria: posts are pulled from backend, displayed on front-end for user in facebook-style manner

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
  * introduced our team
  * their introduction of the members of the team, their vision, and what they’re looking for
  * dove into their ideas as deeply as possible to get a good list of requirements, features, and what MUST be in the MVP
  * showed them a mock-design based off of our intuition from before the meeting. Discussed what was good and what wasn’t
  * Discussed how we’re going to deliver content, and make it easy for them to actually create content
  * Discussed hosting, databases
  * Discussed how we’re going to deploy app to app stores
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

Tasks are first split into frontend and backend tasks, then each team member will be assigned a unique page in which they will complete work on creating the required functionality. If a task load is too much to handle for one engineer, they can request help from other team members.

Engineers will update the progress of their features under development on JIRA


#### Q9: What are the rules regarding how your team works?

We agree to work synchronously at least once a week, so that we can gradually complete project milestones. Outside of team meetings, we expect everyone to work asynchronously on separate branches and merge branches after a feature is complete. Please update us of any progress you make, milestones you’ve completed, or any issues you encounter -- this will be done through messages and updates in a specific Discord text channel built for this, where we will tag the other members whose work this affects. Communication can also be done through the team messenger group chat.

Group meetings exist to check in on one another and hold each other accountable on tasks we assign to you. You are expected to attend meetings, or provide a strong reason for missing a meeting (e.g. studying for a midterm or exam, finishing an assignment from another course, fulfilling work, personal, or family obligations, etc.). Meetings will continue if and only if at least 3 members can make it to the meaning.

##### Conflict Scenarios:

* TypeScript vs JavaScript:
  * After much discussion about both aspects of the languages, pros and cons, we decided to use JavaScript for the frontend, and Python for the backend, as a result of weighing the options. We saw that using JavaScript will be quicker for us and result in more lean development, but agreed that this may result in problems down the road in typing-related aspects.

* Non-responsive team members:
  * If anyone goes AWOL/ghosts the team (i.e. doesn’t respond to team messages for more than 48 hours and doesn’t notify other team members first), we will first attempt to contact them by any means possible -- Facebook, Discord, text, phone, or even in-person (obeying social distancing orders of course). If they still don’t respond, we will report them to Adam (our project TA) and the CSC301 professors that they have ghosted us and decide how to move forward with the project. (maybe the offending person gets a warning, faces a penalty, or gets removed from the team?)

* Indecisions:
  * You should try to resolve any indecisions on your own first by weighing the pros and cons of each scenario, and then discussing among your subgroup (i.e. frontend group or backend group). If the situation needs to be expanded in scope, we will first bring it up to our specific subgroup  (i.e. frontend or backend teammates), and then escalate to the whole team if needed. 
  If a situation arises where there is complete disagreement, all parties will present their arguments and merit before voting on an appropriate decision. We will also look at alternative outcomes that may arise through discussion with other team members, as a compromise for the parties involved.

##### Programming Style Conventions:

It is our team’s goal to make sure that our code stays well-organized, readable, and clear -- making it easier to spot bugs. Agreeing on a reasonable set of programming conventions helps us spend less time arguing over trivial style differences, and more time working on the project:

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

##### DESIGN BEFORE CODE

To minimize the amount of technical debt we accrue, we agree to prioritize sound design over implementation. We will likely use some combination of Test Driven Development (TDD) and Behavioral Driven Development (BDD) to establish our design. Our design portion consists of:

* establishing clear user stories and use cases,
* establishing clear specifications,
* brainstorming potential software design using UML diagrams and potential database designs using ER diagrams,
* brainstorming preliminary test cases, making use of test stubs, test doubles, etc. (Think back to the Robert Martin article in the unittesting lecture: https://blog.cleancoder.com/uncle-bob/2014/05/14/TheLittleMocker.html)

In past group projects, we’ve found it frustrating to debug code because we didn’t think through the structure or misunderstood the specifications. 

If we’re pressed for time, Patrick or Mo can email Adam for an extension on behalf of our team.

Whatever you do, do not push any code to GitHub before settling on an excellent design!

##### CODE REVIEWS

We don’t always write perfect code the first time, but we also don’t want our code to degrade over time and let bugs slowly creep into our code. CI frameworks only catch compilation errors, but we must catch code smells and poor code design ourselves. Our “fail fast” approach to handling commits will give us a better chance of finding potential code smells early before they cause more trouble later on. 

We should only push code if and only if:
* Our code passes all CI tests (what CI are we using?)
* The team head and two other group mates verify that our code is clear + easy to read, our commits are reasonably sized, and our code follows at least one design principle. We can flag people for making too large commits and ask you to decompose your commits, suggest ways you can refactor your code, or suggest relevant design patterns/SOLID principles to use.

##### OUR CODING WORKFLOW 
We agree to follow this workflow as closely as possible to make the software development process as smooth as possible:
* Keep commits small and atomic. Avoid large commits, since accepting large commits increases the chances of a severe mistake that can only be fixed by git reverting a large portion of your work. This is not fun for the whole team! An atomic commit should meaningfully improve on previous commits (e.g. “added login buttons” or “refactored login using the factory pattern” rather than “added a comment”).
* Use the debugger for debugging or logging as opposed to writing print statement confetti.
* Don’t get too attached to your code! Be open to allowing your code to evolve.
* It’s best to code when you’re most alert. You’ll be more productive that way since you’ll write better code more quickly.

----
### Highlights

1) For our content management system we were considering using either Sanity or Contentful, but Contentful is starting to be viewed as outdated, and Sanity would be more simplistic for LBC content writers to use.  Furthermore as developers the Sanity API looks much more attractive and easy to integrate with the rest of our backend services. 
2) In the first meeting, we discussed our budget for the app. LBC wanted both an iOS as well as an Android app. Since LBC is a non-profit organization, we decided to prioritize tech with lower prices/free as we already had some basic fees for publishing the app. 
3) We discussed the different non-profit programs for deployment of mobile apps driving costs from $99/year +$25 to $25 given that Apple provides free service for nonprofits.
4) For deployment we were considering both Google Cloud Platform and Amazon Web Services. AWS has a nonprofit program that they have ran out for this quarter. So we argued that we can use GCP services at lower cost potentially driving them to zero, and then make the switch at the beginning of next year. 
5) We detailed that the app will be packaged in a way that it will be infrastructure independent to facilitate switching from one Cloud provider to another. 
