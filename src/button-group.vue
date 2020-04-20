<template>
    <div class="b-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted() {
            for (const node of this.$el.children) {
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn('b-button-group 的子元素只能是 b-button')
                }
            }
        }
    }
</script>

<style lang="scss">
    .b-button-group {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        > .b-button {
            border-radius: 0;

            & + .b-button {
                margin-left: -1px;
            }

            &:first-of-type {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-of-type {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }


        }
    }
</style>
