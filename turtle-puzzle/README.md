# turtle-puzzle

Combine pieces to create a finished puzzle with your knowledge of HTML and CSS!

## Objective

Use **HTML Elements** and **CSS Flexbox** to combine individuals images to form a complete picture of a turtle in the sea!

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of CSS Flexbox.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:

1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* pictures folder (from this folder)
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Inside the body, create a ```div``` with a ```class``` of "puzzle".
2. **Inside of this div**, create the following:

  * ```div``` with an ```id``` of "pieces"
    * ```img``` with the ```src``` to the "image1.png" file.
    * ```img``` with the ```src``` to the "image2.png" file.
    * ```img``` with the ```src``` to the "image3.png" file.

This part should appear like this in your HTML file:

``` HTML
<div class="puzzle">
  <div id="pieces">
    <img src="pictures/pieces/image1.jpg" alt="">
    <img src="pictures/pieces/image2.jpg" alt="">
    <img src="pictures/pieces/image3.jpg" alt="">
  </div>
</div>
```

**Inside of the div with class of puzzle, continue to create the following:**

* ```div``` with an ```id``` of "pieces2"
  * ```img``` with the ```src``` to the "image4.png" file.
  * ```img``` with the ```src``` to the "image5.png" file.
  * ```img``` with the ```src``` to the "image6.png" file.

---

* ```div``` with an ```id``` of "pieces3"
  * ```img``` with the ```src``` to the "image7.png" file.
  * ```img``` with the ```src``` to the "image8.png" file.
  * ```img``` with the ```src``` to the "image9.png" file.

---

### Part III CSS

To complete Part II, fulfill the following requirements:

1. Target the ```body``` element.
* Set the ```margin``` to 0px. This will get rid of any white spaces on the edges of the body.
* Set the ```width``` to 100%. This will allow the body to cover the whole screen of the device.
* Set the ```height``` to "auto", so it can allow all the elements to fit inside.
* Set the ```margin-top``` to be 20px.
* Set the ```margin-bottom``` to be 20px.

2. Target the ```class``` of "puzzle".
* Set the ```margin-left``` to be 10%;
* Set the ```margin-right``` to be 10%;
* Use flexbox to wrap the pieces and center them horizontally and vertically on the screen.

3. Target the ```id``` of "pieces".
* Set the ```box-shadow``` to 5px 10px 18px #888888.
* Use flexbox to allow the pieces to be centered and located next to each other with no spaces in-between.

4. Repeat the steps for part 3 for the  ```id``` of "pieces2".

5. Repeat the steps for part 4 for the  ```id``` of "pieces3".

---

Congratulations! You should now have a finished puzzle!

## Stretch Goals

Use CSS Flexbox to allow the finished turtle at sea puzzle to remain intact when the screen is zoomed in or zoomed out.
