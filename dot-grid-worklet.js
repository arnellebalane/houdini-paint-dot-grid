class DotGridWorket {

  static get inputProperties() {
    return ['--dot-size', '--dot-spacing', '--dot-color'];
  }

  static get contextOptions() {
    return {alpha: true};
  }

  paint(context, size, props) {
    const dotSize = props.get('--dot-size').value;
    const dotSpacing = props.get('--dot-spacing').value;
    const dotColor = props.get('--dot-color').toString();

    const radius = Math.ceil(dotSize / 2);
    const rows = Math.ceil((size.height - radius) / (dotSize + dotSpacing));
    const cols = Math.ceil((size.width - radius) / (dotSize + dotSpacing));

    context.fillStyle = dotColor;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = (j * (dotSize + dotSpacing)) + radius;
        const y = (i * (dotSize + dotSpacing)) + radius;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  }

}

registerPaint('dot-grid', DotGridWorket);
