// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, array) {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let position = Math.random()*(array.length-1)
      let randomBase = Math.random()*4
      if (randomBase == array[position] && randomBase > 1) {
        randomBase-=1
      } else {
        randomBase+=1
      }
      if (randomBase === 1) {
        array[position] = "A"
      } else if (randomBase === 2) {
        array[position] = "T"
      } else if (randomBase === 3) {
        array[position] = "C"
      } else {
        array[position] = "G"
      }  
      return dna
    },
    compare(object) {
      let commonBases = 0;
      for (let i = 0; i < object.length-1; i++) {
        if (this.dna[i] === object[i]) {
          commonBases += 1
        }
      }
      let percentCommon = (commonBases/(object.Length-1))*100
      return `Specimen #${this.specimenNum} and Specimen ${object.specimenNum} have ${percentCommon}% DNA in common`
    },
    willLikelySurvive() {
      let CorG = 0;
      for (let i = 0; i < dna.length-1; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          CorG += 1
        }
      }
      if (CorG >= 0.6) {
        return true
      } else {
        return false
      }
    }
  }
}



let arraypAequor = []
for(let i = 0; i < 30; i++) {
  arraypAequor[i] = mockUpStrand()
}

console.log(arraypAequor)
