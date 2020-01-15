<template>
  <div>
      <h1>{{ isNew ?"創建":"編輯"}}課程</h1>      
      <ele-form 
        :form-data="data"
        :form-desc="fields"
        :request-fn="submit">
      </ele-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CourseEdit extends Vue {
    @Prop(String) id!:string

    data = {};

    fields = {
        name : { label : '課程名稱', type:'input'},
        cover : { label : '課程封面圖', type:'input'},
    }

    //把方法當屬性使用 ES6
    get isNew() {
        return !this.id;
    }

    async fetch(){
        const res = await this.$http.get(`courses/${this.id}`);
        this.data = res.data;
    }
    async submit(data) {
        const url = this.isNew ? `courses` : `courses/${this.id}`
        const method = this.isNew ? 'post' : 'put'
        await this.$http[method](url, data)
        this.$message.success('保存成功')
        this.data = {}
        this.$router.go(-1)
    }
    //初始化
    created() {
         !this.isNew && this.fetch();
    }
}
</script>

<style>

</style>