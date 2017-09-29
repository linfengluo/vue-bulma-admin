<!--
    Created by linfengluo@gmail.com on 2017/9/28.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">editor</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Editor</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-editor v-model="content1" placeholder="static editor"
                               @imageUpload="handlerUpload"
                               :uploadConfig="updateConfig"></vb-editor>
                </vb-col>
            </vb-row>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">toolBar 工具栏</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-editor v-model="content2" :toolbarOption="toolBarConfig" placeholder="diy Toolbar"></vb-editor>
                </vb-col>
            </vb-row>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">minHeight 最小高度</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-editor v-model="content3" minHeight="200" placeholder="minHeight = 200"></vb-editor>
                </vb-col>
            </vb-row>
        </vCodePanel>

    </vb-content>
</template>

<script>
    import axios from 'axios'
    import vCodePanel from '../../components/codePanel/codePanel.vue'
//    import EXIF from '../../units/small-exif'
    export default {
        data() {
            return {
                content1: '',
                content2: '',
                content3: '',
                toolBarConfig: [
                    ['bold', 'italic', 'strike'],
                    [{
                        'header': [1, 2, 3, 4, 5, 6, false]
                    }],
                    ['blockquote'],
                    [
                        {'list': 'ordered'},
                        {'list': 'bullet'}
                    ],
                    [{ 'color': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }]
                ],
                updateConfig: {
                    useUrl: false,
                    api: 'asdfasdf',
                    maxWidth: 200
                }
            }
        },
        components: {
            vCodePanel
        },
        methods: {
            handlerUpload(file, Editor, cursorLocation, imageName){
                let formData = new FormData()
                formData.append('image', file, imageName)

                axios({
                    url: 'https://fakeapi.yoursite.com/images',
                    method: 'POST',
                    data: formData
                })
                    .then((result) => {
                        let url = result.data.url // Get url from respons
                        Editor.insertEmbed(cursorLocation, 'image', url)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
