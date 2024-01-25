const adviceQuotes = [
  "დაუჯერე ოლის.",
  "Stay true to yourself.",
  "Do what you love--not what you're told to love.",
  "Create the environment that's right for you.",
  "Choose your friends wisely.",
  "ეძმაკაცე გუჯურის.",
  "Develop positive habits.",
  "არ მოპარო მანქანა ჯონ ვიკს და არ მოუკლა ძაღლი.",
  "Be vulnerable.",
  ".",
  "ვინც ბოლო ის გოგო",
  "Luck comes from hard work.",
  "გიყვარდეს ოლი თუ ოლისაც ეყვარები.",
  "In order to get, you have to give.",
  "რასაცა გასცემ შენია, რაც არა დაკარგულია.",
  "გაცემულ სიკეთეს ხალხი არ ივიწყებს.",
  "გიჟს ნურც ჰკითხავ, ნურც დაუჯერებ.",
  "დათვი რო მოგერევა ბაბაიაგა კი არა არტილერიას დაუძახე.",
  "გეშინოდეს იმისა, ვისაც შენი ეშინიანო.",
  "არ მოწიო ბიოი ბიოი კლააამს",
  "Errare humanum est, ignoscere divinu.",
  "ყინულზე ტორმუზი მოგაცურებს",
  "ერთი კარი რომ მიიხურება, მეორე გაიღება.",
  "გველი გარედანაა ჭრელი, ადამიანი შიგნიდან.",
  "ვინც მალე სჭრის, ის დიდხანს ნანობს.",
  "ვირისაგან წიხლი არ უნდა გეწყინოს.",
  "ბატონო გია, ბატონო გია",
  "ზოგჯერ ტყუილი, მართალს სჯობიაო.",
  "იაფი ყველაზე ძვირად დაგიჯდებაო.",
  "ჟანგი რკინასა სჭამს, დარდი გულსაო.",
  "არაუშავს გიორგი",
  "სიტყვა უსაქმოდ მკვდარია.",
  "Don't be afraid of being afraid.",
  "Listen to learn.",
  "არ გააბრაზო ჰალკი.",
  "Don't make decisions when you are angry or ecstatic.",
  "Don't worry what other people think.",
];

const container = document.querySelector(".container");
const generateBtn = document.querySelector("#btn");

function generateAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceQuotes.length);
  const advice = adviceQuotes[randomIndex];
  const adviceNumber = randomIndex + 1;
  const adviceNumberEl = document.getElementById("advice-number");
  const adviceEl = document.getElementById("advice");
  adviceNumberEl.textContent = `ADVICE #${adviceNumber}:`;
  adviceEl.textContent = advice;
}

generateAdvice();

generateBtn.addEventListener("mouseover", function () {
  generateBtn.style.transform = "scale(1.2) rotate(360deg)";
});

generateBtn.addEventListener("mouseout", function () {
  generateBtn.style.transform = "scale(1) rotate(0deg)";
});


let rotation = 360;
generateBtn.addEventListener("click", function () {
  rotation += 360;
  generateBtn.style.transform = "scale(1.2) rotate("  + rotation + "deg)";
  generateAdvice()
});