#Website templates

##Description
This folder contains templates to make websites with. Currently it contains templates for simple site structure and templates for more specific purposes.
Goal of this project is to make tools with which the developer can make a somewhat simple website and only really consern themselves with the styling or adding more specialized features. Content of the files is not meant to be altered when used to create a website and all updates should be made with this in mind.


##Installation
Copy the folder to your project folder. 


##Usage
Most template tags can be added to any HTML document by adding the corresponding script-tag and link-tag to documents head-tag.

For example:

In order to use main-container-tag one must add the following tags inside documents head tag:

<link rel="stylesheet" href="./main/container/main_container.css">
<script defer src="./main/container/main_container.js"></script>

After this user can use <main-container> in set document.

It is advised that user creates separate css file to alter the appearance of the templates, instead of altering the css inside this folder.

Some tags, such as the header don't require script tag in order to function. In these cases only add the link-tag.


##Features

###main

Basic containers to make a general structure of the site with.

###adjusting

Containers which sort their children to desiered format. Such as rows, colmuns and grids.

###Content

More specialized containers to show text and other media. Such as cards and scrollable text columns.

###popups

Containers which render on top of everyhting else.


##Build with

- JavaScript
- HTML
- sass

Most templates in the project are made as web components.


