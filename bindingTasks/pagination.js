const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const pagination = {
  newArr: [],
  currentPage: 0,
  init(arr, num) {
    let help = [];
    let count = 0;
    arr.forEach((el) => {
      if (count === num) {
        this.newArr = [...this.newArr, help];
        help = [];
        count = 0;
        help = [...help, el];
        count++;
      } else {
        help = [...help, el];
        count++;
      }
    });
    if (help.length) this.newArr = [...this.newArr, help];
  },
  getPageItems() {
    return this.newArr[this.currentPage];
  },
  firstPage() {
    this.currentPage = 0;
  },
  nextPage() {
    this.currentPage++;
    return this;
  },
  prevPage() {
    this.currentPage--;
  },
  lastPage() {
    this.currentPage = this.newArr.length - 1;
  },
  goToPage(num) {
    this.currentPage = num;
  },
};
pagination.init(alphabet, 4);
pagination.goToPage(2);
pagination.prevPage();
//pagination.getPageItems()

console.log(pagination.currentPage);
