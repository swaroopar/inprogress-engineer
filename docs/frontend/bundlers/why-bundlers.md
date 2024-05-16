# Why Bundlers?

When JavaScript started, there was no module system.
Code was written in multiple files and they were simply sent in multiple `script` tags in HTML.

The browser then added all files to global namespace and the code could be shared between multiple script files.
But then the files must be put in the correct sequence in the HTML `script` tag.

To solve this problem, a bundler was created which merged all files together into one single file.
