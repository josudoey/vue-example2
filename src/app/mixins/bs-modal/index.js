//ref https://github.com/Coffcer/vue-bootstrap-modal/blob/master/src/modal.vue
require("./style.css");
var $ = require("jquery");
var template = require("./template.html");
var vm = module.exports = {
  template: template,
  props: {
    title: {
      type: String,
      default: 'Modal'
    }
  },
  data: function () {
    return {};
  },
  computed: {},
  mounted: function () {
    //ref http://getbootstrap.com/javascript/#modals-events
    var self = this;
    var $el = $(self.$el);
    ['show', 'shown', 'hide', 'hidden', 'loaded'].forEach(function (eName) {
      $el.on(eName + '.bs.modal', self.$emit.bind(self, 'event', eName));
      $el.on(eName + '.bs.modal', self.$emit.bind(self, eName));
    })
  },
  beforeDestroy: function () {},
  watch: {},
  methods: {
    ok: function (e) {
      if (this.$refs.modalForm.checkValidity() === false) {
        return;
      }
      e.$el = this.$el;
      this.$emit('event', 'ok', e);
      this.$emit('ok', e);
    }
  }
};

