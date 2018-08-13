
# what projects
sphinx Cat
illios dome
Toorcamp keyboard.

A recent project I have worked on was a five foot long querty LED keyboard. The initial
idea for the project was to make 2 large keyboards that people can play a
security exploit game on. But to be honest the project scope was too large and
because of several issues with hardware and the time running out we settled on an
interactive LED soundboard. Each key when pressed light up rainbow of color and
played a audio clip from old Nintendo games.

The keyboard was made of laser cut wood pieces glued together and with hexagon
shaped holes for the diffused acrylic keys. 59 keys were used. Each key
had a mini push button that connected to one of three input microcontrollers.

The three input microcontrollers all connected and reported to a master microcontroller
via hardware serial. The bit of data that was sent was the button number 0-19
followed by the letter D for button pressed down.

Then the master microcontroller would light up a segment of LEDs under that key
and over time they would slowly fade out to the base color.

Although the project was not fully realized in some respects I concider it a complete version one.
From the start several people had wanted to implement too many features and had
huge project scope. I have

When I joined the project I expected that the LED and input mapping would be
already done and I could focus on programming juicy fun things.
We scrambled  a lot to trouble shoot and
issues with



Sphinx Cat game

Project Description:

Sphinx cat started out as a Portland Indie Game Squad Summer Slow Jam and culminated in an interactive demonstration at the OMSI Mini Maker Faire. `Sphinx Cat` is a musical Simon Says game where players interact with a 3d printed blocky Sphinx. The Sphinx will play a generated melody and flash lights, then the players echo the pattern back at the Sphinx.

Technical Details:
A teensy 3.2 has 6 ws2812 led strips connect to it. Each strip has a mini pushbutton on the end.
A usb cable sends MIDI notes out from the teensy to a computer to play synth sounds.
A 3D Printed Enclosure houses the teensy.

I wanted to make an interactive game installation that engaged with the audience in a playful way. The game utilizes light, sounds, and 3d shapes to engage with the player and challenge them to remember a sequence of lights with musical notes.

Letting a person discovering something for themselves is an important aspect in learning and fun. A person by watching a few rounds of the game can quickly catch on and figure out how to play.

It plays very similarly to Simon Says. Each round the software generates a random sequence of button presses stored in an array. Each button has an LED animation and a MIDI note that the game plays. The game shows them to you one by one. Each one will play a sound and animate the corresponding LED strip. The player is then tasked with replaying that sequence back by pressing the buttons in the same order. Once correct the game jingles and the round restarts with the sequence growing each time. At the end of the game it shows the score by lighting up 1 LED for each correct sequence.

I wrote the code myself while putting together the hardware and testing it often along the way. I believe when both the software and hardware is made with consideration of each other a harmony can be formed. For example when I was making this I intended for there to only be 4 buttons and strips, but once I had made the enclosure resemble a Sphinx and started writing the audio code it became clear that I should use an Egyptian Scale for the musical component. That requirement pushed me to modify the hardware to add the 2 extra strips and buttons because an Egyptian Scale has 6 notes.

It was a lot of fun showing the finished project and seeing kids and adults get inspired by it. Afterwards I knew I wanted to pursue work making interactive experiences.

Check out the code on github and I also have a video of it in action.
