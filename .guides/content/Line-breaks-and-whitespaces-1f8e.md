One thing to know is how you handle line breaks in HTML.

Simply pressing the Enter or Return key in the middle of a line will not do anything. It will be ignored by the browser.


Look at this code :

```html
<p>Notice how I pressed enter here, 
   but it still appears on the same line.</p>
```

There is a return after `here,` but if you look at the preview :

![](.guides/img/iframe5.png)

You will notice that the line continues as nothing happend.

In general the browser ignores line breaks and condenses multiple whitespaces into one.

Here is another example :

```html
<p>There are 10 whitespaces after this           but it
shows as one whitespace!</p>
```

![](.guides/img/iframe6.png)

## How do we then add a line break ?

The `<br>` tag serves exactly this purpose. When you add it, you instruct the browser to put a line break at this exact position.

Let's try it ! If you look at the code on the left pane. You will see : 

```html
<h1>This is the way it's done</h1>
  <p>Mary had a little lamb <br> Whose fleece was white as snow.<br>And everywhere that Mary went<br>Her lamb was sure to go.</p>
```

And if you look at the preview window you will see a new line everytime there is a `<br>`

Another way of doing it is to use `<p>` tags. They means "paragraph" and basically everything inside a `<p>` and `</p>` is considered as one paragraph. If you start then another `<p>` it will be a second paragraph.

Check the code on the left and see how you can mimick the behaviour of the `<br>` tags with the `<p>`. The only difference is that there are more vertical spaces between 2 paragraphs than between two lines that are separated by a `<br>`. You will know by practicing when to use each of those two tags.

  