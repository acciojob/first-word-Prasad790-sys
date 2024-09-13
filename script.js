function firstWord(s) {
  // your code here
	let ct=0;
	for(c of s){
		ct++;
		if(c===''& ct===0) return '';
		else if(c===' ') return s.slice(0,ct);
	}
	return s;
}

// Do not change the code be
const s = prompt("Enter String:");
alert(firstWord(s));
