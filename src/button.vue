<template>
    <button class="b-button" :class="{[`icon-${iconPosition} `]:true}" @click="$emit('click')">
        <b-icon v-if="loading" name="loading" class="loading icon"></b-icon>
        <b-icon v-if="icon && !loading" :name="icon" class="icon"></b-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        // props: ["icon", "iconPosition"]
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .b-button {
        height: var(--button-height);
        padding: 0 1.1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .23em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .23em;
            }

            > .content {
                order: 1;
            }
        }

        .loading {
            /*order: 1;*/
            /*margin-right: .23em;*/
            animation: spin 1.5s infinite linear;
        }
    }
</style>
