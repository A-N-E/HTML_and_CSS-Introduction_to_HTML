We have been talking about tags a lot but what are they?

|||definition
- A tag defines an HTML element like `<body>`, or `<h1>` or `<p>`.
- Tags most often come in pairs, so `<h1> ... </h1>`, with the first one commonly known as the *opening* tag and the second one known as the *closing* tag.
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
    An empty web page
</body>

</html>
```

And here is a way of viewing it as "boxes".

![](.guides/img/iframe1.png)

We have the `<html>` tag which is the first box of every html document. It contains two other tags which are `<head>` and `<body>`

In this case, the `<head>` contains a `<title>` which is used to give a title to the page and also used by the browser for the title of the window or tab. In this case we left it empty.

The `<body>` tag contains "Hello there!!!" which is text. 

|||warning
# It is REALLY important that you get the opening and closing tags right or your page will not display properly

If you dont close a tag the browser treats thinks you are still defining its contents, so everything that comes afterwards will be considered in that box.

Let see what happens if we do not close the  `<title>` tag:


| Tag closed | Tag not closed |
| :--------: | :------------: |
| ![](.guides/img/iframe1.png) | ![](.guides/img/iframe2.png) |

As the `<title>` tag is never closed, everything that comes afterwards is included in it. In this case we have the `<body>` and its text, which is wrong!

|||