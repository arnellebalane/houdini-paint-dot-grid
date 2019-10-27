# Houdini Dot Grid

Draw dot-grid backgrounds using [CSS Paint API](https://houdini.glitch.me/paint).

Learn mode about [CSS Houdini](https://houdini.glitch.me/).


## Usage

Load the JavaScript file for this module in order to start using it. Several
builds are provided, and can be used as follows:

**ES Module:**

```html
<script type="module" src="https://unpkg.com/houdini-dot-grid/dist/dot-grid.esm.js"></script>
<script type="module">
  import 'https://unpkg.com/houdini-dot-grid/dist/dot-grid.esm.js';
</script>
```

**UMD:**

```html
<script src="https://unpkg.com/houdini-dot-grid/dist/dot-grid.umd.js">
```

Loading the JavaScript file registers custom properties that can be used to
customize the dot grid that will be drawn. It also loads the paint worklet
script.

Then add the following CSS to the element which we want to have the dot-grid
background:

```css
.element-selector {
  background-image: paint(dot-grid);
  --dot-size: 4px;
  --dot-spacing: 8px;
  --dot-color: yellow;
}
```


## API

**`paint(dot-grid)`**

The paint worklet is registered with the name `dot-grid`, and it can be used
anywhere where the CSS expects an image, such as background images, border
images, etc.

### Custom Properties

- **`--dot-size`**: The diameter of the dots. Default: `3px`.
- **`--dot-spacing`**: The space between each dot. Default: `6px`.
- **`--dot-color`**: The color of the dots. Default: `#d2d6db`.


## License

MIT License
