# NutrionoKid

Our web app has 2 parts.
Initially, the app will make a profile for the child containing the age of child, sex, weight, height, activity level of a child and allergic to any items. As per profile, our app will suggest the recipes suitable for the kids, targetting to cover all the nutritional values required for the children as per the data from the USDA nutrient calculator(approximately hardcoded). 

Secondly, our app has also a feature to take input the recipes which parents are currently feeding to their children. As per the input of recipes and approximate quantity of them, we will recommend the other dishes if the nutritional requirements(calculated in part 1) of the child are not fulfilled.

Installation Guide:

For Backend

Import the maven project (pom.xml) into eclipse IDE workspace(make sure maven is installed on your machine)
Do maven build
Run the main method in NutrientApp class.
Step will start the web server in tomcat by default.


For Frontend

In the cloned repo, goto fooddeliveryapp folder
Preinstalled have visual studio code IDE
Import the "child" folder 
run command npm start in terminal inside the project folder
open browser and goto to localhost:3000/new is home page.
