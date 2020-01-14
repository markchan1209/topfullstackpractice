<template>
  <div>
      <h1>{{ isNew ?"創建":"編輯"}}課程</h1>      
      <ele-form 
        :form-data="data"
        :form-desc="fields"
        :request="submit">
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
        _id : { label : 'ID'},
        name : { label : '課程名稱'},
        cover : { label : '課程封面圖'},
    }

    //把方法當屬性使用 ES6
    get isNew() {
        return !this.id;
    }

    async fetch(){
        const res = await this.$http.get('courses')
        this.data = res.data
    }
    async submit(data) {
        // global.console.log(data);
    }
    //初始化
    created() {
        this.fetch()
    }
}
</script>

<style>

</style>