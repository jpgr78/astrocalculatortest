const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    
    /**
     * define selectors using getter methods
     */
     
   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }

async existdashboard(testing) {
        
        it(testing.text, async () => {
        
       
        await expect($(testing.element)).toBeExisting();
        
    });
  }

  async checkinglogin(test) {
    it(test.text, async () => {

      await this.open(test.path,test.element)
      
      
      await $(test.inputus).setValue(test.username);
    
    await $(test.inputpass).setValue(test.password);
    
      await $(test.element).click();
      
      await browser.saveScreenshot('./screenshot/'+test.text+'.png');
      await expect($(test.element)).toBeChecked()
             
  });

 }
async checkingloginsign(test) {
    it(test.text, async () => {

      
      await $(test.inputus).setValue(test.username);
    
    await $(test.inputpass).setValue(test.password);
    
     
      await $(test.but).click();
    
    await browser.saveScreenshot('./screenshot/'+test.text+'.png');
    await expect($(test.elementexpected)).toBeExisting();
             
  });

 }
async attribute(testing) {
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(500)
        await expect($(testing.element)).toHaveAttr(testing.attr, testing.value)
        await browser.saveScreenshot('./screenshot/'+testing.text+'.png');
        
    });
  } 


  async forgotfull(testing){
      it(testing.text, async () => {
        await this.open(testing.path);
        await $(testing.inputus).setValue(testing.username);
        await browser.saveScreenshot('./screenshot/'+testing.text+'1.png');
        //await browser.pause(500)
        await $(testing.element).click();
        await browser.pause(200)
        await browser.saveScreenshot('./screenshot/'+testing.text+'2.png');
        await expect($(testing.elementexpected)).toBeExisting();
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });

  }
  async forgot(testing){
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(500)
        await expect($(testing.element)).toHaveAttr(testing.attr, testing.value)
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  } 
async golink(testing){
    it(testing.text, async () => {
      if(testing.path!='N/A')
            await this.open(testing.path);
      await browser.saveScreenshot('./screenshot/'+testing.text+'1.png');
      $(testing.element).moveTo(0,0)
      await $(testing.element).click();
     
      await browser.saveScreenshot('./screenshot/'+testing.text+'2.png');
      await expect($(testing.elementexpected)).toBeExisting();});

}

async hastext(test){
  it(test.text, async () => {
      this.open(test.path)
      await expect(test.element).toHaveText(test.textinside)
    
   });

}

  async login (path,inputus,inputpass,but,username, password,text,elementexpected) {
    it(text, async () => {
      if(path!='N/A'){
        this.open(path)
      }

      await browser.saveScreenshot('./screenshot/'+text+'1.png');
      if(await $(inputus).isExisting()){
       
      await $(inputus).setValue(username);
      
      await $(inputpass).setValue(password);
     
      await browser.saveScreenshot('./screenshot/'+text+'2.png');

      await $(but).click();
     /* if(await $('#loginCaptcha').isExisting()){
        await browser.pause(60000)
       }*/
      await browser.saveScreenshot('./screenshot/'+text+'3.png');}
      await expect($(elementexpected)).toBeExisting();});
    
  
  }

async logout (test) {
    it(test.text, async () => {
      if(test.path!='N/A'){
        this.open(test.path)
        browser.pause(20000)
      }
      //if(await $('').isExisting){}
      await browser.saveScreenshot('./screenshot/'+test.text+'1.png');
      
      await $(test.inputus).setValue(test.username);
      
      await $(test.inputpass).setValue(test.password);
      
      await $(test.but[0]).click();

      
      await browser.saveScreenshot('./screenshot/'+test.text+'2.png');
      await $(test.but[1]).click();
      
      await browser.saveScreenshot('./screenshot/'+test.text+'3.png');
      await expect($(test.elementexpected)).toBeExisting();});
    
  
  }


  async logoutclick (test) {
    it(test.text, async () => {
      
     
   await browser.saveScreenshot('./screenshot/'+test.text+'1.png');
    await $(test.but).click();
     
    await browser.saveScreenshot('./screenshot/'+test.text+'2.png');
    await expect($(test.elementexpected)).toBeExisting();
  });
    
  
  }

  async exist(testing) {
        it(testing.text, async () => {
          if(testing.path!='N/A')
            await this.open(testing.path);
       
          await expect($(testing.element)).toBeExisting();
        
    });
  }
  async calculateweight(test) {
    it(test.text+' '+browser.capabilities.browserName, async () => {
        if(test.path!='N/A')
            await this.open(testing.path);
      
        await $(test.inputus).setValue(test.weight);
    
        await browser.pause(500)
        await $(test.select).selectByVisibleText(test.word);
    
        await browser.pause(500)
     
        await $(test.but).click();
    
        await browser.saveScreenshot('./screenshot/'+test.text+' '+browser.capabilities.browserName+'.png');
        
    
       
        
        await expect($(test.elementexpected)).toBeExisting();
             
  });

 }

 async addplanet(test) {
    it(test.text+' '+browser.capabilities.browserName, async () => {
        if(test.path!='N/A')
            await this.open(testing.path);
      
        await $(test.inputus).setValue(test.name);
    
        await browser.pause(500)
        await $(test.multiplier).setValue(test.inputmultiplier);
    
        await browser.pause(500)
     
        await $(test.but).click();
        await browser.pause(2000)
        await $(test.element).selectByVisibleText(test.name);
        await browser.saveScreenshot('./screenshot/'+test.text+' '+browser.capabilities.browserName+'.png');
        //await console.log(test.elementexpected+"="+test.name)
        await expect($(test.elementexpected+"="+test.name)).toBeSelected();
             
  });

 }



  

  get htest(){
      return $('#finish h4');
  }

  async selection(path,element,word,text) {
    it(text+' '+browser.capabilities.browserName, async () => {
         
        if(path!='N/A')
            await this.open(path);
        await $(element).selectByVisibleText(word);
    
        await browser.pause(2000)
    });
      
}

  open(path) {
      return super.open(path);
  }
}

module.exports = new DynamicLoadingPage();