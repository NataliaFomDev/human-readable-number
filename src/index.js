/*return toReadable(number);*/
module.exports = function toReadable(number) {
        const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        if (number === 0) {
            return 'zero';
        }
    
        function convertHundreds(num) {
            if (num >= 100) {
                return units[Math.floor(num / 100)] + ' hundred';
            }
            return '';
        }
    
        function convertTens(num) {
            if (num >= 10 && num < 20) {
                return teens[num - 10];
            } else if (num >= 20) {
                return tens[Math.floor(num / 10)];
            }
            return '';
        }
        
    
        function convertUnits(num) {
            if (num > 0) {
                return units[num];
            } else {
                return '';
            }
        }
    
        const hundredPart = convertHundreds(number);
        const tenPart = convertTens(number % 100);
        const unitPart = convertUnits(number % 10);
    
        let fullAnswer = '';
        if (teens.includes(tenPart)) {
            return fullAnswer = (hundredPart + ' ' + tenPart).trim();
        } else if (tenPart === '') {
            return fullAnswer = (hundredPart + ' ' + unitPart).trim();
        } else {
            return fullAnswer = (hundredPart + ' ' + tenPart + ' ' + unitPart).trim();
        } 
    }

    