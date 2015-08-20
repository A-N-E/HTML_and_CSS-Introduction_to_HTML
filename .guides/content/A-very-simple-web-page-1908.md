On the far left you can see the Filetree panel. It shows the folder containing the files related to the current section.

The opened file `index.html` on the file contains code for a very basic web page. It looks a little scary with all those *tags* like `<html>` and `<body>` and so on. Don't worry, you'll soon get used to them.

## The doctype
On the first line you can notice : `<!DOCTYPE html>`
This is a document type declaration or DOCTYPE. It is an instruction that tells the browser which version of HTML you are using for this document.
The one you see here : `<!DOCTYPE html>` is the one for HTML5.
There are different doctypes if you are using HTML4 or XHTML but for the moment we will always use HTML5 as it is the most recent and recommended version of HTML. All the versions : HTML4, XHTML, HTML5 are used to do webpages, the difference is that the HTML language evolved over time and some tags were added while other were removed.

## The html element
This is the root or top-level element of the HTML document. That means that it is the first element of any webpage and will contain two other elements `<head>` and `<body>`. 

The `<head>` is the part of the page which is not really visible on the page. It gives information about the page itself to the browser, like the `<title>`, which is displayed on the browser tab. Here is an example of how the browser tab containing the page would look like if we have this title : `<title>Here is a nice title </title>`.

![](.guides/img/title-tab.png)

The `<body>` is the main part of the page and will contain all the visible content of the page, text, images and more.

We can visualise the `index.html` document as a nested tree of elements:

![](.guides/img/iframe1.png)

You can see that the `<html>` `<head>` `<body>` `<title>` can be considered as "boxes" that contains what is inside them. 

## The Preview window
Below the code windows is a 'Preview' window pointing to our simple web page. Go ahead and change the `An empty web page` text to something else. Next, press the 'Reload Preview' button in the preview window.

![](.guides/img/reload.png)

When you are done playing with the text, we continue to the next section !



