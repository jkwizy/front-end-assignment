# Front-End Web Assignment 2017
This readme file contains the information and relevant processes of creating my website Assignment. It will detail the creation process including plans and design ideas, what I did, what I changed, and any sources used.
The website itself is a fictional site designed around information from the game CS:GO, it has sections for teams, videos, events, pictures and updates. I have used placeholder text for the actual content while supplying images which could be used to show how they would look in practice.

## Initial Ideas/design
To start the whole assignment I began by designing some layouts which I could then adapt or use based on preference. I used Photoshop to create a basic mockup of the design, I originally wasn't sure what type of website I wanted so designed both a Single Page Application and Multiple page site.  

##### Single Page Application
For my SPA design my initial thought was that I wanted several different content sections all in a vertical column, the nav would be a horizontal bar next to the website title. This would be at the very top of the page, followed by a main image with another subheading in the center of this image. Each content section would come after this, however, at this point I had no idea what content I would include so these are just empty boxes. The page would display content based on the breakpoints used - for example, a mobile breakpoint would cause images or text to be limited to 1 per column, a tablet breakpoint 2 images or section of text per row and desktop 4. Due to it being a SPA the website would need the navigation bar to link directly to each content section, but this can be done with the CSS. An initial design of the idea made in Photoshop can be seen here.  
![SPA design idea](/docs/img/spaDesign.png)

This was the wireframe for my single page site done after I'd decided I was going to do a single page site.
![SPA wireframe](/docs/img/wireframe.png)

##### Multi-page design
For my multi-page design I initially wanted a basic layout, with a navbar on the left side of the screen and the main content on the right. The title of the page is at the top and will only display on the landing page. The navbar will be in a fixed position and will be the same on all pages with each content link inside the navbar linking to a new page which all follow the same design layout.  
![Multi-Page Design](/docs/img/multiDesign.png)


## PARC
#### Proximity
Proximity has been followed by using the same style throughout, its easy to see the separate content boxes as each has its own heading. The content itself is easy to follow and read as the content within each box follows a style throughout and relevant content is grouped together, for example the team section is made up of lists, every team is featured as a list and this makes it easy to follow and understand the content, the videos and pictures are all grouped together which makes it easier for the user to find any content they specifically wanted to find.
#### Alignment
I chose the alignment of the document to be centered, and used a wrapper div to specify that I wanted page to be within a specific width on desktop first. The use of a flexbox also allows for easy alignment as the flexbox container itself allows for easy styling in whatever form is needed.
#### Repetition
The same design is repeated throughout the site, with sub-designs being implemented into each content section which then repeat in these sections. It has provided a consistent layout and design throughout which makes it easier for the user to follow the content of the page and looks more aesthetically pleasing. The sizing of elements is consistent and set using style rules in the CSS.
#### Contrast
I attempted to make different content sections visually different because the design of my site is very consistent throughout, meaning without any styling or different content every section would look the same which is not what I wanted. I tried to place content sections with different styled and coloured items in each section to try and contrast the sections above and below each other.

## Information Architecture
The website is designed to be an information site, which should display information on teams, provide a map with locations, display video and pictures and a few other things. This means that users will be coming to the site specifically for information, be it text, pictures or videos. This means that this content should be easily accessed and displayed for the users sake as well as the design of the site.
You need to plan for any future changes, I attempted to do this by following a set template I had in mind, using the same general styling on each content section which would make it easy to add or remove new sections. In fact I did this by adding the "updates" section after everything else. I had a basic plan of what I wanted to do from the design idea made in Photoshop, and after I chose to do this style I made a plan of what content the website would actually feature. Following this made it easy to create and allowed me to focus on the styling and layout of the website.

## Accessibility
To try and make the site as accessible as possible I've used the same layout throughout, making it easy for any changes or updates to be made. I've also tried to make the navbar easy to see and use, its always at the top no matter what breakpoint is being used, and the mobile navbar is slightly bigger allowing mobile users to click the links easier. The site also features a back to the top button placed in the footer which appears on screen when the user scrolls down from the top allowing for easy travelling throughout the site.



## Creation Process
#### Navbar
The actual creation of the website went relatively smoothly, I had no problems with creating the content sections but there were general problems on most sections regarding the actual content within. As seen in my SPA design idea above, I originally wanted the navbar to be aligned horizontally with the website name at the top of the page. I ran into problems with this later on when considering responsiveness changes, I didn't know how to get the menu to change based on the breakpoints and I'd also put the nav inside the header, making it harder to change to what I needed it to do. I fixed this by taking the nav out of the header and making it sit at the center of the top of the page. This also allowed me to make changes later when I added breakpoints in for tablet and desktop. The menu changes style based on the size of the page, and uses a mix of CSS and JS to show/hide the menu dependent on the breakpoint currently in use.
A big problem I hit with the menu was when in mobile or tablet view, the hamburger menu would display its content under the other sections, the title of the page overlapped the menu content. I tried numerous things to fix this and discussion and help from Fania in labs led me to playing with the Z-index. After researching online about use of the Z-index I discovered the position had to be set to one of two things, one of these being `position: absolute;` otherwise the z-index setting was ignored completely, which was why my menu background was being displayed underneath other content. With this code implemented my menu now sits on top of any other content it overlaps which is what I wanted.

