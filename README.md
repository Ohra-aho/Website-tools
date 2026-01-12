# Website templates

## Description
This folder contains templates to make websites with. Currently it contains templates for simple site structure and templates for more specific purposes.
Goal of this project is to make tools with which the developer can make a somewhat simple website and only really consern themselves with the styling or adding more specialized features. Content of the files is not meant to be altered when used to create a website and all updates should be made with this in mind.


## Installation
Copy the folder to your project folder. 


## Usage
Most template tags can be added to any HTML document by adding the corresponding script-tag and link-tag to documents head-tag.

For example:

In order to use main-container-tag one must add the following tags inside documents head tag:

<link rel="stylesheet" href="./main/container/main_container.css">
<script defer src="./main/container/main_container.js"></script>

After this user can use <main-container> in set document.

It is advised that user creates separate css file to alter the appearance of the templates, instead of altering the css inside this folder.

Some tags, such as the header don't require script tag in order to function. In these cases only add the link-tag.

By default, most of these tags will fill all space available to them or adjust to the size of their children.

## Features

## main
Basic containers to make a general structure of the site with.


### container
#### main_container
Vertical container made to contain most parts of the web site. Pop-ups and some header variants are not included.

#### section
Container made to house a single part of the site. Adjusts vertically to fit any content.

#### separator
Transparent block with set height.

### footer
Nothing worth mentioning yet.

### header
There are three different versions of header:
- Header tag by itself makes statick header which sticks to the top of the screen. <header>
- Header with top-class doesn't have static position. <header class="top">
- Sticky header follows user just out of view and can be toggled in and out of view with a button press. <sticky-header>


## adjusting
Containers which sort their children to desiered format. Such as rows, colmuns and grids.

- row: Displays its children in a row. <row>
- column: Displays its children in a column. <column>
- custom_center: Displays its children in the center of itself. <custom_center>
- grid-generator: Creates a grid display with default dimentions of 3 x 3 with 30% x 30% cells. These values can be alteres with "rows"-, "columns"- "width"- and "height"-attributes respectively. <grid-generator>


## content
More specialized containers to show text and other media. Such as cards and scrollable text columns.

### card
Displays either image and text or just text vertically or horizontally in a small frame.

<card-img>

Cards content can be defined with following attributes:
- title: Defines the title.
- image: Link for the image to be displayed. If image is null, card will assume the form of a text card.

Cards inner text defines text displayed in the card. 

If cards classlist includes "horizontal", card will be displayed horizontally.
If cards classlist includes "right", cards image will be displayed on the right. Use only with "horizontal" class.

### contact
Has contact- and simple-contact templates.

Contact template displays contact form with few fields. Names for those fields are determined with following attributes:
- title: Title of the form
- action: Where input is to be submitted.
- name_label: Label and placeholder for the name field
- subject_label: Label and placeholder for the subject field
- message_label: Placeholder for the message text box
- submit_label: Word inside the submit button

Currently this form is not operational.
<contact-form>

Simple-contact displays a mailto-link. Target email and subject of the email can be determined with following attributes:
- email: Determines target email.
- subject: Determines subject of the email.

<simple-contact>

### link-list
Displays links placed inside of it in a row. Includes hamburger menu to display links in narrow screens.
Made to work only with header currently.

### media-displayer
Displays a video or an image. Will display a fullscreen version of an image when clicked. User can also cycle through other images with same "family"-tag in thisfull screen mode.

Attributes:
- media: Link to the media
- image: True, if media is an image.
- family: Identifier for which images will be displayed in full screen mode.

Media displayer with vertical class will be better suited to display media which is taller than it is wider.

### text-column
Displays inner text in scrollable or static column.

Attributes:
- splitter: Used to separate inner text to paragraphs. By default splitter is "$".
- title: Title of the text. In empty by default.

Text-column can be made scrollable by using a "scrollable"-class.

### title-card
Displays its child divs in a horizontal slide show. Slides can be navigated either with arrow buttons or bubbles at the bottom of the title card.


## icons
Templates for icons.

- ham-icon: Hamburger menu icon.


## popups
Containers which render on top of everyhting else.

### sidebar-fixed
Container on the side of the screen which can be slid in and put of view with a button press.

Attributes:
- main_title: text in the button

Sidebar needs to have either "right"- or "left"-class. These determine which side of the screen side bar is on.



## Built with

- JavaScript
- HTML
- sass

Most templates in the project are made as web components.


