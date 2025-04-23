const vocab = [
    { character: "看", pinyin: "kàn", type: "v." },
    { character: "别客气", pinyin: "bié kèqi", type: "adv." },
    { character: "因为", pinyin: "yīnwèi", type: "conj." },
    { character: "无聊", pinyin: "wúliáo", type: "adj." },
    { character: "医院", pinyin: "yīyuàn", type: "n." },
    { character: "聊天儿", pinyin: "liáo tiānr", type: "v." },
    { character: "做梦", pinyin: "zuò mèng", type: "v." },
    { character: "幸福", pinyin: "xìngfú", type: "adj." },
    { character: "背", pinyin: "bèi", type: "v." },
    { character: "生词", pinyin: "shēngcí", type: "n." },
    { character: "考试", pinyin: "kǎo shì", type: "v." },
    { character: "累", pinyin: "lèi", type: "adj." },
    { character: "死", pinyin: "sǐ", type: "v./adj." },
    { character: "住", pinyin: "zhù", type: "v." },
    { character: "问", pinyin: "wèn", type: "v." },
    { character: "医生", pinyin: "yīshēng", type: "n." },
    { character: "同意", pinyin: "tóngyì", type: "v." },
    { character: "对了", pinyin: "duìle", type: "v." },
    { character: "炒", pinyin: "chǎo", type: "v." },
    { character: "菜", pinyin: "cài", type: "n." },
    { character: "面条儿", pinyin: "miàntiáor", type: "n." },
    { character: "鸡肉", pinyin: "jīròu", type: "n." },
    { character: "汉堡", pinyin: "hànbǎo", type: "n." },
    { character: "病人", pinyin: "bìngrén", type: "n." },
    { character: "身体", pinyin: "shēntǐ", type: "n." },
    { character: "药", pinyin: "yào", type: "n." }
  ];
  
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function newQuestion() {
    const question = getRandomItem(vocab);
    const options = [question];
  
    while (options.length < 4) {
      const option = getRandomItem(vocab);
      if (!options.includes(option)) {
        options.push(option);
      }
    }
  
    options.sort(() => Math.random() - 0.5); // shuffle
  
    document.getElementById("character").innerText = question.character;
    const buttons = document.querySelectorAll(".option");
  
    buttons.forEach((btn, index) => {
      btn.innerText = options[index].pinyin;
      btn.onclick = () => {
        if (options[index] === question) {
          alert("✅ Correct!");
        } else {
          alert(`❌ Wrong! Correct answer: ${question.pinyin}`);
        }
        newQuestion();
      };
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    newQuestion();
  });