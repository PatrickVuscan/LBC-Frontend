# Lady Ballers Camp

 <!-- > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution. -->


## Iteration 2 - Review & Retrospect
<!-- TODO: Fill in the last demo meeting before the D2 deadline. 
Ideally this is the time before your team introspective meeting. -->
<!-- TODO: Though if you do have meeting minutes from your partner meetings, 
that could be something good to link to from one of the documents! -->

 * When: November 24, 2020
 * Where: Online

## Process - Reflection

#### 1. Decisions That Turned Out Well 
<!-- List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, 
turned out to be successful. -->
<!-- * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s). -->

i) We agreed to attend a majority of Sunday team meetings, or notified at least 1 team member if we were absent from team meetings.
- Teammates were invested in this project, found each other an approachable source of help, were strongly communciative about
feature updates, and overall enjoyed each other's company.

ii) We informed each other every time we finished a new feature, improved an existing feature, or fixed a bug.
- Allowed team members to be up to date on the progress each member has made in regards to the code.
- Other team members could pull their changes and anticipate future merge conflicts.
- Other team members could give each other useful feedback on our commits.
- After every new complete feature, we informed the rest of the team of our current progress,
and the team would exchange successful productive work strategies.

iii) We remembered to submit pull requests before merging to the master branch.
- We wanted to practice submitting pull requests for our future internship or research position.
- We had an easy time learning how to submit pull requests, and consistently submitted pull requests.
- The rest of us could eliminate bugs early and fast before they could grow and accumulate in the master branch.

iv) We set up a GitHub Actions CI and a small test suite early.
- Using CI prevented us from committing code that failed to compile.
- We could run tests automatically after each commit, rather than remember to run tests manually.

<!-- v) Though we had separate repositories between the frontend and the backend, we made progress announcements general.
- The frontend and backend could stay up to date about each others' progress and plan out how they will connect
their corresponding features together.
- General announcements often guided the discussion for that week's team meetings.

vi) We shared resources that helped simplify our project.
- Other members of the team could learn more about the technology that they were using.
- Reduced development and research time for other members.
- Working with and reviewing each others' code doesn't require having to learn how their imported technologies work. -->

v) Instead of requiring consistent work submission, we required finishing our assigned tasks a few days before the next team meeting.
- The first few days after D2 began, we asked everyone to spend as much time as possible working on their assigned features.
As the D2 deadline approached, we agreed to set more strict deadlines, oftentimes the day of the next team meeting.
- It was difficult to expect everyone to consistently produce work towards D2 since it's possible for some team members to have multiple
competing assignment and midterm deadlines. However, we compensated by spending extra time to finish D2 after those deadlines passed.
Our progress evened out over time.

#### 2. Decisions that did not turn out as well as we hoped
<!-- List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, 
were not as successful as you thought they would be. --->
 <!-- * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be unsuccessful
 * Feel free to refer/link to process artifact(s). -->

i) We required bi-weekly meetings with LBC.
- Although we wanted consistent updates and communication with LBC, this commitment needed to be made on both sides of the communication. Unfortunately, LBC was not able to commit to this meeting schedule.

ii) We required our group to submit work regularly.
- Team members occasionally had many assignments and midterms occuring at roughly the same time, so they may not be available to work on the project fully unless they have dedicated a large block of time (e.g. at least 2 hours) and they didn't have an assignment due soon.

iii) We created a branch rule for master that required the approval of at least 1 team member before anyone can merge to master.
-  While ideally no one should ever commit code that has not been previously peer reviewed, enforcing this pull request rule on GitHub (in Settings > Branches) turned out to be too strict. This prevented productive members of the team from merging feature changes to master.
- If the majority of teammates are not available, pull requests may take a long time to process, thus slowing down our entire team. In the worst case, two major pull requests took about 18 hours for the team leads to process.
- However, we still encourage our team to submit pull requests before merging to master because it is good practice for a future internship or research position.

iv) We wanted to religiously use the JIRA.
- Tasks would often get lost on Discord and in Facebook Messenger.
- Because no one updated the JIRA tasks regularly, the JIRA statuses became out
of date. 
- Instead, we had to ask individual team members about their progress ourselves 
on Discord or Facebook Messenger to measure their progress, when instead team members
could just check the JIRA to find out how a team members is progressing in their tasks.
- In deliverable 3, we wish to see heavier use of the JIRA, instead of progress inquiries
scattered around Facebook or Messenger.

#### 3. Planned changes
<!-- List any **process-related** (i.e. team organization and how you work) changes you are planning to make 
(if there are any). -->
<!-- * Ordered from most to least important.
 * Explain why you are making a change. -->

