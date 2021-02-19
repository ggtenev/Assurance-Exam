 export const one = [
  {
    id: 1,
    question:
      "Which of the following is not an essential component in an assurance engagement?",
    answers: [
      {
        abb:'A',
        answer: "An assurance file",
        correct: true,
      },
      {
        abb:'B',
        answer: "A subject matter",
        correct: false,
      },
      {
        abb:'C',
        answer: "Criteria",
        correct: false,
      },
      {
        abb:'D',
        answer: "An intended user",
        correct: false,
      },
    ],
    explanation:
      " Sufficient appropriate evidence is a major component of an assurance engagement.However, even though it is mandatory to record and maintain audit evidence, an assurance fileis not an essential component of an assurance engagement.",
  },
  {
    id: 2,
    question:
      " For the following assurance engagements, select the level of assurance most appropriate.",
    answers: [
      {
        answerCondition:'Statutory audit'
      },
      {
        abb:'A',
        answer: "Absolute",
        correct: false,
      },
      {
        abb:'B',
        answer: "Reasonable",
        correct: true,
      },
      {
        answerCondition: "Cash flow forecast",
      },
      {
        abb:'C',
        answer: "Reasonable",
        correct: false,
      },
      {
        abb:'D',
        answer: "Limited",
        correct: true,
      },
    ],
    explanation:
      " Statutory audits require a reasonable level of assurance (high) but it is almost impossible to achieve absolute assurance. As a cash flow forecast is based on estimates, it is not reliable enough to provide reasonable assurance.",
  },
  {
    id: 3,
    question:
      " Cresswell Ltd is a fashion retailer and has an annual turnover of £14.9 million, total assets of £9.75 million and only 10 employees. Under the Companies Act 2006, are Creswell Ltd required to have an audit in the UK?",
    answers: [
      {
        abb:'A',
        answer: "Yes",
        correct: true,
      },
      {
        abb:'B',
        answer: "No",
        correct: false,
      },
      {
        answerCondition:"Noble Ltd is a sporting goods distributor has an annual turnover of £25.1 million, total assets of£4.5 million and 75 employees. Under the Companies Act 2006, are Noble Ltd required to havean audit in the UK?"
      },
      {
        abb:'C',
        answer: "Yes",
        correct: true,
      },
      {
        abb:'D',
        answer: "No",
        correct: false,
      },
      {
        answerCondition:"Rice Ltd is a balloon manufacturer and has an annual turnover of £2 million, total assets of £1 million and 14 employees. An audit was undertaken in the previous year at request of the shareholders. Under the Companies Act 2006, are Rice Ltd required to have an audit in the UK?"
      },
      {
        abb:'E',
        answer: "Yes",
        correct: false,
      },
      {
        abb:'F',
        answer: "No",
        correct: true,
      },
    ],
    explanation:
      " Small companies are not required to have an audit in the UK (unless they are one ofthe exceptions). The small company threshold is to meet any two of the following criteria:turnover <£10.2m, total assets <£5.1m and <50 employees. For Rice Ltd, just because an audit was undertaken in the previous accounting period does not warrant the need for one in the following period if the above criteria is not met.",
  },
  {
    id: 4,
    question:
      "Which two of the following are benefits of an audit engagement?",
    answers: [
      {
        abb:'A',
        answer: "Enhances the credibility of the information by providing an independent opinion",
        correct: true,
      },
      {
        abb:'B',
        answer: "Identify any and all instances of fraud present at the company",
        correct: false,
      },
      {
        abb:'C',
        answer: "Attests to the accuracy of the financial statements",
        correct: false,
      },
      {
        abb:'D',
        answer: "Identify deficiencies in the company’s policies, procedures and internal controls",
        correct: true,
      },
    ],
    explanation:
      "Both enhancing the credibility of the information and identifying deficiencies in internal controls are benefits of an assurance engagement. Identifying areas of fraud and attesting to the accuracy of the financial statements are both not guaranteed and are examples of the expectation gap.",
  },
  {
    id: 5,
    question:
      " An unmodified audit report for the financial statements of Barney Ltd details that the financial statements give a true and fair view of the company’s affairs. Which one of the following types of assurance are best provided by this statement?",
    answers: [
      {
        abb:'A',
        answer: "Limited level of assurance expressed positively",
        correct: false,
      },
      {
        abb:'B',
        answer: "Reasonable level of assurance expressed positively",
        correct: true,
      },
      {
        abb:'C',
        answer: "High level of assurance expressed positively",
        correct: false,
      },
      {
        abb:'D',
        answer: "Positive assurance expressed negatively",
        correct: false,
      },
    ],
    explanation:
      "An audit of a company’s financial statements is based on historic data and therefore given sufficient appropriate evidence, can express reasonable assurance. To describe the financial statements of being ‘true and fair’ is a positively worded opinion.",
  },
];
