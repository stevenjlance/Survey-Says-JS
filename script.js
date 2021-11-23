//All the survey responses are stored in a list called "people". (Remember to use dot or [ ] syntax!)

// 1. Print out the name of the first person who responded to the survey. You should see informatio nabout Daniel
console.log(people[0])


// 2. Print out Brenton's second favorite band. You should see "The Format"
console.log(people[7]['Favorite Bands'][1])



// 3. For each person on this list, print out a descriptor of where they live in the form "____ lives in _____."
for(var i = 0; i < people.length; i++){
	console.log(`${people[i].Name} lives in ${people[i].State}`)
}



// 4. Print out each person's nickname. Write some control flow that determines whether / how to respond if someone didn't provide a nickname.
for(var i = 0; i < people.length; i++){
	if(people[i].Nickname != ""){
		console.log(people[i].Nickname)
	}
	else {
		console.log(`${people[i].Name} has no nickname`)
	}
}


// 5. Find the average of the respondents' ages.
var sum = 0
for(var i = 0; i < people.length; i++){
	sum += people[i].Age
}
console.log(sum/people.length)


// 6. Print out the percentage of respondents who have brown hair.
var brownSum = 0;
for(var i = 0; i < people.length; i++){
	if(people[i]["Hair Color"] == "Brown"){
		brownSum++;
	}
}
console.log(brownSum/people.length)



// 7. Create two new lists - one for programmers, and one for non programmers.
//    Sort all the people in the main list into these two more specific lists.
var programmer = []
var nonprogrammers = []
for(var i = 0; i < people.length; i++){
	if(people[i]["Is Programmer"]){
		programmer.push(people[i].Name)
	}
	else {
		nonprogrammers.push(people[i].Name)
	}
}
console.log(programmer)
console.log(nonprogrammers)


// 8. Iterate over the list in order to figure out how many respondents listed "The Office" as one of their favorite shows.




// 9. CHALLENGE: Print out a list of all the bands that are liked by at least two people.
//    Pro-tip: some respondents capitalized band names and other respondents did not, so for example, if Panic at the Disco isn't listed, your code isn't accurately reporting your results.





// 10. MEGA-CHALLENGE: Identify anyone on the list who has no common interests (bands or shows) with anyone else. Print their names.
