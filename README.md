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

## Customization

Visual tweaks are handled through CSS variables defined at the top of `index.html`. Adjusting these values lets you resize or restyle any part of the widget:

- `font-size` on the `html, body` rule changes the base text size.
- `--barH` controls bar thickness.
- `--labelW` sets the width of the text labels.
- `--gap` is the vertical space between rows; `--row-gap` is the gap between a label and its bar.
- `--padX` / `--padY` adjust the page padding, while `--maxw` caps the overall width.
- `--radius`, `--borderW`, `--border`, `--track`, `--fill` and `--label` let you tune colors and shapes.

After editing a variable, save the file and reload the page to see the change. Because the fill overlaps the border by `--borderW`, artifacts will not appear even if you change the bar height or border width.

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

