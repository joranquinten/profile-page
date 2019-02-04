const meta = {
  title: 'metaTitle',
  description: 'metaDescription',
  'google-site-verification': 'metaGoogleSiteVerification',
};

const about = {
  title: 'aboutTitle',
  subtitle: 'aboutSubtitle',
  tags: ['tagOne', 'tagTwo'],
  picture: '../static/pictures/picture.jpg',
  bio: '<p>aboutBio</p>',
  quote: 'aboutQuote',
};

const projects = [
  {
    title: 'Project one',
    description: '<p>Project one description</p>',
  },
  {
    title: 'Project two',
    description: '<p>Project two description</p>',
  },
];

const experience = [
  {
    name: 'Employer one',
    van: '2018-01-01',
    tot: null,
    description: '<p>Employer one description</p>',
  },
  {
    name: 'Employer two',
    van: '2017-01-01',
    tot: '2018-12-31',
    description: '<p>Employer two description</p>',
  },
];
const education = {
  title: 'educationTitle',
  items: [
    {
      key: '1',
      date: 'January 2018',
      description: 'educationFirstDescription',
    },
    {
      key: '2',
      date: 'February 2018',
      description: 'educationSecondDescription',
    },
  ],
};

const topics = {
  description: '<p>topicsDescription</p>',
  list: [
    { name: 'topicName1', type: 'frameworks' },
    { name: 'topicName2', type: 'frameworks' },
    { name: 'topicName3', type: 'languages' },
    { name: 'topicName4', level: 'good', type: 'methodologies' },
    { name: 'topicName5', level: 'good', type: 'other' },
    { name: 'topicName6', level: 'normal', type: 'concepts' },
    { name: 'topicName7', level: 'average', type: 'platforms' },
  ],
};

const media = {
  description: '<p>mediaDescription</p>',
  list: [
    { name: 'mediaName1', type: 'podcast' },
    { name: 'mediaName2', type: 'podcast' },
    { name: 'mediaName3', type: 'newsletter' },
    { name: 'mediaName4', type: 'website' },
  ],
};

const footer = {
  description: '<span>footerDescription</span>',
};

const contact = {
  fullName: 'contactFullName',
  personalUrl: 'contactPersonalUrl',
  organisation: 'contactOrganisation',
  organisationUrl: 'contactOrganisationUrl',
  email: 'contactEmail',
  phone: 'contactPhone',
  address: {
    street: 'contactStreet',
    zipcode: 'contactZipcode',
    city: 'contactCity',
  },
};

export { meta, about, projects, experience, education, topics, media, footer, contact };
