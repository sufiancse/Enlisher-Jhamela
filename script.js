const loadLevel = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/levels/all"
    );
    const data = await res.json();
    displayLevel(data.data);
  } catch (err) {
    console.log(err);
  }
};
const displayLevel = (allLevel) => {
  // console.log(allLevel);
  const levelContainer = document.getElementById("level-container");
  allLevel.forEach((level) => {
    // console.log(level);
    levelContainer.innerHTML += `
        <button onclick="loadLevelWord(${level.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson -${level.level_no}</button>
        
        `;
  });
};

const loadLevelWord = async (id) => {
  // console.log(id);
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    const data = await res.json()
    displayLevelWord(data.data);
  }
  catch (err) {
    console.log(err);
  }
}
const displayLevelWord = (Words) => {
  // console.log(levelWords);
  const showWord = document.getElementById('show-words')
  showWord.innerHTML = ""
  Words.forEach(word => {
    // console.log(levelWord);
    showWord.innerHTML += `
  <div class="bg-white shadow-md rounded-xl py-10 px-5">
                        <div class="space-y-4 mb-5 text-center">
                            <h1 class="font-bold text-3xl">${word.word}</h1>
                            <p class="font-medium text-xl">Meaning /Pronounciation</p>
                            <div class="font-medium text-2xl text-gray-600">"${word.meaning} / ${word.pronunciation}"</div>
                        </div>
                        <div class="flex justify-between ">
                            <span class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></span>
                            <span class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></span>
                        </div>
                    </div>
  
  `
  })
}







// loadLevelWord()
loadLevel();
