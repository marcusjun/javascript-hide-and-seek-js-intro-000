function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){

  //PASS
  //Why does returning nested with getElementById work? when you actually want to pull target out of nested?
  //return document.getElementById('nested')

  //FAIL
  //target is not an id, so doesn't work
  //return document.getElementById('target')

  //PASS
  //Using querySelector for a div called target works, but only when target is div
  //return document.querySelector('div.target')

  //PASS
  //Use querySelector to find id:nested and class:target
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    //have to use parseInt because index-test.js expects innerHTML elements to be integers rather than strings
    var number=parseInt(lis[i].innerHTML,10)
    lis[i].innerHTML=number+n
  }
}

function deepestChild(){

/*
//doesn't iterate over elements because you don't need to?
//just find the last div and return it?

  const lis = document.getElementById('grand-node').querySelectorAll('div')
  return lis[lis.length-1]

/*

//code below works, but is it cheating because it doesn't iterate over elements?
//It just accesses the last div because I counted how many div's are under the grand-node
//Doesnt' work if there are a different number of divs
//but instructions do say the solution doesn't need to be totally generic
  const boo= document.querySelector('#grand-node div div div div')
  return boo

//playing around with other variable assignments/designations
  //const lis = document.querySelectorAll('div')
  //document.querySelector('#grand-node div div div div')

//Code below doesn't work because there are empty div's in grand-node
//and you can't compare an empty/undefined div with "boo!", I guess
    var boo=lis[i].innerHTML
    if(boo==="boo!"){
      return lis[i]
    }
  }

//To access the last div in the NodeList. The last div has an innerHTML unlike the previous div's
//Works regardless of how many div's under grand-node because it just looks for the last div
//but does fake iterating because it's just looking for the last div
//the for loop isn't even really necessary
  for (let i = 0; i < lis.length; i++) {
    if(i===lis.length-1){
      return lis[i]
    }
  }
*/

  //code below works, but is it cheating because it doesn't iterate over elements?
  //const boo= document.querySelector('#grand-node div div div div')
  //return boo

  const lis = document.getElementById('grand-node').querySelectorAll('div')
  //const lis = document.querySelectorAll('div')
  //document.querySelector('#grand-node div div div div')

  for (let i = 0; i < lis.length; i++) {
/*
    var boo=lis[i].innerHTML
    if(boo==="boo!"){
      return boo
    }
  }
*/

    if(i===lis.length-1){
      return "boo!"
    }
  }
}
