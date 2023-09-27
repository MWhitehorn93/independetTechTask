# independetTechTask #

How to run

Install Cypress npm install cypress
install cypress Iframe node npm install -D cypress-iframe

To run a test type npx cypress open in the terminal

Navigate through the cypress UI to click on the desired tests. 

# Known issues of the tests # 

Issue 1:
The tests seem to be very flakey when dealing with the cookies Iframe. Sometimes after clicking agree tha iFrame can re-appear. 

Issue 2:
I tried writing some code that would close the independent subscribe, I never acheived this. To counter act this I used force true to act on every element in the register test

Issue 3: 
Register test is not complete, I have chosen not to finish this test as I am aware it is close to the deadline. The test fails at the end as I have not been able to enter the birth year. 

# Commercial setting # 

If I was able to take on this task while working, I would change a lot of things about the task. I would combime the LogIn and LogOut into the same test. As you need to logIn to perform the logOut test

Another thing that I would utilize if I was doing this task, I would set a cookie that hides the subscribe iFrame, this would make my life easier and the tests easier to run 

I would also seperate the registration tests, into happy path and unhappy path tests. To make these tests run quicker and easier to maintain.  

