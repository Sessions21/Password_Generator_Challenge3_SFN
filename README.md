# Project3 - Password Generator
## By Scott Nichols

**Summary**
In this project we were to take some existing HTML and base JS code to create a password generator landing page to create unique passwords with specific characteristics. The styling CSS and base HTML structure did not need to be altered with the exception of adjusting the HTML paths to my css and js files. The base JS script only called to the required elements of the HTML to access the text display.

I initially setup the variables and arrays under a generatePassword function.  This included an initally empty array that would populated based on the input/selections of the user.  The remaing arrays captured the characters that will eventually make up the password.  This function also includes an alert window that will halt and restart the user if an unsatisfactory password length was selected.

The next section includes the confirm windows that prompt the user to decide what type of characters to include in the password. This if followed by a number of "if" condition statements to determine the characters to include in the final password.

Lastly, is a "for" condition that does the following:
1. Sets the limit of the loop to the userlength
1. Uses the Math.floor and Math.random functions to pick a random index position from the possibleChar array.
1. Uses the result of randomIndex to pull the actual character from the possibleChar array.
1. Pushes the characters to the password array.
1. return displays the final password.

Page URL: https://sessions21.github.io/Password_Generator_Challenge3_SFN/



