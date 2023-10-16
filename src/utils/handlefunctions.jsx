import {manualStringReverser, letterCount,countUniqueValues,findOddEven,idGenerator,otpGenerator,passwordGenerator,randomNumber,sortNumbers,wordCount, numFormatAlg} from '../functions/function'

const handlefunctions = (val) =>  {
  let valarr = [];
  val.split(',').forEach(current => valarr.push(Number(current)))

 return {
   Api :'/api',
   convertNumbers : numFormatAlg(Number(val)),
   countUniqueValues : countUniqueValues(val),
   findOddEven : findOddEven(valarr),
   idGenerator : idGenerator(val),
   letterCount : letterCount(val),
   manualStringReverse : manualStringReverser(val),
   otpGenerator : otpGenerator(),
   passwordGenerator : passwordGenerator(val),
   sortNumbers : sortNumbers(valarr),
   wordCount : wordCount(val),
   randomNumber : randomNumber(Number(val))
}
}

export default handlefunctions
