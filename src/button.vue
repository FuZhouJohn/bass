<template>
    <button class="b-button">
        <slot></slot>
    </button>
</template>
<scritp>
    export default { }
</scritp>

<style lang="scss">
    .b-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }
</style>
