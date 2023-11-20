const heros = ["ironman", "thor"];

const herosPower = {
  ironman: 0,
  thor: 1,

  getPower: function () {
    return `${this.thor}`;
  },
};

Object.prototype.name = function () {
  return `Bhopender jogi`;
};

console.log(herosPower.name());

console.log(heros.name());
