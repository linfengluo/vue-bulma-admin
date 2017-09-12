<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->

<script>
    export default {
        props: {
            level: {
                type: [Number, String],
                default: 1
            },
            isSubtitle: {
                type: Boolean,
                default: false
            },

            isMargin: {
                type: Boolean,
                default: false
            }
        },
        render: function (h) {
            return h(
                `h${this.level}`,
                {
                    attrs: {
                        class: `title is-${this.level} ${this.isSubtitle ? 'subtitle' : ''} ${this.isMargin ? 'is-margin' : ''}`
                    }

                }, this.$slots.default
            )
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../sass/variables/variables";
    .vb-header{
        .title{
            height: $header-height;
            line-height: $header-height;
        }
    }

    .is-margin{
        margin: $space * 4 0 $space * 2;
    }
</style>

