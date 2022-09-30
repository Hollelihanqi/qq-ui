const sidebar =[
    {
        text: '快速开始',
        items: [
            {
                text:'通用',
                items:[
                    {title:"Button 使用",text:'Button 按钮',link:'/components/button/index'},
                ]
            },
            {
                text:"导航"
            },
            {
                text:"反馈"
            },
            {
                text:"数据录入"
            },
            {
                text:'布局'
            }
        ]
      }
]

export default {
    lang:"en-US",
    title:"HqUI",
    description:'LHQ FIRST COMPONENT UI',
    themeConfig:{
        outlineTitle: 'CONTENTS',
        sidebar
    },
    markdown:{
        config:(md)=>{
            // 添加DemoBlock插槽
            const {demoBlockPlugin} = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin,{
                cssPreprocessor:'less'
            })
        }
    }
}