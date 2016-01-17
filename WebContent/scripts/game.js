// character object
function character(name, ocupation, drive, abilities, abilitypoints, stability, sanity, inventory, currentLocation, beenTo) {
	this.name = name;
	this.ocupation = ocupation;
	this.drive = drive;
	this.abilities = abilities;
	this.abilitypoints = abilitypoints;
	this.stability = stability;
	this.sanity = sanity;
	this.inventory = inventory;
	this.currentLocation = currentLocation;
	this.beenTo = beenTo;
}

var drakeObj = new character("Drake Robinson", "private investigator", "curiosity", [], 8, 3, 3, [], "", []);

var abilityOptions = [ "test1", "test2" ]

var removeAbilityOption = function(item) {
	for (var i = abilityOptions.length - 1; i >= 0; i--) {
		if (array[i] === item) {
			return array.splice(i, 1);
		}
	}
};

// used to remove items from character object inventory
var removeInvItem = function(obj, item) {
	var array = obj["inventory"]
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] === item) {
			return array.splice(i, 1);
		}
	}
};

// used to add items to character object inventory
var addInvItem = function(obj, item) {
	obj["inventory"].push(item);
};

// used to add abilities to character object abilities
var addAbility = function(obj, ability) {
	obj["abilities"].push(ability);
};

// used to add location to character object beenTo array
var addBeenTo = function(obj, location) {
	obj["beenTo"].push(location);
};

