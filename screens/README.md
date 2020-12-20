# This folder contains the principle screens used in the application

## Login

This is the login page, with creating account on same page - note that there isn't a separate screen for that as of now, nor is there a forgot account/password screen/option.

## Connect

The connect and timeline screens are in this repo

- Connect has the drawer navigation component inside of it, as well as the Connect screen overarching component
- Timeline is for the actual Timeline of posts

---

# Note that these following files take a similar pattern, different from the previous ones

## Reach Out

While technically under Connect, and accessible from the Connect screen, through the Brain icon, Reach Out here is used for accessing mental health services and such

- Connect has the drawer navigator used for these screens (needs more work)
- ReachOutCategories displays the different categories
- ReachOutResources displays all the different articles under that category
- And from that, the article is actually displayed using the content component under root/components/Content.jsx

## Educate

Educate is used for accessing articles that will educate/provide information on x topics

- Educate has the stack navigator used for these screens
- EducateArticles displays the different articles, and allows users to filter the categories from a dropdown here
- Once selected, the article is actually displayed using the content component under root/components/Content.jsx

## Take Action

Educate is used for accessing articles that will educate/provide information on x topics

- TakeAction has the stack navigator used for these screens
- TakeActionArticles displays the different articles, and allows users to filter the categories from a dropdown here
- Once selected, the article is actually displayed using the content component under root/components/Content.jsx

## Report It

This one is once again a bit odd, because we wanted to display this one differently, as per the requirements from LBC. Reach Out here is used for accessing resources for reporting hate crime and other racial injustices

- Report it has the stack navigator used for these screens
- ReportItCategories displays the different categories, with buttons to get to each one. Emergency category is displayed larger and in red, as per specifications
- ReportItResources displays all the different resources under that category
- And from that, the article is actually displayed using the content component under root/components/Content.jsx
