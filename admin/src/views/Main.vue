<template>
    <el-container>
        <el-aside width="200px">
            <el-menu mode="vertical"  style="height:100vh;" :default-active="$route.path" router>
                <el-submenu 
                    v-for="(item, index) in menu.items"
                    :index="`menu-item-${index}`"
                    :key="`menu-item-${index}`">

                    <template slot="title">{{item.title}}</template>
                    <el-menu-item  
                        v-for="(subitem, subIndex) in item.items"
                        :key="`menu-item-${index}-${subIndex}`"
                        :index="(subitem.path)">
                        {{subitem.title}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
            
        </el-aside>
        <el-container>
            <el-header>
                <h3>全棧之巔 - 後台管理介面</h3>
            </el-header>
            <el-main>
                <router-view :key="$router.path"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { Vue , Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
    menu = {
        items: [
            { 
                title:'內容管理',
                items: [
                    { title: '首頁', path: '/'},
                    { title: '課程管理', path: '/courses/list'},
                    { title: '課時管理', path: '/episodes/list'}
                ]
            },
            { 
                title:'營運管理',
                items: [
                    { title: '用戶管理', path: '/users/list'}
                ]
            }
        ]
    }
}
</script>

<style lang="">
    
</style>