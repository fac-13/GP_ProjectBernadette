/* 
This is the content for the Wayfinder questions and answer options.

The user's responses are logged via the options.goto value in Wayfinder.state.usersPath. 

Every options.goto value must be UNIQUE. When ammending the data, please keep this in mind. The wayfinderData.test will throw an error if there are any resulting errors. 

Every unique result ending in a FORM component must have a unique 'complete-form' goto.value (ie 'complete-form2', 'complete-form3' etc.)

Stubs with no further questions are marked as 'leaf' (In the flow chart tree, a leaf is a stub that has no possible further branches.)
*/

const alertMsg = 'onclick="alert(\'This link will now open in a new tab\')"';
const formMsg =
  'If you require further advice and support, please complete the form below and we will contact you within 3 working days.';

const wayfinder = {
  start: {
    question: 'Are you a grandparent?',
    options: [
      { answer: 'yes', goto: 'live-with' },
      { answer: 'no', goto: 'close-fam' }
    ]
  },
  'live-with': {
    question: 'Does a grandchild live with you?',
    options: [
      { answer: 'yes', goto: 'kc-rights' },
      { answer: 'no', goto: 'lost-contact' }
    ]
  },
  'kc-rights': {
    question:
      'Based on your answers, it looks like you might be a kinship carer. \n Do you need help understanding your rights as a kinship carer?',
    options: [
      { answer: 'yes', goto: 'need-advice' },
      { answer: 'no', goto: 'info-kc' }
    ]
  },
  'need-advice': {
    question:
      'If you need advice, our team can help. Please answer a few questions to help us understand your situation and get in touch with you.',
    options: [{ answer: 'continue', goto: 'legal-order' }]
  },
  'close-fam': {
    question:
      "Are you a close family member or friend who is looking after someone else's child?",
    options: [
      { answer: 'yes', goto: 'kc-rights' },
      { answer: 'no', goto: 'info-gen' }
    ]
  },
  'lost-contact': {
    question: 'Have you lost contact with your grandchild?',
    options: [
      { answer: 'yes', goto: 'info-lost-contact' },
      { answer: 'no', goto: 'info-gen' }
    ]
  },
  'info-gen': {
    result: `More information about <a href="https://www.grandparentsplus.org.uk/pages/faqs/category/advice-and-information#" target="_blank" ${alertMsg}>our services</a>`,
    leaf: true
  },
  'info-lost-contact': {
    result: `More information about <a href="https://www.grandparentsplus.org.uk/what-you-can-do" target="_blank" ${alertMsg}>lost or denied contact</a>`,
    leaf: true
  },
  'info-kc': {
    result: `More information about being a <a href="https://www.grandparentsplus.org.uk/pages/faqs/category/new-kinship-carer" target="_blank" ${alertMsg}>Kinship Carer here.</a>`,
    leaf: true
  },
  'legal-order': {
    question: 'Do you already have a legal order?',
    options: [
      { answer: 'yes', goto: 'order-type' },
      { answer: 'no/not sure', goto: 'social-services' }
    ]
  },
  'order-type': {
    question: 'Do you know which type of legal order you have?',
    options: [
      { answer: 'yes', goto: 'select-type' },
      { answer: 'no/not sure', goto: 'complete-form' }
    ]
  },

  'select-type': {
    question: 'Please select the type of legal order below',
    options: [
      { answer: 'Special Guardianship Order (SGO)', goto: 'order-link-sgo' },
      { answer: 'Child Arrangement Order (CAO)', goto: 'order-link-cao' }
    ]
  },

  'order-link-sgo': {
    question: `More information about <a href="https://www.grandparentsplus.org.uk/local-authority-allowances" target="_blank" ${alertMsg}>legal orders</a>.`,
    options: [{ answer: 'continue', goto: 'complete-form-1' }]
  },
  'order-link-cao': {
    question: `More information about <a href="https://www.grandparentsplus.org.uk/local-authority-allowances" target="_blank" ${alertMsg}>legal orders</a>.`,
    options: [{ answer: 'continue', goto: 'complete-form-1' }]
  },

  'social-services': {
    question: 'Did Social Services ask you to provide care for the child?',
    options: [
      { answer: 'yes', goto: 'foster-carer' },
      { answer: 'no', goto: 'informal-arrangement' }
    ]
  },
  'foster-carer': {
    question: 'Are you a kinship foster carer?',
    options: [
      { answer: 'yes', goto: 'complete-form-2' },
      { answer: 'no/not sure', goto: 'complete-form-2' }
    ]
  },
  'informal-arrangement': {
    question: 'Did you make an informal arrangement to look after the child?',
    options: [
      { answer: 'yes', goto: 'arrangement-link' },
      { answer: 'no/not sure', goto: 'complete-form-3' }
    ]
  },
  'arrangement-link': {
    question: `More information about <a href="https://www.grandparentsplus.org.uk/informal-arrangements" target="_blank"  ${alertMsg}>informal arrangements</a>.`,
    options: [{ answer: 'continue', goto: 'complete-form-4' }]
  },

  'complete-form': {
    result: `${formMsg}`,
    leaf: true
  },
  'complete-form-1': {
    result: `${formMsg}`,
    leaf: true
  },
  'complete-form-2': {
    result: `${formMsg}`,
    leaf: true
  },
  'complete-form-3': {
    result: `${formMsg}`,
    leaf: true
  },
  'complete-form-4': {
    result: `${formMsg}`,
    leaf: true
  }
};

export default wayfinder;
