function search(arr, s){
    var matches = [], i, key;
    
    for( i = arr.length; i--; )
        for( key in arr[i] )
            console.log(arr[i][key])
            if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
                matches.push( arr[i] );  // <-- This can be changed to anything

    return matches;
};

// dummy data
var items = [
      {
        "foo" : "bar",
        "bar" : "sit"
      },
      {
        "foo" : "lorem",
        "bar" : "ipsum"
      },
      {
        "foo" : "dolor",
        "bar" : "sym"
      },{
        "foo" : "kidder",
        "bar" : "love"
      }
];
    
var result = search(items, 'lo'); // search "items" for a query value
console.log(result); // print the result
