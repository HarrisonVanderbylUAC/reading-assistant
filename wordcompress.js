const { writeFileSync } = require("fs");

javascript: (() => {
  const words = require("./alpha.json").words;

  const traverse = (map, word, length) => {
    if (word.length == 0) return 1;
    map[length] = map[length] ?? {};
    map[length][word[0]] = map[length][word[0]] ?? {};

    traverse(map[length][word[0]], word.slice(1), length);
    return map;
  };

  const nDS = words.reduce(
    (acc, word) => traverse(acc, word.split(""), word.length),
    {}
  );
  console.log(nDS["a"]);
  writeFileSync("./output.json", JSON.stringify(nDS));
})();
