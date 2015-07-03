An attribute is some information that tells the browser additional information about the HTML element, the image in this case.

```html
<img src="cute.jpg" alt="A cute puppy and kitten">
```

In this case the `src="cute.jpg"` and `alt="A cute puppy and kitten` are two attributes of the img tag. 

## The src attribute
Obviously we have to tell our web page where to get the image from. The way we do this is to use the `src` attribute.

In this case, we specify the name of the file. 

The browser now knows where to get the file `cute.jpg`. It will load it from the same place as `index.html`.

## The alt attribute
The `alt` attribute means 'alternative text'. 

Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded.

Another great use for this is for screen readers for visually impaired people. Screen readers read out what is on the screen. This is not a problem if it is text. But if you have an image, the browser can read out the contents of the `alt` tag so a blind person gets as much meaning from the page as possible.

## Other attributes
Each HTML element has its own set of attributes. We'll learn more about them as we come across new HTML elements.

