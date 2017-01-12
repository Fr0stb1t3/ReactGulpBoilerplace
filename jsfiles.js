function jsFiles(){
  return {
    vendor: [
    ],
    source: [
      'src/scripts/Utility.js',
      'src/scripts/components/hello.jsx'
    ]
  };
};
/*
Depending on the project specs components may be included with a wildcard
*/

module.exports = jsFiles();
