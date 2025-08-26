# Notion Time Bars

A tiny standalone HTML page that renders progress bars for the current day, week, month and year. The layout uses equal-height bars so it can be embedded cleanly inside Notion or viewed in any browser.

## Usage

1. Download or clone the repository.
2. Open `index.html` in any modern browser.
3. (Optional) Host the file somewhere accessible and paste the URL into a Notion *Embed* block.

The page updates every minute to keep the bars in sync with the current time.

## Configuration

Inside `index.html` you will find a `CONFIG` object near the top of the `<script>` tag:

```js
const CONFIG = {
  startOfDayHour: 0,  // change to your wake-up hour, e.g. 6
  weekStart: 1,       // 1 = Monday (ISO), 0 = Sunday
  mode: "elapsed",    // "elapsed" or "remaining"
  show: { day: true, week: true, month: true, year: true },
};
```

- `startOfDayHour` – shift the start of the day if you wake up late.
- `weekStart` – choose which day starts the week.
- `mode` – `"elapsed"` fills the bars with time passed; `"remaining"` shows time left.
- `show` – toggle individual bars on or off.

Edit the values, save the file and refresh the browser to apply changes.

## Testing

Run the test suite to verify that the HTML structure has the expected elements:

```
npm test
```

This runs a small Node script that checks for the presence of key progress bar elements in `index.html`.

## Browser compatibility

The page uses modern web features (Flexbox, CSS custom properties and ES6 JavaScript). It works in up-to-date versions of Chrome, Firefox, Safari and Edge. Older browsers, including Internet Explorer, are not supported.

## Demo

No screenshot or hosted demo is included. Open `index.html` locally to see the progress bars in action.

