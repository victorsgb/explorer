module.exports = function Helpers() {

  // Helper function to check if all elements in array are unique
  function hasDuplicates(array) {

    if (array === undefined) {
      return false;
    }

    return (new Set(array)).size !== array.length;
  }

  return {
    hasDuplicates
  }
}