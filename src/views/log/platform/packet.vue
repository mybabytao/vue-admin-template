<template>
            <el-button type="text" @click="open">查看报文</el-button>
            
            <!--<pre v-highlightjs=this.xmlPacket>
                <code class="highlight_s"> </code>
            </pre>-->
</template>

import vkbeautify from 'vkbeautify'
<script>
export default {
   data() {
    return {
        packet: '<?xml version="1.0" encoding="utf-8"?><document><signature>%s</signature><request></request></document>',
        xmlPacket: null,
        }
    },
    created() {
    this.xmlPacket=vkbeautify.xml(this.packet)
     
  },
    
}
</script>

<style>

</style>