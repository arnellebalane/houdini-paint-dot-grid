if (typeof registerPaint === 'function') {
  class DotGridWorket {
    static get inputProperties() {
      return ['--dot-size', '--dot-spacing', '--dot-color'];
    }

    parseProps(props) {
      const dotSize = props.get('--dot-size');
      const dotSpacing = props.get('--dot-spacing');
      const dotColor = props.get('--dot-color');
      const isUnknown = (value) => value instanceof CSSUnparsedValue;

      return {
        dotSize: isUnknown(dotSize) ? parseInt(dotSize.toString(), 10) || 3 : dotSize.value,
        dotSpacing: isUnknown(dotSpacing) ? parseInt(dotSpacing.toString(), 10) || 6 : dotSpacing.value,
        dotColor: isUnknown(dotColor) ? dotColor.toString().trim() || '#d2d6db' : dotColor.toString(),
      };
    }

    paint(context, size, props) {
      const { dotSize, dotSpacing, dotColor } = this.parseProps(props);

      const radius = dotSize / 2;
      const rows = Math.ceil((size.height - radius) / (dotSize + dotSpacing));
      const cols = Math.ceil((size.width - radius) / (dotSize + dotSpacing));

      context.fillStyle = dotColor;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * (dotSize + dotSpacing) + radius;
          const y = i * (dotSize + dotSpacing) + radius;

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }
    }
  }

  registerPaint('dot-grid', DotGridWorket);
}
