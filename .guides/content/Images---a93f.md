Now we are going to brighten our page up with an image. Over on the left hand side, we can see some HTML code with an image already created.

It's actually very easy to add images just using the `<img>` tag. 

`src="cute.jpg"` tells the browser that the image to load in this tag is `cute.jpg` image. Try clicking on `cute.jpg` and you can see the file open up.

We'll explain `src=` in more detail on the next page.

|||info
### Image tags do not have a closing tag
Notice that there is no closing tag to match the opening tag. The `<img>` tag is one of the few tags where this is the case.

Actually this is not entirely true, it depends on what version of HTML you are using. We will come back to this later when we compare the different versions of HTML. In general the browser will accept:

- `<img>`
- `<img />`
- `<img></img>`

Did you notice the `/` at the end of `<img />`.
What this means is that that the img tag is opened and closed and doesnt need an additionnal `</img>` to be closed when used this way.

In general we can remember that a few HTML tags don't need any content inside them, and those tags do not need to be closed.

|||

|||challenge
In the file tree on the far left is a second image `not-cute.jpg`. See if you can modify `index.html` so this image is displayed rather than the puppy and kitten.

{Check it!! | custom}(test-img)

|||