i) We plan on pairing up at least one frontend person with a backend person working on a similar feature, and have
them collaborate closely with one another.
- e.g. If Arun is working on the login page and Henry is working on user authorization and authentification, then
they can stay in close contact with one another to avoid any last-minute frontend-backend integration surprises.

ii) We want to set up integration and end-to-end tests after the frontend and backend people have connected their
features together.
- So we (and developers outside of our team) can be more confident that our app components and pages still work.

iii) We could update the README.md file as we improved our features, rather than waiting until the D3 deadline to update it.
- This will spare our team from having to scramble to assemble a README.md file.
- It's useful to document the feature while it's still fresh in your mind.
- Similarly, we plan on working on the presentation in smaller bursts to maximize time spent making quality slides.

iv) We could add more appropriate linter checks.
- The problem was that our linter wasn't catching the right style errors. It flags trivial style issues like "excess whitespace," and completely misses more subtle style errors like callback hell, unsimplified boolean expressions, multiple statements per line, and statements with no effect.
- We could add more linter checks, like max statements per line, max nested callbacks, or simplifying boolean expressions
like "a && a" and "b || b", and also remove any linter checks that flag unreasonable prescriptive style violations.

## Product - Review

#### Q4. How was your product demo?
 <!-- * How did you prepare your demo?
 * What did you manage to demo to your partner?
 * Did your partner accept the features?
 * Were there change requests?
 * What did you learn from the demo from either a process or product perspective?
 * This section will be marked very leniently so keep it brief and just make sure the points are addressed -->
 
 <!-- TODOs: 
- LBC sent Patrick a set of articles for our Sanity page, and the LBC logo.
(TODO: Insert images of articles here)
- Arun proposed a set of redesigned LBC logos.
(TODO: Insert LBC original logo)
(TODO: Insert Arun's proposed LBC logos)
- TODO: 1. Meeting highlights with LBC.
- TODO: 2. Partner feedback on app.
- TODO: 3. Major decisions LBC wants us to implement.
- TODO: 4. Reflect on how meetings are going, based on coversations you've had with them.
-->

- Note: For more details, go to the ```lbc app demo feedback``` folder and view the ```CSC301H1 -- LBC Demo Feedback.txt``` file.
- To prepare our demo, we decided to load the app on our iPhone emulator before the beginning of
the app demo, and decided what each LBC demo participant would be doing. Before the presentation, we decided to iron out as 
many errors and warnings as possible during a pair programming session, lest they interrupt the flow of our presentation.

![Login Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/login_page.png)
![Timeline with No Personal Posts](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/timeline_page_no_personal_posts.png)

- Patrick talked about how Sanity Studio works, as well as the Articles and Resources page; Arun discussed the login 
page and his new logo design; Mo talked about the data flow of our app, and I (Danny) both take notes and presented the 
timeline on Nate's behalf.

![Timeline with Personal Posts](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/timeline_page_with_personal_posts.png)
![Create New Post Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/create_new_post.png)
![List of Articles](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/articles_page.png)
![Sample Article from the Article Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/sample_lbc_article.png)
![Resources Page](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/resources_page.png)

- Although LBC liked Arun's proposed logo redesign, a good UX design, a good color palette, the use of a Sanity CMS,
and its resemble to a community-based social media app like YikYak, they noticed that the Resources page needed the most improvement, since it was limited to displaying the emails, phone numbers, and websites of police stations. LBC wanted the 
resources page to also be able to e.g. provide mental health resources, report racism at work/school/home/in public.

![Original LBC Logo](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/original_lbc_logo.png)
![LBC Purple Logo Without Gradient, Without Basketball](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/logo_no_ball.png)
![LBC Purple Logo Without Gradient, With Basketball](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/logo_with_ball.png)
![LBC Purple Logo With Gradient, Without Basketball](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/lbc_logo_no_ball_gradient.png)
![LBC Purple Logo With Gradient, With Basketball](https://github.com/csc301-fall-2020/team-project-13-lady-ballers-camp-frontend/blob/iteration-02-review.md/readme_images/lbc_logo_with_ball_gradient.png)

- The influx of new suggested features we received from LBC throughout our app demo suggested that we should spend more 
time during LBC meetings clarifying the app's main requirements before working on the app to prevent being blocked by having
missing features later. After that, we can accept those images that LBC sent us. Although LBC didn't respond to our emails, 
it's important that we follow up with them more regularly to make sure they are informed about our app's progress, any major design decisions we've made, and any features we've completed,
regardless of how busy we and LBC are.
