<!--
    Created by linfengluo@gmail.com on 2017/9/14.
-->

<script>
    export default {
        name: 'vb-buttonGroup',
        componentName: 'vb-buttonGroup',
        render: function (h) {
            return h(
                'div',
                {
                    attrs: {
                        class: 'field has-addons'
                    }
                },
                Array.apply(null, this.$slots.default.map(function (item) {
                    if (item.context) {
                        return h(
                            'p',
                            {
                                attrs: {
                                    class: 'control'
                                }
                            }, [item]
                        )
                    }
                }))
            )
        }
    }
</script>
