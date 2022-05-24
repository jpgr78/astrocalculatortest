const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"", element:"h1=I'm an Astro Weight Calculator!",text: 'Correct text', textinside:"I'm an Astro Weight Calculator!"},
{path:"N/A", element:"#planets",text: 'Select exists', textinside:"I'm an Astro Weight Calculator!"}


]
var test2=test

var click=[{path:"replicated/account/logon/", element:'.kbdContent a img',text: 'Login 2 and login 3', elementexpected: '.actindex'},
{path:"replicated/account/logon/", element:'a=Forgot Password?',text: 'Login17', elementexpected: '.actforgotpassword'},
{path:"replicated/Account/ForgotPassword", element:"a=Don't have an account? Register here.",text: 'Login 25 and Login 26', elementexpected: '.actregister'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login 31 and Login 32', elementexpected: '.actregister'}
]
var login_exist=[{path:'N/A',element:'.actmypage .kbdContent a img',text: 'Dashboard 6'},
{path:"N/A", element:'.actmypage .headerRightSide',text: 'Dashboard 7'},
{path:"N/A", element:'a=Share',text: 'Dashboard 15'},{path:"N/A", element:'span=Donate',text: 'Dashboard 15'},
{path:"N/A", element:'.hqMainNav',text: 'Dashboard 25'},{path:"N/A", element:'.goal-panel-inner',text: 'Dashboard 27'},
{path:"N/A", element:'.chart-box',text: 'Dashboard 30'},
{path:"N/A", element:'#statBoxes',text: 'Dashboard 31'},
{path:"N/A", element:'#reportsChart',text: 'Dashboard 49'}
]

var clickdashboard=[{path:"N/A",element:'span=Donate', text:"Dashboard 24", elementexpected:".contdonate"}]




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

