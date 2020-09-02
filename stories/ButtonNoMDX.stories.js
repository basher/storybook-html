import { action } from '@storybook/addon-actions';

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
    onClick: action('onClick'),
  },
};

const Template = (args) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('button');
  btn.classList.add('button--text');
  btn.innerText = args.children;
  btn.disabled = args.disabled === true ? 'disabled' : '';
  if (args.buttonType) {
    btn.classList.add(`button--${args.buttonType}`);
  }
  if (args.buttonSize) {
    btn.classList.add(`button--${args.buttonSize}`);
  }
  btn.addEventListener('click', args.onClick);
  return btn;
};

export const TextButtonNoMDX = Template.bind({});
TextButtonNoMDX.args = {
  children: 'Text button',
};
