# SURVEY SAYS!

## The Goal

The information in the database file attached here has results from a survey Jeff took of some of his friends. He's going to use that information to learn some things about the friends who answered the survey, and maybe even use it as a way to help some of them connect with and meet new friends. For example:
* What percent of his friends are programmers?
* Do they like similar or dissimilar music?
* How many of them live in each state?

One warning: these are real people, and real people don't always provide the easiest data to work with. Get ready for typos, unexpected blanks, and outright silliness (Max, for example, isn't 100 years old).

In the `script.js` file, Jeff has written some questions he has. Use your knowledge of arrays and objects to get at the information asked for in each of the 10 challenges.

## Getting Started

If you already have a good idea of how to start this based on previous labs, go for it!

If you're struggling to get started, read on for some tips!

Try to get a feel for the shape of the data by adding the three `console.log` statements below to the script.js file:

```javascript

// All the survey responses are stored in a list called "people".
console.log(people)
console.log("THE FIRST PERSON IS:")
console.log(database.people[0])

// 1. Print out the name of the first person who responded to the survey
console.log(database.people[0]["some_string_here"])
```

You'll obviously need to replace `"some_string_here"` with something else - try looking at the console output to see which key you'll need to access their name, which is Daniel.