const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [...films] = await Promise.all([
        promiseTheaterIXX(),
        promiseTheaterVGC(),
      ]);
      const allFilmsTheaters = films.flat();
      const filteredFilms = allFilmsTheaters.filter((x) => x.hasil === type);
      resolve(filteredFilms.length || 0);
    } catch (error) {
      reject("ada kesalahan dalam pengambilan data");
    }
  });
};

module.exports = {
  promiseOutput,
};
