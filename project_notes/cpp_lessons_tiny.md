# C++ Lessons from my mistakes
### 6-10-18
On toorcamp led project. I had a bug with FastLED and WS28128Serial.
Inside one of my header files I was including the FastLED library all alone.
and Later in the main cpp file I was including WS2812Serial first.

I need to remember to include library files that depend on eachother in the Right
order!! Tim helped figure this out.

## 6-8-18
Make a variable global from a header
Add extern in front of variable definition inside a shared header file.
