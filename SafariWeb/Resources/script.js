const loginURL = "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key&AUTHMETHOD=UserPassword"
const matrixURL = "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=idg_key&AUTHMETHOD=IG&GASF=CERTIFICATE"

document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
    
    const baseURI = window.location.href
    if(baseURI.includes(loginURL)){
        login()
    }
    if(baseURI.includes(matrixURL)){
        fillMatrix()
    }
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function fillMatrix(){
    const okPath = "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[8]/td/input[1]"
    
    const okButton = getElementByXpath(okPath)
    
    const matrix = {"A": ["j", "l","h","x","i","h","l"], ...} //TODO
    
    const mPaths = ["/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[4]/td/div/div/input", "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[5]/td/div/div/input", "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[6]/td/div/div/input"]
    const vPaths = ["/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[4]/th[1]", "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[5]/th[1]", "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[6]/th[1]"]
    
    const values = vPaths.map(path => {
        const innerText = getElementByXpath(path).innerText
        return {"i": innerText[1], "j": parseInt(innerText[3])}
    })
    
    mPaths.map((path, i) =>{
        const input = getElementByXpath(path)
        const value = values[i]
        input.value = matrix[value.i][value.j - 1]
    })
    
    okButton.click()
    
    

}

function login(){
    const accountPath = "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/input"
    const passwordPath = "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[3]/td/div/div/input"
    const okPath = "/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[5]/td/input[1]"

    const accountInput = getElementByXpath(accountPath)
    const passwordInput = getElementByXpath(passwordPath)
    const okButton = getElementByXpath(okPath)
    
    

    accountInput.value = "18B07124"
    passwordInput.value = "TODO"

    okButton.click()
}



