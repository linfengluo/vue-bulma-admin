<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <slot></slot>
    </nav>
</template>

<script>
    export default {
        name: 'vb-breadcrumbGroup',
        componentName: 'vb-breadcrumbGroup',
        props: {
            separator: {
                type: String,
                default: '/'
            }
        }
    }
</script>
