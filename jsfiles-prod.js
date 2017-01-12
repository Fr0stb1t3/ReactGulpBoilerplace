function jsFilesProd(){
  return  {
    vendor: [
        'src/scripts/vendor/react.js',
        'src/scripts/vendor/react-dom.js'
    ],
    source: [
      'src/scripts/Utility.js',
      'src/scripts/components/hello.jsx'
    ]
  };
};


module.exports = jsFilesProd();
