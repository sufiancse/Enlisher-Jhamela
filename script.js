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
    const res = await fetch(
      `https://openapi.programming-hero.com/api/level/${id}`
    );
    const data = await res.json();
    displayLevelWord(data.data);
  } catch (err) {
    console.log(err);
  }
};
const displayLevelWord = (Words) => {
  // console.log(Words);
  const showWord = document.getElementById("show-words");
  showWord.innerHTML = "";
  if (Words.length == 0) {
    showWord.innerHTML += `
    <div class="rounded-2xl p-5 md:p-10 text-center col-span-full">
                        <img src="./assets/alert-error.png" class="mx-auto" alt="">
                        <p class="text-gray-500 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                        <h1 class="text-3xl font-medium mt-3 font-bangla">নেক্সট Lesson এ যান</h1>
                    </div>
    
    `;
    return;
  }

  Words.forEach((word) => {
    // console.log(word);
    showWord.innerHTML += `
  <div class="bg-white h-fit shadow-md rounded-xl py-10 px-5">
                        <div class="space-y-4 mb-5 text-center">
                            <h1 class="font-bold text-3xl">${word.word}</h1>
                            <p class="font-medium text-xl">Meaning /Pronounciation</p>
                            <div class="font-bold text-2xl text-gray-600 font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
                        </div>
                        <div class="flex justify-between ">
                            <span onclick="loadWordDetails(${word.id})" class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></span>
                            <span class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></span>
                        </div>
                    </div>
  
  `;
  });
};

const loadWordDetails = async (id) => {
  // console.log(id);
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/word/${id}`
    );
    const data = await res.json();
    displayWordDetails(data.data);
  } catch (err) {
    console.log(err);
  }
};

const displayWordDetails = (word) => {
  // console.log(typeof word);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = ""
  detailsContainer.innerHTML += `
  <h1 class="font-bold text-3xl">${word.word} (<i class="fa-solid fa-microphone-lines"></i>:${word.pronunciation})</h1>
              <div>
                <h1 class="font-bold">Meaning</h1>
                <p class="font-bangla">${word.meaning}</p>
              </div>
              <div>
                <h1 class="font-bold">Example</h1>
                <p>${word.sentence}</p>
              </div>
              <div>
                <h1 class="font-bold font-bangla">সমার্থক শব্দ গুলো</h1>
                <div></div>
              </div>
  
  `;
  document.getElementById("my_modal_5").showModal()
};

// loadLevelWord()
loadLevel();
