# Project Boolgram

_Project is to create a page that resembles Instagram (Boolgram) using react._
_The data the page will be populated with, will be fetched asynchronously from a remote API endpoint._

## Data Endpoints
Stories section (the one on top with rounded images) -> async call to https://flynn.boolean.careers/exercises/api/boolgram/profiles

Feed with content -> async call to https://flynn.boolean.careers/exercises/api/boolgram/posts
## Page Structure

### Header 
3 Columns:
    - Logo (Reusable)
    - Search Bar
    - Nav Menu


### Main Page
    - User Stories Section
      - Each Profile Icon + Name (Reusable)
    - Posts Section
      - Each Post Consists of:
        - Post Header Section 
        - Post Image Section
        - Post Controls Section
        - Comments Section
        - Post Comments Section


### Right-Side Bar (3 Rows)
      - User Profile Details Section (Reusable)
      - Friend Suggestions Section
      - Copyright Section