import { action } from '@storybook/addon-actions';

export default {
  title: 'UI Components/Buttons & Links/Buttons',
  argTypes: {
    children: { control: 'text' },
    buttonType: { control: {
      type: 'select',
      options: ['Default', 'Primary', 'Secondary'],
    }},
    buttonSize: { control: {
      type: 'check',
      options: ['Small'],
    }},
    disabled: { control: 'boolean' },
    onClick: action('onClick'),
  },
};

const Template = (args) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('gw-button');
  btn.classList.add('gw-button--text');
  btn.innerText = args.children;
  btn.disabled = args.disabled === true ? 'disabled' : '';
  if (args.buttonType) {
    if (args.buttonType !== 'default') {
      btn.classList.add(`gw-button--${args.buttonType.toLowerCase()}`);
      btn.innerText = `${args.buttonType} button`;
    }
  }
  if (args.buttonSize && args.buttonSize.length > 0) {
    btn.classList.add(`gw-button--${args.buttonSize.toString().toLowerCase()}`);
  }
  btn.addEventListener('click', args.onClick);
  return btn;
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text button',
};
