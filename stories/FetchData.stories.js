import { fetchData } from './fetchData.js';

export default {
  title: 'Test/Fetch Data',
};

const Template = () => `
  <h2>Fetch JSON data and build story HTML from it?</h2>
  ${
    fetchData().then(data => {
      data.map(item =>
        `<p>${item.name}</p>`
      )
    })
  }
`;

export const FetchData = Template.bind({});
