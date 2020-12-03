const fileInput = document.getElementById("inputfile")

fileInput.addEventListener("change", () => {
  const reader = new FileReader()

  reader.onload = () => {
    const fileContent = reader.result
    const allLines = fileContent.split(/\r\n|\n/)

    const treesCount = []

    treesCount.push(getTreesCount(1, 1, allLines))
    treesCount.push(getTreesCount(3, 1, allLines))
    treesCount.push(getTreesCount(5, 1, allLines))
    treesCount.push(getTreesCount(7, 1, allLines))
    treesCount.push(getTreesCount(1, 2, allLines))

    let result = 1

    treesCount.forEach(count => result *= count)

    console.log("result", result)
  }

  reader.readAsText(fileInput.files[0])
})

const getTreesCount = (right, down, allLines) => {
  let count = 0
  let index = 0
  let loop = down
  allLines.forEach(line => {
    if(loop % down === 0){
      index %= 31

      if(line[index] === '#'){
        count++
      }

      index += right
    }
    loop++
  })

  return count
}
