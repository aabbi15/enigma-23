const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: "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" });

const problem = "98 celsius fever";

const pro = `"Stat in one word whether it's severe or not.
Example:"I feel like my heart is racing, and there's a tightness in my chest; it's worrying.","severe"
"I've been having occasional chest pains, but they are usually brief and not severe.","not severe"
"I have a constant, severe chest pain; it's been ongoing for hours.","severe"
"I feel a mild discomfort in my chest when I take deep breaths; it's not too severe.","not severe"
"I've had a dull ache in my chest for a couple of days; it's not severe, but it's persistent.","not severe"
"I have occasional chest tightness, but it's usually brief and not severe.","not severe"
"I woke up in the middle of the night with a sharp chest pain; it was very severe, but it went away.","severe"
"I've been experiencing a squeezing pain in my chest that radiates to my back; it's severe.","severe"
"I felt a sudden and intense pressure in my chest, along with shortness of breath; it was very severe.","severe"
"I get mild chest discomfort during stressful situations; it's not severe, but it's unsettling.","not severe"
"I have a sharp, stabbing pain in my chest every time I inhale deeply; it's severe.","severe"
"I've been having mild chest pain along with dizziness; it's concerning but not severe.","not severe"
"I experienced a sudden, crushing chest pain that felt like a weight on my chest; it was extremely severe.","severe"
"I have mild joint pain in my knees after a long walk; it's not too severe.","not severe"
"I've been experiencing occasional joint stiffness, but it's not too severe.","not severe"
"I have mild pain in my wrist joint when I twist it; it's not severe.","not severe"
"I woke up with a severe and throbbing joint pain in my elbow; it's very severe.","severe"
"I've been having persistent and severe joint pain in my hips; it's very uncomfortable.","severe"
`;

async function abhishek() {
  const response = await openai.completions.create({
    prompt: pro,
    model: "text-ada-001",
  });

  // Extract the output text from the response
  const outputText = response;

  console.log(outputText);
  return outputText;
}

// async function main() {
//   const result = await abhishek(); // Call the abhishek function and store the returned value in 'result'
  
// //   const new_resp = await openai.completions.create({
// //     prompt: `if "${result}" is "Not Severe", then give the answer: "Consult via video call." But if "${result}" is "Severe," then what specialty of doctor is best to consult with?`,
// //     model: "text-ada-001",
// //   });

// //   const outputText2 = new_resp.choices[0].text;
// //   console.log(outputText2);
// }

// main();
abhishek();