//
// SETS ALL VARIABLES FOR THE GAME
//
cellunlocked = false;
beentohallway = false;
beentorture = false;
beenmorgue = false;
beentowesthall = false;
beentobonus = false;
exitunlocked = false;
beentoexit = false;
// inventory
deadbugs = false;
lunchtray = false;
torch = false;
note = false;
knife = false;
hat = false;
whip = false;
key = false;
powder = false;
//
currentroom = "jail";
searchtable = false;
crate = false;
zombiedead = false;
//
//
//
$(document)
		.ready(
				function() {
					$("#compass").fadeIn(3000);
					$("#message_begin").fadeIn(3000);
					$("#begin_character").fadeIn(3000);
					$("#command_line").fadeIn(5000);
					$("form")
							.submit(
									function() {
										var input = $("#command_line").val();

										//
										// help
										//
										if (input.indexOf("help") > -1) {
											if (input == "help") {
												$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
											}
										}
										//
										// end help
										//

										//
										// add abilities
										//
										else if (input.indexOf("list") > -1 || input.indexOf("List") > -1) {
											if (input == "list" && drakeObj["abilities"].length < 8) {
												$('<p>Available abiliites:<br /></p>').insertBefore("#placeholder").fadeIn(
														1000);
												for (var count = 0; count < abilityOptions.length; count++) {
													$('<p>' + abilityOptions[count] + '<br /></p>').insertBefore(
															"#placeholder").fadeIn(1000);
												}
												$(
														'<p>type the name of the ability from the above list that you would like to add to your character.<br /></p>')
														.insertBefore("#placeholder").fadeIn(1000);
											}
										}

										else if (input.indexOf("test1") > -1) {
											if (input == "test1" && drakeObj["abilities"].length < 8
													&& abilityOptions.indexOf('test1') > -1) {
												addAbility(drakeObj, "test1")
												$('<p>the test1 ability was added.<br /></p>').insertBefore("#placeholder")
														.fadeIn(1000);
											}
										}

										else if (input.indexOf("out") > -1 || input.indexOf("Out") > -1) {
											if (input == "out") {
												$("#ability").fadeOut(1000);
											}
										}

										//
										// take
										//
										else if (input.indexOf("take") > -1 || input.indexOf("read") > -1) {

											if (input == "take") {
												$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
											}

											// paperclip
											else if (input == "take paperclip" || input == "take paper clip") {
												if (currentroom == "jail" && paperclip == false) {
													paperclip = true;
													$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											// dead bugs
											else if (input == "take dead bugs" || input == "take deadbugs") {
												if (currentroom == "jail" && deadbugs == false) {
													deadbugs = true;
													$('<p>You picked up some dead bugs. Gross.</p>').insertBefore(
															"#placeholder").fadeIn(1000);
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											// lunch tray
											else if (input == "take lunchtray" || input == "take lunch tray"
													|| input == "take tray") {
												if (currentroom == "jail" && lunchtray == false) {
													lunchtray = true;
													$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											// torch
											else if (input == "take torch") {
												if (currentroom == "hallway" && torch == false) {
													torch = true;
													$(
															'<p>You picked up a torch. You can now venture off into the dark hallway.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											// note
											else if (input == "take note" || input == "read note") {
												if (currentroom == "hallway" && note == false) {
													note = true;
													$(
															'<p>You picked up a note. It reads: <br />Well now. It seems you have managed to pass your first test. Don\'t worry. Things will get plenty more difficult and it will be almost impossible for you to escape with your life.<br /><br />Sincerely,<br/>Your Captors<br /><br />P.S. Watch out for my zombie.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											// whip
											else if (input == "take whip") {
												if (currentroom == "torture" && whip == false) {
													whip = true;
													$('<p>You picked up a whip.</p>').insertBefore("#placeholder").fadeIn(
															1000);
													if (whip == true && hat == true) {
														$('<p>A whip and a hat? This is no time to play Indiana Jones!</p>')
																.insertBefore("#placeholder").fadeIn(1000);
													}
												} else
													$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(
															1000);
											}
											//

											else
												$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);

										}
										//
										// end take
										//

										//
										// search
										//
										else if (input.indexOf("search") > -1) {

											if (input == "search") {
												$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
											}

											// table
											else if (input == "search table") {
												if (currentroom == "torture" && hat == false && knife == false) {
													hat = true;
													knife = true;
													searchtable = true;
													$(
															'<p>You found a knife stuck in the table and picked it up. You also take a hat from the table and place it on your head.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
													if (whip == true && hat == true) {
														$('<p>A whip and a hat? This is no time to play Indiana Jones!</p>')
																.insertBefore("#placeholder").fadeIn(1000);
													}

												} else
													$('<p>There is nothing to search for.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											// zombie
											else if (input == "search zombie") {
												if (currentroom == "morgue" && zombiedead == true) {
													key = true;
													$('<p>You found a key buried in the zombie\'s flesh.</p>').insertBefore(
															"#placeholder").fadeIn(1000);
												} else
													$('<p>There is nothing to search for.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											// crate
											else if (input == "search crate") {
												if (currentroom == "bonus") {
													powder = true;
													$(
															'<p>You found a strange powder. What use could that possibly have?</p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else
													$('<p>There is nothing to search for.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											else
												$('<p>There is nothing to search for.</p>').insertBefore("#placeholder")
														.fadeIn(1000);

										}
										//
										// end search
										//

										//
										// eat
										//
										else if (input.indexOf("eat") > -1) {

											if (input == "eat") {
												$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
											}

											// powder
											else if (input == "eat powder" || input == "eat strange powder") {
												if (powder == true) {
													$("#container").fadeOut(3000, function() {
														$("#foodpoisoning").fadeIn(3000);
													});
												} else
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											// bugs
											else if (input == "eat bugs" || input == "eat dead bugs") {
												if (deadbugs == true) {
													$('<p>You did not just do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
													deadbugs = "ate";
												} else
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											else
												$('<p>I don\'t understand "' + input + '</p>').insertBefore("#placeholder")
														.fadeIn(1000);

										}
										//
										// end eat
										//

										//
										// kill
										//
										else if (input.indexOf("kill") > -1) {

											if (input == "kill") {
												$(
														'<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
											} else if (input == "kill zombie" && currentroom == "morgue") {
												$('<p>Kill zombie with what?</p>').insertBefore("#placeholder").fadeIn(1000);
											}

											// zombie
											else if (input == "kill zombie with knife") {
												if (currentroom == "morgue" && knife == true) {
													$('<p>You attack the zombie with a knife and kill it!</p>')
															.insertBefore("#placeholder").fadeIn(1000);
													zombiedead = true;
												} else {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}

											else if (input == "kill zombie with lunch tray"
													|| input == "kill zombie with lunchtray"
													|| input == "kill zombie with tray") {
												if (currentroom == "morgue" && lunchtray == true) {
													$('<p>You attack the zombie with a lunch tray and kill it!</p>')
															.insertBefore("#placeholder").fadeIn(1000);
													zombiedead = true;
												} else {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											// kill self
											else if (input == "kill self with lunch tray"
													|| input == "kill self with lunchtray" || input == "kill self with tray") {
												if (lunchtray == true) {
													$("#container").fadeOut(3000, function() {
														$("#killself").fadeIn(3000);
													});
												} else {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}

											else if (input == "kill self with knife") {
												if (knife == true) {
													$("#container").fadeOut(3000, function() {
														$("#killself").fadeIn(3000);
													});
												} else {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}

											else if (input == "kill self with whip") {
												if (whip == true) {
													$("#container").fadeOut(3000, function() {
														$("#killself").fadeIn(3000);
													});
												} else {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											else
												$('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);

										}
										//
										// end kill
										//

										//
										// inventory
										//
										else if (input.indexOf("inventory") > -1) {
											if (input == "inventory") {
												// paperclips
												if (paperclip == true) {
													pclip = "Paper Clip<br />";
												} else {
													pclip = "";
												}
												//

												// dead bugs
												if (deadbugs == true) {
													dbugs = "Dead Bugs<br />";
												} else {
													dbugs = "";
												}
												//

												// lunch tray
												if (lunchtray == true) {
													ltray = "Lunch Tray<br />";
												} else {
													ltray = "";
												}
												//

												// lunch tray
												if (torch == true) {
													tch = "Torch<br />";
												} else {
													tch = "";
												}
												//

												// lunch tray
												if (note == true) {
													nt = "Note from Captors<br />";
												} else {
													nt = "";
												}
												//

												// hat
												if (hat == true) {
													ht = "Hat<br />";
												} else {
													ht = "";
												}
												//

												// knife
												if (knife == true) {
													knf = "Knife<br />";
												} else {
													knf = "";
												}
												//

												// whip
												if (whip == true) {
													whp = "Whip<br />";
												} else {
													whp = "";
												}
												//

												// key
												if (key == true) {
													ky = "Key<br />";
												} else {
													ky = "";
												}
												//

												// goo
												if (powder == true) {
													powd = "Strange Powder<br />";
												} else {
													powd = "";
												}
												//

												if (pclip == "" && dbugs == "" && ltray == "") {
													$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else {
													$(
															'<p>Inventory:<br />' + pclip + dbugs + ltray + tch + nt + ht
																	+ whp + knf + ky + powd + '</p>').insertBefore(
															"#placeholder").fadeIn(1000);
												}
											} else
												$('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder")
														.fadeIn(1000);
										}
										//
										// end inventory
										//

										//
										// unlock
										//

										else if (input.indexOf("unlock") > -1) {
											if (input == "unlock" || input == "unlock door" || input == "unlock jail door"
													|| input == "unlock jaildoor") {
												$(
														'<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
											}

											// jail door
											else if (input == "unlock jail door with paperclip"
													|| input == "unlock jaildoor with paperclip"
													|| input == "unlock jail door with paper clip"
													|| input == "unlock jaildoor with paper clip"
													|| input == "unlock door with paper clip"
													|| input == "unlock door with paperclip") {
												if (currentroom != "jail") {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else if (cellunlocked == true) {
													$('<p>The door is already unlocked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else if (currentroom == "jail" && paperclip == true) {
													cellunlocked = true;
													$(
															'<p>You unlocked the jail door successfully. You can now proceed northward.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else
													$('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											// exit door
											else if (input == "unlock door with key") {
												if (currentroom != "exit") {
													$('<p>You can\'t do that.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else if (exitunlocked == true) {
													$('<p>The door is already unlocked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												} else if (currentroom == "exit" && key == true) {
													exitunlocked = true;
													$(
															'<p>You unlocked the door successfully. You can now proceed northward.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
												} else
													$('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
											}
											//

											else
												$('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder")
														.fadeIn(1000);

										}
										//
										// end unlock
										//

										//
										// go
										//
										else if (input.indexOf("go") > -1) {
											if (input == "go") {
												$('<p>Go in which direction?</p>').insertBefore("#placeholder").fadeIn(1000);
											}

											// go from jail cell
											else if (input == "go north" && currentroom == "jail") {
												if (cellunlocked == true) {
													if (beentohallway == true) {
														if (note == false) {
															hallnote = " The note is still here. ";
														} else {
															hallnote = "";
														}
														if (torch == false) {
															halltorch = " The torch continues to light the dim hallway. ";
														} else {
															halltorch = "";
														}
														$(
																'<p>You are back in the hallway. The hallway continues to the east and west. The jail room is to the south. '
																		+ hallnote + halltorch + '</p>').insertBefore(
																"#placeholder").fadeIn(1000);
														currentroom = "hallway";
													} else {
														$("#area_hallway").clone().insertBefore("#placeholder").fadeIn(1000);
														currentroom = "hallway";
														beentohallway = true;
													}
												} else {
													$('<p>The door is locked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											// go back to jail cell
											else if (input == "go south" && currentroom == "hallway") {
												if (deadbugs == false) {
													jailbugs = "The dead bugs are still here";
													jailperiod = ".";
												} else {
													jailbugs = "";
												}
												if (lunchtray == false) {
													jailtray = "The lunch tray is still here";
													jailperiod = ".";
												} else {
													jailtray = "";
												}
												if (deadbugs == false && lunchtray == false) {
													jailword = " and ";
													jailtray = "the lunch tray is still here";
													jailperiod = ".";
												} else {
													jailword = "";
												}
												if (deadbugs == true && lunchtray == true) {
													jailperiod = "";
												}
												$(
														'<p>You are back in the jail cell. To the north is the door. '
																+ jailbugs + jailword + jailtray + jailperiod + '</p>')
														.insertBefore("#placeholder").fadeIn(1000);
												currentroom = "jail";
											}
											//

											// go to torture room from hallway
											else if (input == "go east" && currentroom == "hallway") {
												if (torch == true) {
													if (beentorture == true) {
														if (searchtable == false) {
															torturetable = "The table seems to emit a strange energy. ";
														} else {
															torturetable = "";
														}
														if (whip == false) {
															torturewhip = "The whip remains stationed on the wall. ";
														} else {
															torturewhip = "";
														}
														$(
																'<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway you came from. '
																		+ torturetable + torturewhip + '</p>').insertBefore(
																"#placeholder").fadeIn(1000);
														currentroom = "torture";
													} else {
														$("#area_torture").clone().insertBefore("#placeholder").fadeIn(1000);
														beentorture = true;
														currentroom = "torture";
													}
												} else {
													$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											// go to westhall from hallway
											else if (input == "go west" && currentroom == "hallway") {
												if (torch == true) {
													if (beentowesthall == true) {
														$(
																'<p>You are back at the west hallway. To the east is where you came from. To the north and south are dark rooms.</p>')
																.insertBefore("#placeholder").fadeIn(1000);
														currentroom = "westhall";
													} else {
														$("#area_westhall").clone().insertBefore("#placeholder")
																.fadeIn(1000);
														beentowesthall = true;
														currentroom = "westhall";
													}
												} else {
													$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											// go to exit from westhallway
											else if (input == "go north" && currentroom == "westhall") {
												if (beentoexit == true) {
													$(
															'<p>You are back at the room with the strange door. To the south is the hallway you came from.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
													currentroom = "exit";
												} else {
													$("#area_exit").clone().insertBefore("#placeholder").fadeIn(1000);
													beentoexit = true;
													currentroom = "exit";
												}
											}
											//

											// go to westhallway from exit
											else if (input == "go south" && currentroom == "exit") {
												if (beentowesthall == true) {
													$(
															'<p>You are back at the west hallway. To the north and south are dark rooms. The hallway continues east.</p>')
															.insertBefore("#placeholder").fadeIn(1000);
													currentroom = "westhall";
												} else {
													$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
													beentowesthall = true;
													currentroom = "westhall";
												}
											}
											//

											// go through exit
											else if (input == "go north" && currentroom == "exit") {
												if (exitunlocked == true) {
													$("#container").fadeOut(3000, function() {
														$("#wingame").fadeIn(3000);
													});
												} else {
													$('<p>The door is locked.</p>').insertBefore("#placeholder")
															.fadeIn(1000);
												}
											}
											//

											// go back to hallway from west hall
											else if (input == "go east" && currentroom == "westhall") {
												if (note == false) {
													hallnote = " The note is still here. ";
												} else {
													hallnote = "";
												}
												if (torch == false) {
													halltorch = " The torch continues to light the dim hallway. ";
												} else {
													halltorch = "";
												}
												$(
														'<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.'
																+ hallnote + halltorch + '</p>')
														.insertBefore("#placeholder").fadeIn(1000);
												currentroom = "hallway";
											}
											//

											// go to bonus room from westhall
											else if (input == "go south" && currentroom == "westhall") {
												if (beentobonus == true) {
													if (powder == false) {
														bonuscrate = "The lone crate in the corner looks untouched.";
													} else {
														bonuscrate = "";
													}
													$(
															'<p>You are back in the small storage room. You came from the north. '
																	+ bonuscrate + '</p>').insertBefore("#placeholder")
															.fadeIn(1000);
													currentroom = "bonus";
												} else {
													$("#area_bonus").clone().insertBefore("#placeholder").fadeIn(1000);
													beentobonus = true;
													currentroom = "bonus";
												}
											}
											//

											// go to westhall from bonus room
											else if (input == "go north" && currentroom == "bonus") {
												$(
														'<p>You are back in the hallway. To the north and south are dark rooms. The hallway continues east.</p>')
														.insertBefore("#placeholder").fadeIn(1000);
												currentroom = "westhall";
											}
											//

											// go back to hallway from torture
											// room
											else if (input == "go west" && currentroom == "torture") {
												if (note == false) {
													hallnote = " The note is still here. ";
												} else {
													hallnote = "";
												}
												if (torch == false) {
													halltorch = " The torch continues to light the dim hallway. ";
												} else {
													halltorch = "";
												}
												$(
														'<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.'
																+ hallnote + halltorch + '</p>')
														.insertBefore("#placeholder").fadeIn(1000);
												currentroom = "hallway";
											}
											//

											// go to morgue from torture room
											else if (input == "go south" && currentroom == "torture") {
												if (beenmorgue == true) {
													if (zombiedead == false) {
														morguezombie = "The zombie is still here!";
													} else {
														morguezombie = "The zombie remains on the floor rotting in a cesspool of it's juices.";
													}
													$(
															'<p>You are back in the morgue. To the north is the doorway to the room of strange devices. '
																	+ morguezombie + '</p>').insertBefore("#placeholder")
															.fadeIn(1000);
													currentroom = "morgue";
												} else {
													$("#area_morgue").clone().insertBefore("#placeholder").fadeIn(1000);
													beenmorgue = true;
													currentroom = "morgue";
												}
											}
											//

											// go to torture room from morgue
											else if (input == "go north" && currentroom == "morgue") {
												if (searchtable == false) {
													torturetable = "The table seems to emit a strange energy. ";
												} else {
													torturetable = "";
												}
												if (whip == false) {
													torturewhip = "The whip remains stationed on the wall. ";
												} else {
													torturewhip = "";
												}
												$(
														'<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway. '
																+ torturetable + torturewhip + '</p>').insertBefore(
														"#placeholder").fadeIn(1000);
												currentroom = "torture";
											}
											//

											else
												$('<p>You can\'t go that way.</p>').insertBefore("#placeholder")
														.fadeIn(1000);
										}
										//
										// end go
										//

										else if (input != "") {
											$('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder")
													.fadeIn(1000);
										}

										$("#console").scrollTop($("#console")[0].scrollHeight);
										$("#command_line").val("");
									});
				});