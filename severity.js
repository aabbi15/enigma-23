const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: "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" });

const problem="i got a papercut";

const pro=`"Stat in one word whether its severe or not.Example :if the user input "I've been having mild stomach cramps after certain meals; it's not too severe.","not severe"
"I experience occasional bloating and gas, but it usually resolves quickly; it's not too severe.","not severe"
"I have mild heartburn after eating spicy foods; it's not too severe.","not severe"
"I woke up with severe abdominal pain and vomiting; it's very severe.","severe"
"I've been dealing with persistent and severe constipation; it's very uncomfortable.","severe"
"I experienced sudden and severe diarrhea and dehydration; it's distressing.","severe"
"I feel mild discomfort and pressure in my stomach after a heavy meal; it's not too severe.","not severe"
"I have severe abdominal cramps that have been ongoing for days; it's excruciating.","severe"
"I've been having occasional stomachaches, but they are usually brief and not severe.","not severe"
"I have a persistent and severe upset stomach with nausea; it's affecting my daily activities.","severe"
"I have a mild fever and a slight cough.","not severe"
"My allergies are acting up, and my eyes are itchy.","not severe"
"I twisted my ankle while running, and it's swollen.","not severe"
"I have a persistent sore throat and difficulty swallowing.","not severe"
"I accidentally touched a hot pan, and my hand is burnt.","severe"
"I fell off my bike and have a deep cut on my knee.","severe"
"I have a persistent headache, and the pain is getting worse.","severe"
"My stomach hurts after eating spicy food.","not severe"
"I have a runny nose and sneezing.","not severe"
"I got a paper cut on my finger.","not severe"
"I have a mild stomachache after eating too quickly.","not severe"
"I bumped my knee against a table, and it's bruised.","not severe"
"I have a deep splinter in my hand that's causing pain.","severe"
"I fell while hiking and twisted my ankle; it's swollen.","severe"
"I have a persistent high fever, chills, and body aches.","severe"
"I have a minor headache from staying up late.","not severe"
"I accidentally touched a hot stove, and my finger is burned.","severe"
"I have a mild cough and sore throat.","not severe"
"I have a mosquito bite that's itchy and swollen.","not severe"
"I have a deep cut on my hand from a kitchen knife.","severe"
"I have been vomiting intermittently, but it's not severe.","not severe"
"I woke up with a mild fever and chills.","not severe"
"I had a few episodes of vomiting, but it stopped now.","not severe"
"I've been feeling nauseous, but I haven't vomited yet.","not severe"
"I have a high fever, and it's not coming down with medication.","severe"
"I vomited multiple times, and I'm feeling very weak.","severe"
"I have a persistent fever, and my body aches all over.","severe"
"I vomited after eating something spoiled, and I have diarrhea too.","severe"
"I have a low-grade fever, and it's been there for a few days.","not severe"
"I vomited once, but now I'm feeling better.","not severe"
"I have a mild rash on my arms; it's not severe.","not severe"
"I noticed some redness and itching on my skin, but it's not too severe.","not severe"
"I have a few small pimples on my face; it's not a severe breakout.","not severe"
"I've been experiencing dry and itchy skin, but it's manageable.","not severe"
"I have a severe allergic reaction with hives all over my body.","severe"
"I developed a large and painful boil on my thigh; it's very severe.","severe"
"I have a persistent rash with blisters; it's causing a lot of discomfort.","severe"
"I noticed a severe skin discoloration on my face; it's quite alarming.","severe"
"I have a mild case of eczema on my hands; it's not too severe yet.","not severe"
"I woke up with a severe skin infection on my leg; it's red and swollen.","severe"
"I've been experiencing a mild discomfort in my chest, but it comes and goes.","not severe"
"I feel a slight pressure in my chest; it's not too severe, though.","not severe"
"I have occasional heart palpitations, but they are not severe or prolonged.","not severe"
"I woke up with a sharp chest pain on my left side; it's quite severe.","severe"
"I've been having a persistent, heavy feeling in my chest; it's concerning.","severe"
"I experienced a sudden and severe chest pain radiating to my arm; it's alarming.","severe"
"I have mild chest discomfort after a heavy meal; it's not too severe.","not severe"
"I feel like my heart is racing, and there's a tightness in my chest; it's worrying.","severe"
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
"I experienced sudden and severe joint inflammation in my fingers; it's painful.","severe"
"I feel mild joint discomfort in my ankles after a workout; it's not too severe.","not severe"
"I have severe joint pain in my knees that's been getting worse; it's very painful.","severe"
"I've been having occasional joint pain in my shoulders, but it's not too severe.","not severe"
"I have a persistent and severe joint pain in my lower back; it's debilitating.","severe"
"I've been feeling mild joint stiffness in my fingers during the mornings; it's not severe.","not severe"
"I have occasional joint pain in my knees after exercise, but it usually subsides quickly; it's not too severe.","not severe"
"I noticed mild joint swelling in my wrists, but it's not causing significant discomfort.","not severe"
"I experienced sharp and severe joint pain in my shoulder after lifting a heavy object; it's very painful.","severe"
"I've been having constant and severe joint pain in my ankles; it's limiting my mobility.","severe"
"I have a persistent and severe joint pain in my fingers, making it difficult to grip objects.","severe"
"I feel mild joint discomfort in my hips after a long day of sitting; it's not too severe.","not severe"
"I have severe joint pain in my back, and it's radiating down my legs; it's excruciating.","severe"
"I've been experiencing occasional joint pain in my toes; it's not too severe, but it's bothersome.","not severe"
"I have severe joint pain in my wrists that has been ongoing for weeks; it's very uncomfortable.","severe"


Do this for the statement:${problem} . Give a one word answer either 'Severe' or 'Not Severe'
`;
async function abhishek() {
  const response = await openai.completions.create({
    prompt: pro,
    model: "text-ada-001",
  });

  // Extract the output text from the response
  const outputText = response.choices[0].text;

  console.log(outputText);
}

abhishek();
