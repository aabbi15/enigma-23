const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: "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" });


const age=30;
const gender=male;
const request="runny nose";

const problem = "age is ${age} , gender is ${gender} and the patients symptoms are ${request}";


const pro=`
example="got a paper cut-20","fell of the bike for a deep cut-50","having difficulty breathing and having heavy chest-89",
Do this for the statement:${problem} .Calculate a number from  severity scale from 0 to 100 where 0 is not at all severe and 100 is maximum severe also consider age as a factor while assignig the number .just give a number as output
`;

async function abhishek() {
  const response = await openai.completions.create({
    prompt: pro,
    model: "text-davinci-003",
  });

  // Extract the output text from the response
  const outputText = response.choices[0].text;

  console.log(outputText);
  // return outputText;
}

// async function main() {
//   const result = await abhishek(); // Call the abhishek function and store the returned value in 'result'
//   const new_resp=await openai.completions.create({
//     prompt:`If "${result}" is "Not Severe" give one word output "Online".if "${result}" is "Severe" then for "${problem}" suggest which speciality of doctor is best to suggest .Just a one word answer for .[example: result=Not Severe , Output= "Online"],[example: result= Severe ,problem= "pain in my bones ",Output=
//     "orthopedic" ]`,
//     model:"text-ada-001",
//   });
//     const outputText2 = new_resp.choices[0].text;
//   console.log(outputText2);


  
// }
abhishek()
// main();