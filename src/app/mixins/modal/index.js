//ref https://github.com/Coffcer/vue-bootstrap-modal/blob/master/src/modal.vue
require("./style.css");
var template = require("./template.html");
var vm = module.exports = {
  template: template,
  props: {
    show: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    title: {
      type: String,
      default: 'Modal'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    force: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'modal'
    },
    okText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    okClass: {
      type: String,
      default: 'btn blue'
    },
    cancelClass: {
      type: String,
      default: 'btn red btn-outline'
    }
  },
  data: function () {
    return {
      duration: null
    };
  },
  computed: {
    modalClass: function () {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small,
        'modal-full': this.full
      }
    }
  },
  created: function () {
    if (this.show) {
      document.body.className += ' modal-open';
    }
  },
  beforeDestroy: function () {
    document.body.className = document.body.className.replace(/\s?modal-open/, '');
  },
  watch: {
    show: function (value) {
      if (value) {
        document.body.className += ' modal-open';
      } else {
        if (!this.duration) {
          this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
        }
        window.setTimeout(function () {
          document.body.className = document.body.className.replace(/\s?modal-open/, '');
        }, this.duration || 0);
      }
    }
  },
  methods: {
    ok: function () {
      this.$emit('ok');
    },
    cancel: function () {
      this.$emit('cancel');
    },
    clickMask: function () {
      if (!this.force) {
        this.cancel();
      }
    }
  }
};

