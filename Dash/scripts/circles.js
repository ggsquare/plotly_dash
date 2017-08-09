Plotly.d3.json('http://rickyreusser.com/animation-experiments/data/gapminder-with-frames.json', function(err, d) {  
  d.layout.sliders = [{
    currentvalue: {
      prefix: 'Year: ',
      xanchor: 'right',
      font: {
        size: 20,
        color: '#888'
      }
    },
    x: 0.1,
    len: 0.9,
    pad: {t: 40, b: 20},
    steps: d.frames.map(function(f) {
      return {
        method: 'animate',
        args: [[f.name], {mode: 'immediate', frame: {redraw: false}}],
        label: f.name
      }
    })
  }];
  
  d.layout.width = window.innerWidth;
  d.layout.height = window.innerHeight;
  d.layout.title = 'Life Expectancy vs. GDP Per Capita';
  
  Plotly.plot('graph', d.data, d.layout, d.config).then(function() {
    return Plotly.addFrames('graph', d.frames);
  });
});