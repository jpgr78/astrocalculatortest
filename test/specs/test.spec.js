const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"", element:"h1=I'm an Astro Weight Calculator!",text: 'Correct text', textinside:"I'm an Astro Weight Calculator!"},
{path:"N/A", element:"#planets",text: 'Select exists', textinside:"I'm an Astro Weight Calculator!"}


]
var test2=test






describe('Elements exists', () => {
 for(var i=0;i<test.length;i++){
          test[i].text=test[i].text+' '+browser.capabilities.browserName;
          DynamicLoadingPage.exist(test[i]);}
          
});

describe('Moon', () => {
    DynamicLoadingPage.selection('N/A',"#planets",'Moon', 'Select Moon')
             
});

describe('Calculate on the moon', () => {
    DynamicLoadingPage.calculateweight({path:'N/A',inputus:'#user-weight',weight:'150',select:"#planets",word:'Moon',elementexpected:"span=24.83 lbs",text:"weight on the moon",but:"#calculate-button"})
             
});

 describe('New Planet', () => {
    DynamicLoadingPage.addplanet({path:'N/A',inputus:'#planetName',elementexpected:"option",name:'Alderaan',multiplier:"#weightMultiplier",inputmultiplier:0.5,element:"#planets",text:"Add planet",but:"#add-button"})
             
}); 

