<template>
  <div>
      <h1>課程列表</h1>
      <el-table :data="data.data" border stripe>
          <el-table-column v-for="(field, name) in fields"
              :prop="name"
              :key="name"
              :label="field.label"
              :width="field.width">
          </el-table-column>
      </el-table>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CourseList extends Vue {
    data = {};

    fields = {
        _id : { label : 'ID'},
        name : { label : '課程名稱'},
        cover : { label : '課程封面圖'},
    }

    async fetch(){
        const res = await this.$http.get('courses')
        this.data = res.data
    }
    //初始化
    created() {
        this.fetch()
    }
}
</script>

<style>

</style>