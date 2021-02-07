if (CSS.registerProperty) {
  CSS.registerProperty({
    name: '--dot-size',
    syntax: '<length>',
    inherits: false,
    initialValue: '3px',
  });

  CSS.registerProperty({
    name: '--dot-spacing',
    syntax: '<length>',
    inherits: false,
    initialValue: '6px',
  });

  CSS.registerProperty({
    name: '--dot-color',
    syntax: '<color>',
    inherits: false,
    initialValue: '#d2d6db',
  });
}
