# _To Do

#### _Using numerous technologies, this website will reorganize numbers inputed for a fun user friendly experience._

#### By _**Michael Burton & Brandon Magofna**_

## Technologies Used

* HTML
* CSS
* Markdown
* Javascript

## Description

_Using the above techno#logies, this user friendly application will generate a fun series of muddled words and phrases dependant on what the user inputs._

## Setup/Installation Requirements

If below link isnt working; the backup method will be cloning repository to local repository:

* Github repository: https://github.com/Magofna68/Mr.-Roboger-s-Neighborhood
* Github pages: https://magofna68.github.io/Mr.-Roboger-s-Neighborhood/

* _Go to Github and navigate to main page of repository you wish to clone_
* _Above the list of files, click the green "code" button, and select the clipboard to copy URL under "clone with https"_
* _open terminal & change current working directory to "Desktop" - this will house the cloned repository_
* _Once there, enter "git clone (remote URL address from GitHub)_
* _press enter to create local clone of repo_
* _Exit out of terminal, and repository should be available on your desktop_ 

## Specs

* _Describe: indexNumber()_

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: indexNumber(0);
Expected Output: 0_

Test: "It should return values of '1, 2, & 3' with "beep!", "boop!" & "Wont you be my neighbor?"
Code: 
indexNumber(3)
Expected Output: 0, 1, 2, Wont you be my neighbor?

Test: "It should return a string of numbers up till the inputed number and reflect corresponding values"
Code:
indexNumber(3)
Expected Output: 0, "beep!", "boop!", "Wont you be my neighbor"

Test: "The value of '2' should override value of '1'" 
Code: indexNumber(12)
Expected Output:
0,Beep!,Boop!,Wont you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!

Test: "value of a '3' should override the value of '1 & 2'"
Code:
indexNumber(13)
Expected Output: 
0,Beep!,Boop!,Wont you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Wont you be my neighbor?



## Known Bugs

* _none listed at this time_


## License

_Copyright 2021 Epicodus_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

## _Brandon Magofna_ 
503-269-2656  -  Magofna68@gmail.com