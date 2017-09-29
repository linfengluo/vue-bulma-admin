<!--
    clone from https://github.com/davidroyer/vue2-editor
    author: davidroyer

    edit by linfengluo@gmail.com on 2017/9/28.
-->
<template>
    <div class="quillWrapper">
        <div ref="quillContainer" :id="id"></div>
        <input @change="emitImageInfo($event)"
               ref="fileInput"
               accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
               id="file-upload"
               type="file"
               style="display:none;">
    </div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import EXIF from '../../../units/small-exif'

    const defaultToolbar = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block', 'image'],
        [
            {'list': 'ordered'},
            {'list': 'bullet'}
        ],
        [
            {'indent': '-1'},
            {'indent': '+1'}
        ],
        [
            {'header': [1, 2, 3, 4, 5, 6, false]}
        ],
        [
            {'color': []},
            {'background': []}
        ],
        [
            {'font': []}
        ],
        [
            {'align': []}
        ],
        ['clean']
    ]

    const uploadConfig = {
        useUrl: false,
        maxSize: 10,
        maxWidth: 1920,
        maxHeight: 1080,
        encoder: 0.7,
        uploadType: 'base64'
    }

    function GenNonDuplicateID(randomLength){
        return Number(Math.random().toString().substr(3, randomLength) + Date.now()).toString(36)
    }

    export default {
        name: 'vb-editor',
        componentName: 'vb-editor',
        props: {
            value: String,
            id: {
                type: String,
                default: GenNonDuplicateID(2)
            },
            placeholder: String,
            disabled: Boolean,
            toolbarOption: Array,
            minHeight: {
                type: [String, Number],
                default: 100
            },
            uploadConfig: Object
        },

        data() {
            let uploadConfigs = Object.assign({}, uploadConfig, this.uploadConfig)
            return {
                quill: null,
                editor: null,
                toolbar: this.toolbarOption ? this.toolbarOption : defaultToolbar,
                uploadConfigs: uploadConfigs
            }
        },
        mounted() {
            this.initializeVue2Editor()
            this.handleUpdatedEditor()
        },

        watch: {
            value (val) {
                if (val !== this.editor.innerHTML && !this.quill.hasFocus()) {
                    this.editor.innerHTML = val
                }
            },
            disabled(status) {
                this.quill.enable(!status)
            }
        },

        methods: {
            initializeVue2Editor() {
                this.setQuillElement()
                this.setEditorElement()
                this.checkForInitialContent()
            },

            setQuillElement() {
                this.quill = new Quill(this.$refs.quillContainer, {
                    modules: {
                        toolbar: this.toolbar
                    },
                    placeholder: this.placeholder ? this.placeholder : '',
                    theme: 'snow',
                    readOnly: this.disabled ? this.disabled : false
                })
                this.setupCustomImageHandler()
            },

            setEditorElement() {
                this.editor = this.quill.root
                this.editor.style.minHeight = this.minHeight + 'px'
            },

            checkForInitialContent() {
                this.editor.innerHTML = this.value || ''
            },

            setupCustomImageHandler() {
                let toolbar = this.quill.getModule('toolbar')
                toolbar.addHandler('image', this.customImageHandler)
            },

            handleUpdatedEditor() {
                this.quill.on('text-change', () => {
                    this.$emit('input', this.editor.innerHTML)
                })
            },

            customImageHandler(image, callback) {
                this.$refs.fileInput.click()
            },

            convertBase64UrlToBlob(urlData, type) {
                let bytes = window.atob(urlData.split(',')[1])

                var image = new ArrayBuffer(bytes.length)
                var ia = new Uint8Array(image)
                for (let i = 0; i < bytes.length; i++){
                    ia[i] = bytes.charCodeAt(i)
                }

                return new Blob([image], {
                    type: type
                })
            },

            emitImageInfo($event) {
                let fileData = $event.target.files[0]

                let size = fileData.size
                let maxImageSize = this.uploadConfigs.maxSize * 1024 * 1024
                let Orientation = null
                let imageType = fileData.type
                let imageName = fileData.name
                let _this = this

                if (size > maxImageSize) {
                    this.$emit('imageUploadError', size)
                    return false
                }

                let Editor = this.quill
                let range = Editor.getSelection()
                let cursorLocation = range.index

                if (_this.uploadConfigs.uploadType === 'file') {
                    _this.$emit('imageUpload', fileData, Editor, cursorLocation, imageName)
                } else {
                    let reader = new window.FileReader()
                    let image = new Image()

                    EXIF.getData(fileData, function () {
                        Orientation = EXIF.getTag(this, 'Orientation')
                    })
                    reader.readAsDataURL(fileData)
                    reader.onload = function (ev) {
                        image.src = ev.target.result
                        image.onload = function () {
                            let imgWidth = this.width
                            let imgHeight = this.height

                            if (_this.uploadConfigs.maxWidth && imgWidth > _this.uploadConfigs.maxWidth) {
                                imgWidth = _this.uploadConfigs.maxWidth
                                imgHeight = Math.ceil(_this.uploadConfigs.maxWidth * this.height / this.width)
                            }

                            if (_this.uploadConfigs.maxHeight && imgHeight > _this.uploadConfigs.maxHeight) {
                                imgWidth = Math.ceil(_this.uploadConfigs.maxHeight * this.width / this.height)
                                imgHeight = _this.uploadConfigs.maxHeight
                            }

                            let canvas = document.createElement('canvas')
                            let ctx = canvas.getContext('2d')

                            canvas.width = imgWidth
                            canvas.height = imgHeight

                            if (Orientation && Orientation !== 1) {
                                switch (Orientation) {
                                case 6:
                                    canvas.width = imgHeight
                                    canvas.height = imgWidth
                                    ctx.rotate(Math.PI / 2)
                                    ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight)
                                    break
                                case 3:
                                    ctx.rotate(Math.PI)
                                    ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight)
                                    break
                                case 8:
                                    canvas.width = imgHeight
                                    canvas.height = imgWidth
                                    ctx.rotate(3 * Math.PI / 2)
                                    ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight)
                                    break
                                }
                            } else {
                                ctx.drawImage(this, 0, 0, imgWidth, imgHeight)
                            }

                            let imageSrc = canvas.toDataURL(imageType, _this.uploadConfigs.encoder)

                            if (!_this.uploadConfigs.useUrl) {
                                Editor.insertEmbed(cursorLocation, 'image', imageSrc)
                            } else {
                                _this.$emit('imageUpload', imageSrc, Editor, cursorLocation, imageName)
                            }
                        }
                    }
                }
            }
        }
    }
</script>
