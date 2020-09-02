export default {
  title: 'UI Components/Buttons/Text no MDX',
  argTypes: {
    children: { control: 'text' },
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

const Template = (args) => {
  const btn = `
    <button
      type="button"
      class="button button--text button--${args.buttonType} button--${args.buttonSize}"
      ${args.disabled === true ? 'disabled' : ''}
    >
      ${args.children}
    </button>
  `;
  return btn;
};

export const TextButtonNoMDX = Template.bind({});
TextButtonNoMDX.args = {
  children: 'Text button',
};
