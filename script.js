function firstWord(s) {
  // your code here
	if(s.trim() === ""){
		return "";
	}
	const trimmedStr = s.trim();
	const firstSpaceIndex = trimmedStr.indexOf(" ");
	if(firstSpaceIndex === -1){
		return trimmedStr;
	}
	return trimmedStr.substring(0, firstSpaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
