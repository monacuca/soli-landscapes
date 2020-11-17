**This is a prototype for a project using Google ATAP's Soli Sensors**
 – SoliSandbox

This project is a landscape generator, the idea of it is that a person can go in and traverse through the environment and take images, much like a regular person would while sightseeing. I am very happy with the improvements I did to this project. I was able to get a variety of gestures to work in personalizing these environments (adding parallax, choosing colors and playing around with iterations, ect…) , and I am really into the idea of making it into an actual application that lets you take photos! So that was fun.

The main thing I learned about my process in making this is: It seems I am still a toddler without developed object permanence, because when I don’t see the console logs, I simply seem to completely forget they exist. That was my poor attempt at a joke, but I did realize I have bad debugging habits, and that cost me a lot of time while making this. Soli Sandbox also has some weird quirks in how it deals with data (images) downloaded from the app so for this reason you cant use Save() or SaveCanvas() to download an image (it seems to all go into app data folder, and I didn’t want to mess with folders I don’t have permission to view). To go around this I created a Twitter bot  to post some images, though dealing with the Imgur API has been painful.

VIDEO: https://www.youtube.com/watch?v=c84tYWVqRvg&feature=emb_title
