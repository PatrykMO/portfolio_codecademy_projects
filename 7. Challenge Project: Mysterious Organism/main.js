// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Returns an object that contains the properties specimenNum and dna that correspond to the parameters provided
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      // .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
      mutate() {
        const randomNumb = Math.floor(Math.random() * this.dna.length);
        const oldBase = this.dna[randomNumb];
        let newBase = returnRandBase();
  
        while (oldBase === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randomNumb] = newBase;
        return this.dna;
      },
      // The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations.
      compareDNA(pAequor) {
        const commonBases = this.dna.reduce( (counter, currentValue, currentIndex, array) => {
          if(array[currentIndex] === pAequor.dna[currentIndex]) {
            return counter ++;
          } else {
            return counter;
          }
        }, 0);
        const percentOfDNAshared = (commonBases / this.dna.length) * 100;
        const percentageTo2Decimal = percentOfDNAshared.toFixed(2);
        console.log(`${this.specimanNum} and ${pAequor.specimanNum} have ${percentageTo2Decimal}% DNA in common.`);
      },
      // .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
      willLikelySurvive() {
        const surviverBases = this.dna.filter(element => element === "C" || element === "G");
        return surviverBases.length / this.dna.length >= 0.6;
      }
    };
  };
  
  // With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment.
  let survivingSpecies = [];
  let id = 1;
  
  while (survivingSpecies.length < 30) {
    let newOrganism = pAequorFactory(id, mockUpStrand());
    if (newOrganism.willLikelySurvive) {
      survivingSpecies.push(newOrganism);
    }
    id++;
  };
  
  console.log(survivingSpecies);