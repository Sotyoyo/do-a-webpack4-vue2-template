<template>
  <div>
    <header>
      <label for="input">请输入要做的内容：</label>
      <input type="text" id="input" v-model="content" @keyup.13="addContent(content)">
      <!-- 当键盘敲入回车(keycode = 13)的时候 触发 addContent -->
    </header>
    <section>
      <h2>正在进行</h2>
      <ol>
        <li v-for="(item, index) in doing" :key="index">
          <input type="radio" />
          <p>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section>
      <h2>已经完成</h2>
      <ol>
        <li v-for="(item, index) in did" :key="index" >
          <input type="radio" />
          <p>{{item.content}}</p>
        </li>
      </ol>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      content: ""
    }
  },
  computed: {
    // ...mapGetters(['doing', 'did'])  // 奇怪的报错了？ todo fix
    doing() {
      return this.$store.getters.doing;
    },
    did() {
      return this.$store.getters.did;
    },
    doingCheck: {
      get (idx, state) { return state},
      set (idx, state) { this.$store.commit('updateChecking', 'doing', idx, state) }
    },
    didCheck: {
      get (idx, state) { return state},
      set (idx, state) { this.$store.commit('updateChecking', 'did', idx, state) }
    }
  },
  methods: {
    // checkDoing (item, idx) {
    //   this.$store.dispatch("select_doing", idx)
    // },
    checkDid (item, idx) {
      this.$store.dispatch("select_did", idx)
    },
    addContent (content) {
      this.content = "";
      let obj = {};
      obj.content = content;
      obj.state =  false;
      this.$store.dispatch("add_doing", obj)
    }
  }
}
</script>
<style>
p, input {
  display: inline-block;
}

section, header {
  width: 50%;
  /* margin: 0 auto; */
}

ol {
  list-style: none;
}
ol li {
  border-style: solid;
  border-width: 1px 1px 1px 5px;
  border-color: #DEDEDE;
  border-left-color: #42b983;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
