const fileInput = document.getElementById("inputfile")
let valid = 0

fileInput.addEventListener("change", () => {
  const reader = new FileReader()

  reader.onload = () => {
    const fileContent = reader.result
    const allLines = fileContent.split(/\r\n|\n/)

    allLines.forEach(line => {
      let pos1 = 0;
      let pos2 = 0;
      let letter = ''
      let pw = ''

      pos1 = parseInt(line.match(/\d+/))

      const dashedNum = line.match(/\-\d+/)
      pos2 = parseInt(dashedNum) * -1

      letter = line.match(/[a-z]/i)[0]

      pw = line.match(/[^:]*$/)[0]
      pw = pw.replace(" ", "")


      let matches = 2

      for(let i = 0; i < pw.length; i++){
        if(pw[i] === letter){
          if(i+1 === pos1 || i+1 === pos2){
            matches--
            console.log("Match!");
          }
        }
      }

      if(matches === 1){
        valid++
      }
      
      console.log(line);


    })
    console.log("valid", valid);
  }
  reader.readAsText(fileInput.files[0])
})
