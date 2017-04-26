function helloClick() {
  // Makes a random message appear in an alert box.
  // How anooying right?
  // alert("Hey");
  messages = [ "Hey there", "Thanks for pressing me", "Don't do it again",
               "Button Pressed", "404", "Four oh Four", "Well?", "Cool!",
               "Now then", "Yay you pressed it", "You're doing fine", "1997",
               "Are you sure you want to leave the site", "Developers",
               "alert(\"Hello\");"
              ];
  index = Math.floor(messages.length * Math.random());
  alert(messages[index]);
}
