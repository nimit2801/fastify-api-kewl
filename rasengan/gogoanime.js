const { GoGoAnime } = require('gogoanime-api');
const fs = require('fs');
const gogoAnime = new GoGoAnime();
const new1 = async () => {
  // let genres = await gogoAnime.animeEpisodeInfo(
  //   'boruto-naruto-next-generations'
  // );
  try {
    // recent = await gogoAnime.recentRelease();
    // let recent;
    // let search = await gogoAnime.search('boruto');
    // recent = await gogoAnime.popularOnGoingSeries();
    // let data = recent.data;
    let boruto = await gogoAnime.animeInfo('boruto-naruto-next-generations');
    console.log(boruto);
    fs.writeFile('recent.json', JSON.stringify(await boruto), (err) => {
      if (err) throw err;

      console.log('Done writing'); // Success
    });
  } catch (error) {
    console.log(error);
  }
};

new1();
