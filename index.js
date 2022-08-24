
const titleCased = () => {
  return tutorials
}
  return tutorials.map(function(words){
    const arrayOfSentences= words.split(" ")
      const arrayOfCapitalizedSentences = arrayOfSentences.map(function(wording){
        return wording[0].toUpperCase()+ wording.slice(1)
      })
        const titleCasedSentence = arrayOfCapitalizedSentences.join(" ")
          return titleCasedSentence
  })
  
    titleCased();
