export default {
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    removeRectangle(item) {
      item.count >= 0 ? item.count-- : 0;
    },
    addList() {
      this.lists.push({
        name: "List " + (this.lists.length + 1),
        isOpen: false,
        isVisible: false,
        items: this.addItems(),
      });
    },
    addItems() {
      let items = [];
      const count = this.calculateRandomNumber();
      for (let i = 0; i <= count; i++) {
        items.push(this.addItem(i));
      }
      return items;
    },
    addItem(itemCount = 0) {
      let _color = ((Math.random() * 0xffffff) << 0).toString(16);
      _color.length < 6
        ? (_color += ((Math.random() * 0xf) << 0).toString(16))
        : _color;
      return {
        name: "item " + (itemCount + 1),
        count: this.calculateRandomNumber(),
        color: "#" + _color,
        isVisible: false,
      };
    },
    calculateRandomNumber() {
      return Math.floor(Math.random() * (10 - 3)) + 3;
    },
  },
  created: function () {
    for (let listCount = 0; listCount < 3; listCount++) {
      this.addList();
    }
  },
};
