import docs from './Button.mdx';

export default {
  title: 'UI Components/Buttons/Text',
  parameters: {
    docs: {
      page: docs,
    }
  },
  argTypes: {
    label: { control: 'text' },
    buttonType: { control: {
      type: 'select',
      options: ['primary', 'secondary'],
    }},
    buttonSize: { control: {
      type: 'select',
      options: ['small'],
    }},
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => `
  <button
    type="button"
    class="button button--text button--${args.buttonType} button--${args.buttonSize}"
    ${args.disabled === true ? 'disabled' : ''}
  >
    ${args.label}
  </button>
`;

export const TextButton = Template.bind({});
TextButton.args = {
  label: 'Text button',
};
