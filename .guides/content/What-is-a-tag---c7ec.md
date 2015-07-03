We have been talking about tags a lot. So what is a tag?

|||definition
- A tag defines an HTML element like `<body>`, or `<h1>` or `<p>`.
- Tags most often come in pairs, so `<h1> ... </h1>`, with the first one commonly known as the *starting* tag and the second one known as the *closing* tag.
- The closing tag is the same as the opening tag but starts with the `/` character (`</h1>` closes `<h1>`).

|||

As we discussed earlier you can see a pair of tags, one opening and one closing as a "box" that is wrapped around content and defines what kind of content it is.

Here is our basic html from sections 3.

``` html
<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    Hello there!!!
</body>

</html>
```

![](.guides/img/html_boxes.png)

And here is a way of viewing it as "boxes".
So we have the `<html>` tag which is the first box of every html document.

It contains two other tags which are `<head>` and `<body>`

In this case, the `<head>` contains a `<title>` which is used to give a title to the page and also used by the browser for tht title of the window. In this case we left it empty.

Now the `<body>` tag contains "Hello there!!!" which is a text (and as discussed earlier, it should be put in its own tag instead of directly dumped into the `<body>` but it works like that.)


**Attention : It is really, really important that you get the opening and closing tags right or your page will not display properly.**

Indeed if you dont close a tag it is like you left the box openened and didnt close it, so everything that comes afterwards will be considered in that box.

Let see what it looks like if we didnt close the `<title>` tag in the previous example :

![](.guides/img/html_boxes_error.png)

As the `<title>` tag is never closed, everything that comes afterwards is included in it. In this case we have the `<body>` and its text .. Which is wrong!

Now let's move to the next section.



