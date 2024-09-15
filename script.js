function firstWord(s) {
  // your code here
  for (let index = 0; index < s.length; index++) {
  	if(s.charAt(index)===' '){return s.slice(0,index+1);}
  }
	return s;
}

// Do not change the co
const s = prompt("Enter String:");
alert(firstWord(s));
