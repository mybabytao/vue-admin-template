<template>
  <div class="components-container">
    <aside>Json-Editor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>. Lint
      base on <a
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.</aside>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'
import { getPacketByPath } from "@/api/log";

//const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

export default {
  name: 'JsonEditorDemo',
  filePath: null,
  components: { JsonEditor },
  data() {
    return {
      value: null
    }
  },
   created() {
     this.filePath=this.$route.query.filePath
    this.getPacket()
  },
   methods: {
     getPacket(){
       console.log(this.filePath)
       getPacketByPath(this.filePath).then(response => {
        // console.log(response.data)
        this.jsonData=response.data.packet
        // console.log(this.jsonData);
        this.value = JSON.parse(this.jsonData);
        console.log(this.jsonData)
        console.log(this.value)
        
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
     }
   }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>

