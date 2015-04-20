function dateParse(dateString){
	
	//Create new date object based on current time.
	resultTime = new Date();
	
	knownDictonary = new Array();
	knownDictonary["jan"] = ["month", 0];
	knownDictonary["january"] = ["month", 0];
	knownDictonary["feb"] = ["month", 1];
	knownDictonary["february"] = ["month", 1];
	knownDictonary["mar"] = ["month", 2];
	knownDictonary["march"] = ["month", 2];
	knownDictonary["apr"] = ["month", 3];
    knownDictonary["april"] = ["month", 3];
    knownDictonary["may"] = ["month", 4];
    knownDictonary["june"] = ["month", 5];
    knownDictonary["july"] = ["month", 6];
    knownDictonary["aug"] = ["month", 7];
    knownDictonary["august"] = ["month", 7];
    knownDictonary["sep"] = ["month", 8];
    knownDictonary["september"] = ["month", 8];
    knownDictonary["oct"] = ["month", 9];
    knownDictonary["october"] = ["month", 9];
    knownDictonary["nov"] = ["month", 10];
	knownDictonary["november"] = ["month", 10];
    knownDictonary["dec"] = ["month", 11];
    knownDictonary["december"] = ["month", 11];
    
    knownDictonary["noon"] = ["time", 12];
    knownDictonary["midnight"] = ["time", 0];
    
	knownMeridiemDictonary = new Array();
	knownMeridiemDictonary["p"] = ["meridiem", 0];
	knownMeridiemDictonary["a"] = ["meridiem", 1];
	knownMeridiemDictonary["am"] = ["meridiem", 1];
	knownMeridiemDictonary["pm"] = ["meridiem", 0];
	
	
	//Removes all possible special charecters and replaces it with a space
	dateString = dateString.replace(/[\. .\/,-]+/g, " ");
	
	//Split the date by spaces
	rawDateString = dateString.split(" ");
	dateString = new Array();
	
	for(x = 0; x < rawDateString.length; x++){
		if(rawDateString[x] != ""){
			dateString.push(rawDateString[x]);
		}
	}
	
	console.log(dateString);
	
	for(i = 0; i < dateString.length; i++){
				
		if(isNaN(Number(dateString[i]))){
			
			// If the array value is a string
			tempLowercase = dateString[i].toLowerCase();

			if(knownDictonary[tempLowercase] == null){
				// Is the first charecter a number? 
				if(!isNaN(Number(dateString[i].charAt(0)))){
					// Is the first charecter a 0? If so, remove it.
					if(Number(dateString[i].charAt(0)) == 0){
						// Remove the 0, and keep going. 
						dateString[i] = dateString[i].substring(1, dateString[i].length);
					}
					
					// Is the second charcter a number?					
					else if(!isNaN(Number(dateString[i].charAt(1)))){
						// Is the third charecter implying that the day ends with a "th" or "st"? 
						if(dateString[i].charAt(2) == "n" || dateString[i].charAt(2) == "r" || dateString[i].charAt(2) == "s" || dateString[i].charAt(2) == "t"){
							// Safe to assume that the first two charecters are digits, and that they are the day. EXAMPLE: 12
							resultTime.setMonth(resultTime.getMonth(), parseInt(dateString[i].substring(0, 2)));
						}
						else if(dateString[i].charAt(2) == ":"){
							
							// If last charecter in the string an int? 
							if(!isNaN(Number(dateString[i].charAt(dateString[i].length - 1)))){
								// We now assume that it is a time. If there is an elemnt to the right of the current, and if it is in the known meridiems dictonary, then continue. 
								if(dateString[i+1] != null && knownMeridiemDictonary[dateString[i+1].toLowerCase()] != null){
									// Split the time by a : to get the first hour and second the minute
									tempTimeSplit = dateString[i].split(":");
									console.log(tempTimeSplit);
									
									if(knownMeridiemDictonary[dateString[i+1].toLowerCase()][1] == 0){
										// Assuming that the time ends in a PM, we add 12 to the final hour mark. Assign minutes as usual. 
										resultTime.setHours(parseInt(tempTimeSplit[0]) + 12);
										resultTime.setMinutes(parseInt(tempTimeSplit[1]));
									}else{
										// Assuming that the time ends in a AM, we don't add anything. Assign minutes as usual. 
										resultTime.setHours(parseInt(tempTimeSplit[0]));
										resultTime.setMinutes(parseInt(tempTimeSplit[1]));
									}// End of If
									
								// This is now assuming that we don't know the meridiem. Assign everything in an as is method. 
								}else{
									tempTimeSplit = dateString[i].split(":");
									resultTime.setHours(parseInt(tempTimeSplit[0]));
									resultTime.setMinutes(parseInt(tempTimeSplit[1]));
								}
								
							// We can now assume that the last charecter is a string
							}else{
								if(dateString[i].charAt(dateString[i].length - 2).toLowerCase() == "p"){
									// Remove the last 2 charecters, then split the time by the ":" EXAMPLE: 10:00PM becomes ["10", "00"] (removing the "PM")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length-2).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]) + 12);
									resultTime.setMinutes(Number(tempTimeSplit[1]));
									
								}else if(dateString[i].charAt(dateString[i].length - 1).toLowerCase() == "p"){
									// Remove the last 1 charecters, then split the time by the ":" EXAMPLE: 10:00P becomes ["10", "00"] (removing the "P")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length-1).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]) + 12);
									resultTime.setMinutes(Number(tempTimeSplit[1]));
									
								}else if(dateString[i].charAt(dateString[i].length - 2).toLowerCase() == "a"){
									// Remove the last 2 charecters, then split the time by the ":" EXAMPLE: 10:00AM becomes ["10", "00"] (removing the "AM")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length-2).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1]));
								
								}else if(dateString[i].charAt(dateString[i].length - 1).toLowerCase() == "a"){
									// Remove the last 1 charecters, then split the time by the ":" EXAMPLE: 10:00A becomes ["10", "00"] (removing the "A")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length-1).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1]));
								}else{
									//Should never get here. Means there is a time, that has a string at the end which is not a meridiem. 
									console.log("Parsed down to a time but it doesn't quite make sense because it ends with an unknown string. Attempting to assume based on what info I was given...");
									tempTimeSplit = dateString[i].split(":");
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1].substring(0,2)));
								}
							}	
						}
					}
					// Does the second charecter an English numeral?
					else if(dateString[i].charAt(1) == "n" || dateString[i].charAt(1) == "r" || dateString[i].charAt(1) == "s" || dateString[i].charAt(1) == "t"){
						resultTime.setMonth(resultTime.getMonth(), parseInt(dateString[i].charAt(0)));
					}
					
					// Does the second charecter a ":"?
					else if(dateString[i].charAt(1) == ":"){
							// If last charecter in the string an int? 
							if(!isNaN(Number(dateString[i].charAt(dateString[i].length-1)))){
								// We now assume that it is a time. If there is an elemnt to the right of the current, and if it is in the known meridiems dictonary, then continue. 
								if(dateString[i+1] != null && knownMeridiemDictonary[dateString[i+1].toLowerCase()] != null){
									// Split the time by a : to get the first hour and second the minute
									tempTimeSplit = dateString[i].split(":");
									console.log(tempTimeSplit);
									
									if(knownMeridiemDictonary[dateString[i+1].toLowerCase()][1] == 0){
										// Assuming that the time ends in a PM, we add 12 to the final hour mark. Assign minutes as usual. 
										resultTime.setHours(parseInt(tempTimeSplit[0]) + 12);
										resultTime.setMinutes(parseInt(tempTimeSplit[1]));
									}else{
										// Assuming that the time ends in a AM, we don't add anything. Assign minutes as usual. 
										resultTime.setHours(parseInt(tempTimeSplit[0]));
										resultTime.setMinutes(parseInt(tempTimeSplit[1]));
									}// End of If
									
								// This is now assuming that we don't know the meridiem. Assign everything in an as is method. 
								}else{
									tempTimeSplit = dateString[i].split(":");
									resultTime.setHours(parseInt(tempTimeSplit[0]));
									resultTime.setMinutes(parseInt(tempTimeSplit[1]));
								}
								
							// We can now assume that the last charecter is a string
							}else{
								
								if(dateString[i].charAt(dateString[i].length - 2).toLowerCase() == "p"){
									// Remove the last 2 charecters, then split the time by the ":" EXAMPLE: 10:00PM becomes ["10", "00"] (removing the "PM")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length - 2).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]) + 12);
									resultTime.setMinutes(Number(tempTimeSplit[1]));
									
								}else if(dateString[i].charAt(dateString[i].length - 1).toLowerCase() == "p"){
									// Remove the last 1 charecters, then split the time by the ":" EXAMPLE: 10:00P becomes ["10", "00"] (removing the "P")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length - 1).split(":");
									console.log(tempTimeSplit);
									resultTime.setHours(Number(tempTimeSplit[0]) + 12);
									resultTime.setMinutes(Number(tempTimeSplit[1]));
									
								}else if(dateString[i].charAt(dateString[i].length - 2).toLowerCase() == "a"){
									// Remove the last 2 charecters, then split the time by the ":" EXAMPLE: 10:00AM becomes ["10", "00"] (removing the "AM")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length - 2).split(":");
									console.log(tempTimeSplit);
									console.log(Number(tempTimeSplit[0]));
									console.log(Number(tempTimeSplit[1]));
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1]));
								
								}else if(dateString[i].charAt(dateString[i].length - 1).toLowerCase() == "a"){
									// Remove the last 1 charecters, then split the time by the ":" EXAMPLE: 10:00A becomes ["10", "00"] (removing the "A")
									tempTimeSplit = dateString[i].substring(0, dateString[i].length - 1).split(":");
									console.log(tempTimeSplit);
									console.log(Number(tempTimeSplit[0]));
									console.log(Number(tempTimeSplit[1]));
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1]));
								}else{
									//Should never get here. Means there is a time, that has a string at the end which is not a meridiem. 
									console.log("Parsed down to a time but it doesn't quite make sense because it ends with an unknown string.");
									tempTimeSplit = dateString[i].split(":");
									resultTime.setHours(Number(tempTimeSplit[0]));
									resultTime.setMinutes(Number(tempTimeSplit[1].substring(0,2)));
								}
							}
						}
				}
			
			// Was found in the known dictonary. Check against if it is a month
			}else if(knownDictonary[tempLowercase][0] == "month"){
				resultTime.setMonth(knownDictonary[tempLowercase][1]);
			}

		}else{
			if(dateString[i].length == 4){
				// We can assume it is a year because of the 4 digits
				resultTime.setFullYear(parseInt(dateString[i]));
			}else{
				if(dateString[i+1] != null && dateString[i+1].length == 4){
					resultTime.setMonth(resultTime.getMonth(), parseInt(dateString[i]));
				}else{
					if(dateString[i+2] != null && dateString[i+2].length == 4){
						resultTime.setMonth(parseInt(dateString[i]) - 1);
					}else{
						if(dateString[i+1] != null && (dateString[i+1].length != 4 && !isNaN(Number(dateString[i+1])))){
							resultTime.setMonth(parseInt(dateString[i]) - 1);
						}else{
							resultTime.setMonth(resultTime.getMonth(), parseInt(dateString[i]));
						}
					}
				}
			}
		}	
	}
    
	return resultTime;
} 	
