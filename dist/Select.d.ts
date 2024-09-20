import { Option } from './types';
declare const _default: <GenericOption extends Option<OptionValue>, OptionValue = string>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_Prettify<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<Pick<Partial<{}> & Omit<{
        onSearch?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((modelValue: OptionValue | OptionValue[]) => any) | undefined;
        onOptionSelected?: ((option: GenericOption) => any) | undefined;
        onOptionDeselected?: ((option: GenericOption | null) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{}>> & {
        onSearch?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((modelValue: OptionValue | OptionValue[]) => any) | undefined;
        onOptionSelected?: ((option: GenericOption) => any) | undefined;
        onOptionDeselected?: ((option: GenericOption | null) => any) | undefined;
    }, never>, "onSearch" | "onUpdate:modelValue" | "onOptionSelected" | "onOptionDeselected"> & ({
        modelValue: OptionValue | OptionValue[];
    } & {
        options: GenericOption[];
        /**
         * When passed to the component, only these specific options will be rendered
         * on the list of options.
         */
        displayedOptions?: GenericOption[];
        /**
         * The placeholder text to display when no option is selected.
         */
        placeholder?: string;
        /**
         * When set to true, the input can be cleared by clicking the clear button.
         */
        isClearable?: boolean;
        /**
         * When set to true, disable the select component.
         */
        isDisabled?: boolean;
        /**
         * When set to true, allow the user to filter the options by typing in the search input.
         */
        isSearchable?: boolean;
        /**
         * When set to true, allow the user to select multiple options. This will change the
         * `selected` model to an array of strings. You should pass an array of strings to the
         * `v-model` directive when using this prop.
         */
        isMulti?: boolean;
        /**
         * When set to true, clear the search input when an option is selected.
         */
        closeOnSelect?: boolean;
        /**
         * Teleport the menu to another part of the DOM with higher priority such as `body`.
         * This way, you can avoid z-index issues. Menu position will be calculated using
         * JavaScript, instead of using CSS absolute & relative positioning.
         */
        teleport?: string;
        /**
         * The ID of the input element. This is useful for accessibility or forms.
         */
        inputId?: string;
        /**
         * ARIA attributes to describe the select component. This is useful for accessibility.
         */
        aria?: {
            labelledby?: string;
            required?: boolean;
        };
        /**
         * Callback to filter the options based on the search input. By default, it filters
         * the options based on the `label` property of the option. The label is retrieved using:
         *
         * - `getOptionLabel` when `isMulti` is `false`.
         * - `getMultiValueLabel` when `isMulti` is `true`.
         *
         * @param option The option to filter.
         * @param label The label of the option.
         * @param search The search input value.
         */
        filterBy?: (option: GenericOption, label: string, search: string) => boolean;
        /**
         * A function to get the label of an option. By default, it assumes the option is an
         * object with a `label` property. Used to display the selected option in the input &
         * inside the options menu.
         *
         * @param option The option to render.
         */
        getOptionLabel?: (option: GenericOption) => string;
        /**
         * A function to get the label of a multi-value option. By default, it assumes the
         * option is an object with a `label` property. Used only in the multi-value tag.
         *
         * @param option The option to render.
         */
        getMultiValueLabel?: (option: GenericOption) => string;
    })> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => {
        value?(_: {
            option: GenericOption;
        }): any;
        clear?(_: {}): any;
        dropdown?(_: {}): any;
        "menu-header"?(_: {}): any;
        option?(_: {
            option: GenericOption;
        }): any;
        "no-options"?(_: {}): any;
    }>;
    emit: {
        (e: "optionSelected", option: GenericOption): void;
        (e: "optionDeselected", option: GenericOption | null): void;
        (e: "search", value: string): void;
    } & ((evt: "update:modelValue", modelValue: OptionValue | OptionValue[]) => void);
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;

type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
