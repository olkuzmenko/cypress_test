class Randomizer{

    randomEmail() {
        let strEmail = "";
        let strValues = "qwervflabcdefg12345";
        let strTmp;
        for (let i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        strEmail = strEmail + "gmail.com";
        return strEmail;
        };
           
        randomeStr() {
        let string = '';
        let chars = 'aABCDEFGnopqrstuvwxyz';
        for (let ii = 0; ii < 10; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
          }
        return string;
        }
        randPassword(letters, numbers, either) {
            let chars = [
             "ABCDEFGHIJKLMNOPQRSTUVWXYZwxyz", // letters
             "0123456789", // numbers
             "%@#$!" // either
            ];
          
            return [letters, numbers, either].map(function(len, i) {
              return Array(len).fill(chars[i]).map(function(x) {
                return x[Math.floor(Math.random() * x.length)];
              }).join('');
            }).concat().join('').split('').sort(function(){
              return 0.5-Math.random();
            }).join('')
          }    
}
module.exports = new Randomizer();