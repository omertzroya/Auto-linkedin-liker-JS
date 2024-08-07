# Click All Like Buttons Script

This script automates the process of clicking all "Like" buttons on a webpage. It continuously scrolls down the page, waits for new content to load, and clicks all "Like" buttons that haven't been clicked yet.

## How It Works

1. The script defines a helper function `sleep(ms)` that returns a Promise to pause execution for a specified number of milliseconds.
2. The `clickAllLikeButtons` function:
   - Scrolls to the bottom of the page.
   - Waits for new content to load by using the `sleep` function.
   - Finds all "Like" buttons that haven't been clicked yet (identified by the presence of a specific SVG icon and the absence of a `data-clicked` attribute).
   - Clicks each "Like" button and marks it as clicked by setting a `data-clicked` attribute.
   - Repeats the process until no new "Like" buttons are found or the bottom of the page is reached.

## Usage

To use this script, follow these steps:

1. Open the webpage where you want to automate clicking "Like" buttons.
2. Open the browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Go to the "Console" tab.
4. Copy and paste the entire script into the console.
5. Press `Enter` to run the script.

The script will start scrolling the page and clicking "Like" buttons. It will log its progress to the console.