#### Teams
The teams section is implemented using a list for each team, giving it an icon, header and paragraph, for logo, team name and information respectively. The use of a list allows me to easily adjust how many teams are shown horizontally based on which breakpoint is currently in use.

#### Past LAN Events
This section includes a brief paragraph but the main focus is the Google maps. The Google maps API is called in and then use of JS allows me to focus on a particular area, and place pointers on the map at specific locations. These pointers also have descriptions when hovered over showing the name of the event. I believe the pointers are a good idea as it doesn't overload the user with information but they can still easily get the name if they want by simply hovering over.

#### Videos
This section is done using a tab container. One of my original website ideas was to have a SPA but using a tab container to have each content on a seperate tab. Although I didn't go with this idea, I liked the tab pane so chose to include it here for videos. It doesn't overload the user with lots of videos at once and allows them to choose which video they want.

#### Pictures
The pictures section is done by having a flexbox with several pictures inside. The use of the flexbox allows for easy control and styling especially on the positions and display locations of the pictures. It also helped make the responsiveness of the pictures extremely easy to handle by allowing me to specify how many pictures should be shown in each row at a time, allowing for easy changes between each breakpoint.

#### Updates
The updates section is a simple form with JavaScript attached which allows the user to enter an email, stores it in the local storage, and then displays the entered email on screen while changing the text to represent the displayed email. If the user reloads the page it remembers the last entered email and changes the displayed text according to this.


## Site Map
There is no site map included because the website is based on a single page. A site map is normally a list of pages of a web site, it helps optimise your site for search engines by letting them know the content on your site and how often its updated, it helps when a site has many pages and when pages are not all linked by links. This means that for a single page web site a site map is not necessary.


## Testing
**Map doesn't display on first load through GitHub - works fine on reload, not sure how to fix this**
#### General Testing
My website was tested throughout development in Firefox and has resulted in everything important working as expected with no known issues. As far as I can see the website also has no issues in Chrome. These are the only two browsers the site has been tested on.
One small issue which I had problems fixing was to do with the Google Map. If you resized the window, allowing a smaller breakpoint to activate, i.e. desktop to tablet, the focus on the map moves away from the center of the pointers. It isn't a big problem as its easy to refocus yourself and not many people will readjust the sizes of their browser while viewing it so I didn't spend time trying to find a fix.

#### User Testing
I let my parents use my website and asked if they had any feedback or could find any issues. They found a problem with my navbar links when in mobile view, I'd renamed the div id's from content1, content2, etc. to the actual names, but forgotten to update these in the menu used for mobile/tablet viewing, this was an easy fix and resulted in my checking all the links were working on the site.

#### Validation
Both my CSS and HTML validate with no errors in a HTML5 and CSS3 validator from W3Schools. The JavaScript returns no errors in the console log.

## Resources Used
#### Software Used
* ATOM text editor
* Notepad++
* Photoshop
* GitHub
* Chrome
* Firefox

#### Online Sources
* CTEC3905 Front-End Web Development Lectures and Labs - Dave Everitt & Fania Raczinksi
* https://www.w3schools.com/ - Lots of tutorials and Validation
* Images from Teams (logos) - http://csgobuff.pro/teams/ (logos used are only a template, designed so that easy to change to the correct, usable team logos)
* Images from pictures section - edited in Photoshop
  * http://www.tacticalgaming.net/hq/news/wp-content/uploads/2016/06/event_footer_1.jpg
  * https://www.redbull.com/my-en/cs-go-underdogs-at-pgl-krakow-major
  * http://www.esports-pro.com/articles/tournaments/2018s-first-csgo-major-will-be-eleague-boston
  * http://www.mweb.co.za/games/view/tabid/4210/Article/26421/Insane-CS-GO-play-to-be-memorialized-as-in-game-graffiti.aspx
  * https://dotesports.com/counter-strike/news/report-fps-drops-krakow-major-15834
  * http://www.talkesport.com/news/next-csgo-major-to-be-held-in-january-2017/
  * https://www.csgowallpapers.com/745-mlg-columbus-major-backround-
  * http://steamcommunity.com/sharedfiles/filedetails/?id=240180052
* https://www.w3schools.com/cssref/pr_pos_z-index.asp - Fixed menu problem with Z-index
* https://www.w3schools.com/tags/tag_iframe.asp - Fixed problems with Youtube videos not displaying
* Google Maps API
* Font Awesome - http://fontawesome.io/
* Flexbox Help - https://www.sketchingwithcss.com/samplechapter/cheatsheet.html
* Div Wrapper - https://css-tricks.com/best-way-implement-wrapper-css/
* JavaScript back to top button (Couldn't get to work) - https://coderwall.com/p/hujlhg/smooth-scrolling-without-jquery
