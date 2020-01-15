<template>
  <div>
      <h3>課程列表</h3>
      <div>
        <el-button type="success" size="small" 
        @click="$router.push('/courses/create')">創建課程</el-button>
      </div>
      <el-table :data="data.data" border stripe>
          <el-table-column v-for="(field, name) in fields"
              :prop="name"
              :key="name"
              :label="field.label"
              :width="field.width">
          </el-table-column>
          <el-table-column label="操作" :width="200">
            <template v-slot="{row}">
                <el-button type="success" size="small" @click="$router.push(`/courses/edit/${row._id}`)">編輯</el-button>
                <el-button type="danger" size="small" @click="remove(row)">刪除</el-button>
            </template>
          </el-table-column>
      </el-table>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
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

     async remove(row){
        try {
            await this.$confirm('是否確認刪除？')
        } catch(e) {
            return
        }
        await this.$http.delete(`courses/${row._id}`)
        this.$message.success('刪除成功')
        this.fetch()
    }

    //初始化
    created() {
        this.fetch()
    }
}
</script>

<style>

</style>