const binary = (arr, element) => {
  let sorted = arr.sort((a, b) => a - b)
  let min = 0
  let max = sorted.length - 1
  while (min <= max) {
    let mid = parseInt(min + (max - min) / 2)
    if (sorted[mid] == element) {
      return mid
    }
    if (sorted[mid] > element) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }
}

var arr = [22, 11, 44, 33, 55, 77, 66, 88, 99]
console.log(binary(arr, 11))
