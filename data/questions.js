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

export const two = [
  {
    id: 1,
    question:
      "Which three of the following items are required by ISA (210) UK to be included in the engagement letter?",
    answers: [
      {
        abb:'A',
        answer: "The responsibilities of the auditors",
        correct: true,
      },
      {
        abb:'B',
        answer: "The responsibilities of the directors",
        correct: true,
      },
      {
        abb:'C',
        answer: "The basis of fees",
        correct: false,
      },
      {
        abb:'D',
        answer: "The form of any reports",
        correct: true,
      },
      {
        abb:'E',
        answer: "The management/plan of the audit",
        correct: false,
      },
    ],
    explanation:
      "Explanation: The responsibilities of the auditors and directors as well as the form of any reports must be included in an engagement letter. The basis of fees and the management/plan of the audit are both arrangements that are not essential in an engagement letter.",
  },
  {
    id: 2,
    question:
      "Bridge LLP is an assurance firm that acts for both Karate Ltd and Judo Ltd as part of their client portfolio. For each client, select whether the inherent risk is high or low.",
    answers: [
      {
        answerCondition:'The Financial Director of Karate Ltd recently retired and is yet to be replaced.'
      },
      {
        abb:'A',
        answer: "High risk",
        correct: true,
      },
      {
        abb:'B',
        answer: "Low risk",
        correct: false,
      },
      {
        answerCondition:'Judo Ltd was unsuccessful in retaining one of their biggest and longest standing customers.'
      },
      {
        abb:'C',
        answer: "High risk",
        correct: true,
      },
      {
        abb:'D',
        answer: "Low risk",
        correct: false,
      },
      
    ],
    explanation:
      "A lack of financial director suggests the financial statements may have been prepared by a non-competent person and contain errors/incorrect application of accounting policies. It also suggests that the company may have a poor internal control system which is an indicator of high risk. Poor future performance could indicate a high risk that the company may misstate its financial statements to reassure the shareholders.",
  },
  {
    id: 3,
    question:
      " As part of a firm’s client due diligence, which two of the following items are required by Money Laundering Regulations before taking on a sole trader?",
    answers: [
      {
        abb:'A',
        answer: "Certificate of incorporation",
        correct: false,
      },
      {
        abb:'B',
        answer: "Passport",
        correct: true,
      },
      {
        abb:'C',
        answer: "Utility bill",
        correct: true,
      },
      {
        abb:'D',
        answer: "Annual return",
        correct: false,
      },
      
    ],
    explanation:
      "To comply with the money laundering regulations, firms are required to request information from the individual including documents giving the full name and address of the client, plus photo identification. ",
  },
  {
    id: 4,
    question:
      "As part of a firm’s client due diligence, which two of the following items are required by Money Laundering Regulations before taking on a limited company?",
    answers: [
      {
        abb:'A',
        answer: "Certificate of incorporation",
        correct: true,
      },
      {
        abb:'B',
        answer: "Passport",
        correct: false,
      },
      {
        abb:'C',
        answer: "Utility bill",
        correct: false,
      },
      {
        abb:'D',
        answer: "Annual return",
        correct: true,
      },
   
    ],
    explanation:
      "To comply with the money laundering regulations, firms are required to obtain information of the companies from the Registration of Companies including certificate of incorporation and their annual return.",
  },
  {
    id: 5,
    question:
      "Which one of the following items are not required by ISA (210) UK to be included in the engagement letter?",
    answers: [
      {
        abb:'A',
        answer: "The responsibilities of the auditors",
        correct: false,
      },
      {
        abb:'B',
        answer: "The responsibilities of the directors",
        correct: false,
      },
      {
        abb:'C',
        answer: "The basis of fees",
        correct: true,
      },
      {
        abb:'D',
        answer: "The form of any reports",
        correct: false,
      },
      
    ],
    explanation:
      "Explanation: The responsibilities of the auditors and directors as well as the form of any reports must be included in an engagement letter. The basis of fees is an arrangement that is not essential in an engagement letter.",
  },
]

export const three = [
  {
    id: 1,
    question:
      " Audit risk can be split into detection risk, inherent risk and control risk. For each of the following examples, select the type of audit risk illustrated.",
    answers: [
      {
        answerCondition:'The organisation has had a bespoke accounting software package implemented in this year'
      },
      {
        abb:'A',
        answer: "Inherent risk",
        correct: false,
      },
      {
        abb:'B',
        answer: "Control risk",
        correct: true,
      },
      {
        abb:'C',
        answer: "Detection risk",
        correct: false,
      },
      {
        answerCondition:'The organisation is keen to have their audit completed as soon as possible.'
      },
      
      {
        abb:'D',
        answer: "Inherent risk",
        correct: false,
      },
      {
        abb:'E',
        answer: "Control risk",
        correct: false,
      },
      {
        abb:'F',
        answer: "Detection risk",
        correct: true,
      },
      
    ],
    explanation:
      "The new bespoke accounting software is likely to be unsophisticated and lack sufficient inbuilt controls or security. A time pressured audit may put pressure on the audit team to reduce the amount of work they do",
  },
  {
    id: 2,
    question:
      " Audit risk can be split into detection risk, inherent risk and control risk. For each of the following examples, select the type of audit risk illustrated.",
    answers: [
      {
        answerCondition:'The organisation’s finance department is made up of just the one employee.'
      },
      {
        abb:'A',
        answer: "Inherent risk",
        correct: false,
      },
      {
        abb:'B',
        answer: "Control risk",
        correct: true,
      },
      {
        abb:'C',
        answer: "Detection risk",
        correct: false,
      },
      {
        answerCondition:'The organisation was set up during the year'
      },
      
      {
        abb:'D',
        answer: "Inherent risk",
        correct: true,
      },
      {
        abb:'E',
        answer: "Control risk",
        correct: false,
      },
      {
        abb:'F',
        answer: "Detection risk",
        correct: false,
      },
      
    ],
    explanation:
      "The small accounting department of one employee means that there will not be enough staff to carry out control tests as well as detect errors. New companies often struggle with cash flow which may mean that the company may not be a going concern.",
  },
  {
    id: 3,
    question:
      "As part of an auditor’s initial risk assessment, the company’s inherent and control risk have been deemed to be high. In order to keep audit risk as low as possible, what is the impact on:",
    answers: [
      {
        answerCondition:'Materiality'
      },
      {
        abb:'A',
        answer: "Higher",
        correct: false,
      },
      {
        abb:'B',
        answer: "Lower",
        correct: true,
      },
     
      {
        answerCondition:'Sample sizes'
      },
      
      {
        abb:'C',
        answer: "Larger",
        correct: true,
      },
      {
        abb:'D',
        answer: "Smaller",
        correct: false,
      },
    
      
    ],
    explanation:
      "Audit risk = inherent risk x control risk x detection risk. As inherent and control risk are both high, for audit risk to be low, detection must be low. Therefore, for detection risk to be low, materiality will be lowered and sample sizes will increase.",
  },
  {
    id: 4,
    question:
      "Which two of the following items would normally be included in the audit strategy rather than the audit plan?",
    answers: [
      
      {
        abb:'A',
        answer: "Identification of specific audit risks",
        correct: true,
      },
      {
        abb:'B',
        answer: "Nature, timing and extent of specific audit procedures",
        correct: false,
      },
      {
        abb:'C',
        answer: "Allocation of specific audit staff to certain audit procedures",
        correct: false,
      },
     
      
      {
        abb:'D',
        answer: "Information surrounding the client’s industry",
        correct: true,
      },
     
      
    ],
    explanation:
      "Audit strategy is the general strategy for the audit which sets the scope, timing and direction of the audit as well as the risks that surround the company and industry. The audit plan however, is more detailed and sets out the nature, timing and extent of audit procedures. ",
  },
  {
    id: 5,
    question:
      "For the audit of a long-standing client with an internal audit department, select the most appropriate approach the audit firm should adopt.",
    answers: [
     
      {
        abb:'A',
        answer: "Test of controls only",
        correct: false,
      },
      {
        abb:'B',
        answer: "Substantive procedures only",
        correct: false,
      },
      {
        abb:'C',
        answer: "Analytical procedures only",
        correct: false,
      },
    
      
      {
        abb:'D',
        answer: "A mix of test of controls and substantive procedures.",
        correct: true,
      },
      
    ],
    explanation:
      "Explanation: Option D is correct as the controls have been assessed as strong, which means they can be relied upon. In this scenario, limited substantive procedures will be undertaken in tandem to testing the internal controls",
  },
]

export const four = [
  {
    id: 1,
    question:
      "Which three of the following are assertions used by the auditor to test account balances?",
    answers: [
     
      {
        abb:'A',
        answer: "Completeness",
        correct: true,
      },
      {
        abb:'B',
        answer: "Existence",
        correct: true,
      },
      {
        abb:'C',
        answer: "Classification",
        correct: true,
      },
    
      
      {
        abb:'D',
        answer: "Occurrence",
        correct: false,
      },
      {
        abb:'E',
        answer: "Cutt-off",
        correct: false,
      },
      
    ],
    explanation:
      " Assertions used by the auditor to test account balances include existence, rights and obligations, completeness, accuracy, valuation and allocation, classification and presentation. Occurrence and cut-off are both assertions used to test classes of transactions.",
  },
  {
    id: 2,
    question:
      "Which two of the following are assertions used by the auditor to test classes of transactions?",
    answers: [
     
      {
        abb:'A',
        answer: "Rights and obligations",
        correct: true,
      },
      {
        abb:'B',
        answer: "Existence",
        correct: true,
      },
      {
        abb:'C',
        answer: "Classification",
        correct: false,
      },
    
      
      {
        abb:'D',
        answer: "Occurrence",
        correct: false,
      },
      
    ],
    explanation:
      "Assertions used by the auditor to test classes of transactions include occurrence, completeness, accuracy, cut-off, classification and presentation. Existence and rights and obligations are both assertions used to test account balances.",
  },
  {
    id: 3,
    question:
      "Which two of the following are assertions used by the auditor about classes of transactions and account balances?",
    answers: [
     
      {
        abb:'A',
        answer: "Completeness",
        correct: true,
      },
      {
        abb:'B',
        answer: "Cut-off",
        correct: false,
      },
      {
        abb:'C',
        answer: "Classification",
        correct: true,
      },
      {
        abb:'D',
        answer: "Occurrence",
        correct: false,
      },
      
    ],
    explanation:
      "Assertions used by the auditor to test classes of transactions include occurrence, completeness, accuracy, cut-off, classification and presentation. Assertions used by the auditor to test account balances include, existence, rights and obligations, completeness, accuracy, valuation and allocation, classification and presentation.",
  },
  {
    id: 4,
    question:
      "Which of the following would not be expected to be included in an audit report?",
    answers: [
     
      {
        abb:'A',
        answer: "Basis for audit opinion paragraph",
        correct: false,
      },
      {
        abb:'B',
        answer: "Key audit matters paragraph",
        correct: false,
      },
      {
        abb:'C',
        answer: "Matters on which auditors are required to report by exception",
        correct: false,
      },
    
      
      {
        abb:'D',
        answer: "Responsibilities of management paragraph",
        correct: false,
      },
      {
        abb:'E',
        answer: "Responsibilities of shareholders’ paragraph",
        correct: true,
      },
      
    ],
    explanation:
      "The purpose of the audit report of financial statements is to provide assurance over the financial statements so that the shareholders and potential investors can make economic decisions. The basis for audit opinion paragraph, key audit matters paragraph, matters on which auditors are required to report by exception and the responsibilities of management paragraph are all basic elements of the audit report. Therefore, the responsibilities of shareholders’ paragraph is not expected to be included in the audit report.",
  },
  {
    id: 5,
    question:
      "Which of the following is not a matter to be reported on by exception in an audit report?",
    answers: [
     
      {
        abb:'A',
        answer: "Appropriate accounting records have not been maintained",
        correct: false,
      },
      {
        abb:'B',
        answer: "Returns have been received by branches not visited",
        correct: false,
      },
      {
        abb:'C',
        answer: "The financial statements are not prepared in accordance with the appropriate financial reporting framework.",
        correct: true,
      },
      {
        abb:'D',
        answer: "The financial statements do not agree to the accounting records and returns",
        correct: false,
      },
      
    ],
    explanation:
      "Under the Companies Act 2006, the matters to report on by exception include appropriate accounting records have not been maintained, returns have been received by branches not visited, the financial statements do not agree to the accounting records and returns, disclosures of directors’ remuneration are not made and the auditors have not received all information.",
  },
]

export const five = [
  {
    id: 1,
    question:
      "For each of the following, select whether the statement is true or false:",
    answers: [
      {
        answerCondition:'Small companies have more problems than larger companies when implementing effective internal controls'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'Internal controls are important in ensuring the company complies with relevant laws and regulations.'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: true,
      },
      {
        abb:'D',
        answer: "False",
        correct: false,
      },
    
      {
        answerCondition:'Internal controls are always cost effective when implemented at a long-established company'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: false,
      },
      {
        abb:'D',
        answer: "False",
        correct: true,
      },
    
      
    ],
    explanation:
      "Small companies struggle with implementing effective internal controls due to fewer people to ensure a segregation of duties, unable to review others work and may have a reduced number of experienced staff. Internal controls are important in ensuring the company complies with relevant laws and regulations as well as being a continuing effective company. Internal controls are not always cost effective",
  },
  {
    id: 2,
    question:
      "Under ISA (UK) 315, Identifying and assessing the risks of material misstatements, which of the following are components of internal control?",
    answers: [
     
      {
        abb:'A',
        answer: "Control environment",
        correct: false,
      },
      {
        abb:'B',
        answer: "Information processing",
        correct: true,
      },
     
    
      {
        abb:'C',
        answer: "Risk assessment",
        correct: false,
      },
      {
        abb:'D',
        answer: "Monitoring of controls",
        correct: false,
      },
    ],
    explanation:
      "The components of internal control include control activities, risk assessment, information systems, monitoring of controls and the control environment. Information processing is a control activity.",
  },
  {
    id: 3,
    question:
      "Which of the following is not a control activity?",
    answers: [
    
      {
        abb:'A',
        answer: "Control environment",
        correct: true,
      },
      {
        abb:'B',
        answer: "Information processing",
        correct: false,
      },
     
      
      
      {
        abb:'C',
        answer: "Review of performance",
        correct: false,
      },
      {
        abb:'D',
        answer: "Segregation of duties",
        correct: false,
      },
    
      
    ],
    explanation:
      "The control activities include segregation of duty, physical controls, information processing, review of performance and authorisation. The control environment is a component of internal control. ",
  },
  {
    id: 4,
    question:
      "As part of a company’s information systems, there are both manual and programmed procedures within a computerised environment. For each of the following examples, select whether it is a general IT control or an application control:",
    answers: [
      {
        answerCondition:'Password protection'
      },
      {
        abb:'A',
        answer: "General IT contro",
        correct: true,
      },
      {
        abb:'B',
        answer: "Application control",
        correct: false,
      },
     
      {
        answerCondition:'Training of staff'
      },
      
      {
        abb:'C',
        answer: "General IT contro",
        correct: true,
      },
      {
        abb:'D',
        answer: "Application control",
        correct: false,
      },
    
     
      {
        answerCondition:'Training of staff'
      },
      
      {
        abb:'E',
        answer: "General IT contro",
        correct: true,
      },
      {
        abb:'F',
        answer: "Application control",
        correct: false,
      },
    
      
    ],
    explanation:
      " General IT controls are policies and procedures that relate to many applications and support the effective operation of information systems. Application controls are manual or automated procedures that operate at a business level. All of the examples relate to general IT controls.",
  },
  {
    id: 5,
    question:
      "Maguire Ltd are a small company with limited controls and a basic accountancy software package. Which of the following would be the best way of recording the controls in this system? ",
    answers: [
    
      {
        abb:'A',
        answer: "Internal control questionnaire ",
        correct: false,
      },
      {
        abb:'B',
        answer: "Narrative notes",
        correct: true,
      },
     
      
      {
        abb:'C',
        answer: "Flow chart",
        correct: false,
      },
      {
        abb:'D',
        answer: "Decision tree",
        correct: false,
      },
    
      
    ],
    explanation:
      "Maguire Ltd is a small company with simple systems therefore narrative notes is the most appropriate. ",
  },
]

export const six = [
  {
    id: 1,
    question:
      "Which of the following would be the best control to implement to mitigate goods accepted that may not be ordered?",
    answers: [
     
      {
        abb:'A',
        answer: "Examination of goods inwards for quantity and condition",
        correct: false,
      },
      {
        abb:'B',
        answer: "Comparison of goods received note to the purchase order",
        correct: true,
      },
     
     
      
      {
        abb:'C',
        answer: "Matching the goods received note to the purchase invoice",
        correct: false,
      },
      {
        abb:'D',
        answer: "Review of outstanding purchase orders",
        correct: false,
      },
    
    ],
    explanation:
      "Examination of goods inward for quantity and condition would not identify whether the goods had been ordered. Matching the goods received note to the purchase invoice may not be relevant if the goods ordered did not match the purchase invoice issued. Reviewing outstanding purchase orders is a good control for goods ordered misappropriated for private use",
  },
  {
    id: 2,
    question:
      "Which is the correct order for purchasing goods on credit?",
    answers: [
      {
        answerCondition:'i)   Raise requisition.\nii)  Receive goods\niii) Raise purchase order\niv) Send payment\nv)  Accounts department match goods received note to invoice'
      },
      {
        abb:'A',
        answer: "i, iii, ii, v, iv",
        correct: true,
      },
      {
        abb:'B',
        answer: "i, ii, iii, v, iv",
        correct: false,
      },
     
    
      {
        abb:'C',
        answer: "i, iv, ii, iii, v",
        correct: false,
      },
      {
        abb:'D',
        answer: "iii, ii, v, iv, i",
        correct: false,
      },
      
    ],
    explanation:
      "The correct order is to raise requisition, raising a purchase order, receiving goods, the accounts department account for the purchase through matching the goods received note to the purchase invoice and finally send payment.",
  },
  {
    id: 3,
    question:
      "Which of the following would be the best control to implement to mitigate wrong goods being despatched that may not have been ordered?",
    answers: [
     
      {
        abb:'A',
        answer: "Examination of goods outward for quantity and condition",
        correct: false,
      },
      {
        abb:'B',
        answer: "Comparison of goods received note to the sales invoice",
        correct: false,
      },
     
     
      {
        abb:'C',
        answer: "Matching the goods despatch note to the customer order form",
        correct: true,
      },
      {
        abb:'D',
        answer: "Contacting the client to confirm their order",
        correct: false,
      },
    
      
    ],
    explanation:
      "Examination of goods outward for quantity and condition would not identify whether the goods had been ordered. In a sales order, you would not issue a goods received note. Contacting the client to confirm their order would mitigate wrong goods being despatched but is not good business practice. Therefore, matching the goods despatch note to the customer order form is the best option.",
  },
  {
    id: 4,
    question:
      "Review the following processes in the sales system at Materials Ltd, who distribute bricks, tiles and other building materials. For each process, select whether it represents a strength or deficiency to the system of internal controls",
    answers: [
      {
        answerCondition:'Sales orders are received over the phone at head office which are processed into the company’s sales order system.'
      },
      {
        abb:'A',
        answer: "Strength",
        correct: false,
      },
      {
        abb:'B',
        answer: "Deficiency",
        correct: true,
      },
     
      {
        answerCondition:'The order automatically generates a production note which is raised directly with both the accounts department and the warehouse'
      },
      
      {
        abb:'C',
        answer: "Strength",
        correct: false,
      },
      {
        abb:'D',
        answer: "Deficiency",
        correct: true,
      },
    
     
      {
        answerCondition:'Unfulfilled production notes are compiled, reviewed by the warehouse manager weekly and completed as soon as possible'
      },
      
      {
        abb:'E',
        answer: "Strength",
        correct: true,
      },
      {
        abb:'F',
        answer: "Deficiency",
        correct: false,
      },
    
      
    ],
    explanation:
      "Process 1 is deficient as it fails to address potential client credit risk and that the item is in stock. Process 2 is deficient because there is no link between the despatch and the invoice and vice versa. In such circumstances, goods could be despatched without being invoiced and the client could be invoiced without receiving the goods. Process 3 is a strength as it will ensure that orders are filled at a later date",
  },
  {
    id: 5,
    question:
      "Employees at Lara Ltd fill in manual daily timesheets detailing their start time, finish time and total hours worked for the day. Staff members are then paid an hourly rate on the basis of their hours recorded. Which two of the following outcomes could arise from this system?",
    answers: [
     
      {
        abb:'A',
        answer: "Employees are paid at a higher rate",
        correct: false,
      },
      {
        abb:'B',
        answer: "Employees may be paid for work that they have not done",
        correct: true,
      },
     
    
      {
        abb:'C',
        answer: "Employees may be paid for the hours they have completed",
        correct: true,
      },
      {
        abb:'D',
        answer: "Employees pay deductions may have been incorrectly calculated",
        correct: false,
      },
 
    ],
    explanation:
      "This is an example of a simple control based on the integrity of employee timesheets. Therefore, it is possible that employees are paid for the work they’ve done, or they could overstate the time they’ve worked. The employee",
  },
]

export const seven = [
  {
    id: 1,
    question:
      "To which one of the following parties would an unlisted company’s internal auditors report to?",
    answers: [
   
      {
        abb:'A',
        answer: " Board of directors",
        correct: true,
      },
      {
        abb:'B',
        answer: "Shareholders",
        correct: false,
      },
     
  
      {
        abb:'C',
        answer: "Audit committee",
        correct: false,
      },
      {
        abb:'D',
        answer: "Stakeholders",
        correct: false,
      },
    
      {
        abb:'E',
        answer: "External auditors",
        correct: false,
      },
    
     
    
      
    ],
    explanation:
      "The internal auditors report to both the board of directors and, for listed companies, the audit committee. ",
  },
  {
    id: 2,
    question:
      "Which one of the following components of internal control do an internal audit department fall under?",
    answers: [
  
      {
        abb:'A',
        answer: "Monitoring of controls",
        correct: true,
      },
      {
        abb:'B',
        answer: "Control activity ",
        correct: false,
      },
     
   
      {
        abb:'C',
        answer: "Control environment",
        correct: false,
      },
      {
        abb:'D',
        answer: "Risk assessment",
        correct: false,
      },

      
    ],
    explanation:
      "Internal audit plays an important part in the monitoring of controls at larger organisations. Internal auditors focus on the efficiency and effectiveness of a business as well as ensuring that controls are applied correctly.",
  },
  {
    id: 3,
    question:
      "For each of the following statements, select whether it is true or false in relation to internal audit.",
    answers: [
      {
        answerCondition:'Internal auditors are required to be a member of a Recognised Supervisory Body'
      },
      {
        abb:'A',
        answer: "True",
        correct: false,
      },
      {
        abb:'B',
        answer: "False",
        correct: true,
      },
     
      {
        answerCondition:'Both internal and external audit are legal requirements for companies turning over more than £10.2 million'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: false,
      },
      {
        abb:'D',
        answer: "False",
        correct: true,
      },
    

      
    ],
    explanation:
      " Internal auditors, unlike external auditors, do not need to be a member of a Recognised Supervisory Body. External audit is a legal requirement when exceeding the small company threshold or a regul",
  },
  {
    id: 4,
    question:
      "Which one of the following is not a typical activity for an internal audit department to undertake?",
    answers: [

      {
        abb:'A',
        answer: "Designing and operating internal control systems",
        correct: false,
      },
      {
        abb:'B',
        answer: "Value for money review",
        correct: false,
      },
     
  
      
      {
        abb:'C',
        answer: "Compliance review",
        correct: false,
      },
      {
        abb:'D',
        answer: "To provide an opinion on the financial statements of the company",
        correct: true,
      },

      
    ],
    explanation:
      "Internal audit plays an important part in the monitoring of controls at larger organisations. Providing an opinion on the financial statements is undertaken by the external auditors",
  },
  {
    id: 5,
    question:
      "For the following statement, select whether it is true or false in relation to internal audit.",
    answers: [
      {
        answerCondition:'Internal auditors should not get involved in operational matters.'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },

    ],
    explanation:
      "Internal auditors focus on the efficiency and effectiveness of a business as well as ensuring that controls are applied correctly and are not required to be involved in the operational matters.",
  },
]

export const eight = [
  {
    id: 1,
    question:
      "Which one of the following is not required to be included in the audit working paper?",
    answers: [
    
      {
        abb:'A',
        answer: "The name of the client",
        correct: false,
      },
      {
        abb:'B',
        answer: "The date the work was planned",
        correct: true,
      },
     
    
      {
        abb:'C',
        answer: "The date the work was reviewed",
        correct: false,
      },
      {
        abb:'D',
        answer: "The reporting date",
        correct: false,
      },
    

      
    ],
    explanation:
      "The name of the client, the date the work was reviewed and the reporting date are all required to be included in the audit working paper. The date the work was planned is not relevant.",
  },
  {
    id: 2,
    question:
      "Which two of the following are likely to be included in the current year audit file?",
    answers: [
    
      {
        abb:'A',
        answer: "Engagement letter",
        correct: false,
      },
      {
        abb:'B',
        answer: "Notes of board minutes",
        correct: true,
      },
     
    
      
      {
        abb:'C',
        answer: "New client questionnaire",
        correct: false,
      },
      {
        abb:'D',
        answer: "Review notes",
        correct: true,
      },
    
      {
        abb:'E',
        answer: "Previous years’ signed accounts",
        correct: false,
      },
    

      
    ],
    explanation:
      " The engagement letter, new client questionnaire and the previous years’ signed accounts are all expected in the permanent audit file. ",
  },
  {
    id: 3,
    question:
      "For each of the following, select whether it would normally be included in the current year audit file or the permanent audit file",
    answers: [
      {
        answerCondition:'Written representations from management'
      },
      {
        abb:'A',
        answer: "Current year audit file",
        correct: true,
      },
      {
        abb:'B',
        answer: "Permanent audit file",
        correct: false,
      },
     
      {
        answerCondition:'Accounting system notes from last year'
      },
      
      {
        abb:'C',
        answer: "Current year audit file",
        correct: false,
      },
      {
        abb:'D',
        answer: "Permanent audit file",
        correct: true,
      },
      {
        answerCondition:'Time budgets and summaries'
      },
      
      {
        abb:'E',
        answer: "Current year audit file",
        correct: true,
      },
      {
        abb:'F',
        answer: "Permanent audit file",
        correct: false,
      },
    

      
    ],
    explanation:
      "The management written representations and time budget and summaries are both expected in the current audit file. The accounting system notes from last year are expected in the permanent audit file. ",
  },
  {
    id: 4,
    question:
      "Under the requirements of auditing standards, how long should audit firms keep their working papers? ",
    answers: [
   
      {
        abb:'A',
        answer: "Six years from the date the financial statements were signed",
        correct: false,
      },
      {
        abb:'B',
        answer: "Six years from the end of the accounting period to which they relate",
        correct: true,
      },
     
    
      
      {
        abb:'C',
        answer: "Five years from the date the financial statements were signed",
        correct: false,
      },
      {
        abb:'D',
        answer: "Five years from the end of the accounting period to which they relate",
        correct: false,
      },
    

      
    ],
    explanation:
      "The ICAEW required all firms to have a document retention policy and for registered auditors to keep all audit working papers for six years from the end of the accounting period to which they relate. This is also a requirement of auditing standards.",
  },
  {
    id: 5,
    question:
      "Which one of the following is not an example of an advantage of automated working papers?",
    answers: [
   
      {
        abb:'A',
        answer: "Risk of error is reduced",
        correct: false,
      },
      {
        abb:'B',
        answer: "Working papers are easier to review",
        correct: false,
      },
     
      
      {
        abb:'C',
        answer: "It is less expensive to implement automated working papers",
        correct: true,
      },
      {
        abb:'D',
        answer: "Substantial time savings",
        correct: false,
      },
    

      
    ],
    explanation:
      "Automated working papers reduce the risk of error, are easier to review and enable substantial time savings. Automated working papers are generally more expensive than standard working papers.",
  },
]

export const nine = [
  {
    id: 1,
    question:
      "For each of the following statements, select whether it is true or false",
    answers: [
      {
        answerCondition:'Audit evidence is information used by the auditor to arrive at conclusions for which their opinions are based.'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'A company’s sales invoice is more reliable than a purchase invoice'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: false,
      },
      {
        abb:'D',
        answer: "False",
        correct: true,
      },
     

      
    ],
    explanation:
      "Statement 1 is the definition of audit evidence. For statement 2, internally generated documents are generally less reliable than externally generated documents. ",
  },
  {
    id: 2,
    question:
      "For each of the following statements, select whether it is true or false.",
    answers: [
      {
        answerCondition:'Written forms of evidence are more reliable than oral evidence.'
      },
      {
        abb:'A',
        answer: "True",
        correct: false,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'Evidence generated by the audit team is more reliable than evidence provided by the client.'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: true,
      },
      {
        abb:'D',
        answer: "False",
        correct: false,
      },

    ],
    explanation:
      " Even though written forms of evidence are easier to document, written documents are not always more reliable than oral evidence. Evidence provided by the client is deemed more reliable when it is repeatable and can be reperformed by the audit team.",
  },
  {
    id: 3,
    question:
      "Under IAS 500 Audit Evidence, an auditor must gather evidence that is both ______ and________.",
    answers: [
  
      {
        abb:'A',
        answer: "Sufficient",
        correct: true,
      },
      {
        abb:'B',
        answer: "Appropriate",
        correct: true,
      },
     
     
      
      {
        abb:'C',
        answer: "Relevant",
        correct: false,
      },
      {
        abb:'D',
        answer: "Reliable",
        correct: false,
      },
    

      
    ],
    explanation:
      "Under IAS 500 Audit Evidence, evidence is required to be sufficient and appropriate.",
  },
  {
    id: 4,
    question:
      "Which one of the following procedures is the most appropriate for reviewing an entity’s inventory counting procedures?",
    answers: [
    
      {
        abb:'A',
        answer: "Observation",
        correct: true,
      },
      {
        abb:'B',
        answer: "Analytical procedures",
        correct: false,
      },
     
   
      
      {
        abb:'C',
        answer: "Enquiry",
        correct: false,
      },
      {
        abb:'D',
        answer: "Recalculation",
        correct: false,
      },
  

      
    ],
    explanation:
      "Observation involves watching a procedure being performed. Analytical procedures involve evaluating and comparing financial and non-financial data for plausible relationships. Enquiry involves seeking information from client management and evaluating their response. Recalculation involves checking the arithmetical accuracy of client records.",
  },
  {
    id: 5,
    question:
      "For each of the following statements, select whether it is true or false",
    answers: [
      {
        answerCondition:'Error is an unintentional misstatement in the financial statements, including the omission of an amount or a disclosure'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'Tolerable misstatement is the maximum misstatement in the population that the auditor would be willing to accept.'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: true,
      },
      {
        abb:'D',
        answer: "False",
        correct: false,
      },
   
      
    ],
    explanation:
      "Both statements are true.",
  },
]

export const ten = [
  {
    id: 1,
    question:
      "Which one of the following is not a statistical sampling method?",
    answers: [
 
      {
        abb:'A',
        answer: "Haphazard selection",
        correct: true,
      },
      {
        abb:'B',
        answer: "Random selection",
        correct: false,
      },
     
 
      
      {
        abb:'C',
        answer: "Systematic selection",
        correct: false,
      },
      {
        abb:'D',
        answer: "Monetary unit sampling",
        correct: false,
      },
   
      
    ],
    explanation:
      "Random selection, systematic selection and monetary unit sampling are all examples of statistical sampling methods. Haphazard selection is a non-statistical sampling method. ",
  },
  {
    id: 2,
    question:
      "Which two of the following is not an example of what audit software can do?",
    answers: [
    
      {
        abb:'A',
        answer: "Extract a sample from specified criteria",
        correct: false,
      },
      {
        abb:'B',
        answer: "Check calculations and casts performed",
        correct: false,
      },
  
      
      {
        abb:'C',
        answer: "Prepare comparison report of actual vs budget figures",
        correct: false,
      },
      {
        abb:'D',
        answer: "Run test data",
        correct: true,
      },
      {
        abb:'E',
        answer: "Conclude on whether controls are operating properly",
        correct: true,
      },
   
      
    ],
    explanation:
      "Extract a sample from specified criteria, check calculations and casts performed and prepare a comparison report of actual vs budget figures are all examples of what audit software can do. Run test data and concluding on whether controls are operating properly are both examples of test data techniques",
  },
  {
    id: 3,
    question:
      "For each of the following statements, select whether it is true or false in relation to audit data analytics (ADA).",
    answers: [
      {
        answerCondition:'ADA can analyse all transactions in a population to stratify the sample and identify outliers'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'ADA can three-way match source documents between sales orders and goods despatched notes and sales invoices.'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: true,
      },
      {
        abb:'D',
        answer: "False",
        correct: false,
      },
   
      
    ],
    explanation:
      "Both examples are true functions of what audit data analytics can achieve.",
  },
  {
    id: 4,
    question:
      "The risk that the auditor’s conclusion based on the sample differs from if the conclusion was drawn by using the whole population of data.",
    answers: [

      {
        abb:'A',
        answer: "Misstatement",
        correct: false,
      },
      {
        abb:'B',
        answer: "Sampling risk",
        correct: true,
      },
     

      
      {
        abb:'C',
        answer: "Non-sampling risk",
        correct: false,
      },
      {
        abb:'D',
        answer: "Detection risk",
        correct: false,
      },
   
      
    ],
    explanation:
      "The statement is the definition of sampling risk.",
  },
  {
    id: 5,
    question:
      "For each of the following statements, select what impact this will have on the sample size.",
    answers: [
      {
        answerCondition:'An increase in the tolerable rate of deviation'
      },
      {
        abb:'A',
        answer: "Increase the sample size",
        correct: false,
      },
      {
        abb:'B',
        answer: "Decrease the sample size",
        correct: true,
      },
      {
        abb:'C',
        answer: "Negligible effect",
        correct: false,
      },
     
      {
        answerCondition:'Tolerable misstatement is the maximum misstatement in the population that the auditor would be willing to accept.'
      },
      
      {
        abb:'D',
        answer: "Increase the sample size",
        correct: false,
      },
      {
        abb:'E',
        answer: "Decrease the sample size",
        correct: false,
      },
   
      {
        abb:'F',
        answer: "Negligible effect",
        correct: true,
      },
   
      
    ],
    explanation:
      "An increase in the tolerable rate of deviation or materiality will decrease the sample size. Increasing the number of sampling units in a population will have negligible affect as it is not a factor that determines the sample size.",
  },
]

export const eleven = [
  {
    id: 1,
    question:
      "Which one of the following assertions is tested by obtaining confirmation of balances from banks and other lenders?",
    answers: [
  
      {
        abb:'A',
        answer: "Existence",
        correct: true,
      },
      {
        abb:'B',
        answer: "Occurrence",
        correct: false,
      },
     
      
      {
        abb:'C',
        answer: "Completeness",
        correct: false,
      },
      {
        abb:'D',
        answer: "Classification",
        correct: false,
      },
   
      
    ],
    explanation:
      "Assertions used by the auditor to test account balances (such as cash at bank) include, Existence, Rights and obligations, Completeness, Accuracy, valuation and allocation, Classification and Presentation. By obtaining confirmation from banks about the balances, an auditor is testing for existence. ",
  },
  {
    id: 2,
    question:
      "Which one of the following assertions is tested by reviewing after date payments for liabilities not recorded?",
    answers: [
 
      {
        abb:'A',
        answer: "Existence",
        correct: false,
      },
      {
        abb:'B',
        answer: "Occurrence",
        correct: false,
      },
  
      
      {
        abb:'C',
        answer: "Completeness",
        correct: true,
      },
      {
        abb:'D',
        answer: "Cut-off",
        correct: false,
      },
   
      
    ],
    explanation:
      "Assertions used by the auditor to test account balances (such as cash at bank) include, Existence, Rights and obligations, Completeness, Accuracy, valuation and allocation, Classification and Presentation. Reviewing after date payments for liabilities not recorded is a test for completeness.",
  },
  {
    id: 3,
    question:
      "Which two of the following are not examples for a test of irrecoverable or doubtful debts?",
    answers: [
  
      {
        abb:'A',
        answer: "Recalculating any general bad debt allowance",
        correct: false,
      },
      {
        abb:'B',
        answer: "Comparing the allowance in prior years to actual bad debts",
        correct: false,
      },
     

      
      {
        abb:'C',
        answer: "Reviewing cash received after year end dateue",
        correct: false,
      },
      {
        abb:'D',
        answer: "Vouching sales invoices to receipts in bank",
        correct: true,
      },
      {
        abb:'E',
        answer: "Calculating the proportion of bad debts to turnover",
        correct: true,
      },
   
      
    ],
    explanation:
      "Recalculating any general bad debt allowance, comparing the allowance in prior years to actual bad debts and reviewing cash received after year end date are all examples of tests for irrecoverable and doubtful debts. Both vouching sales invoices to receipts in bank and calculating the proportion of bad debts to turnover do not test bad debts.",
  },
  {
    id: 4,
    question:
      "When testing inventory for existence, valuation and rights and obligation, which of the below are reasons as why net realisable value of stock may not be lower than cost? ",
    answers: [
  
      {
        abb:'A',
        answer: "A fall in the selling price",
        correct: false,
      },
      {
        abb:'B',
        answer: "Errors in production",
        correct: false,
      },
     
 
      
      {
        abb:'C',
        answer: "Obsolesce of products",
        correct: false,
      },
      {
        abb:'D',
        answer: "Switching to a new supplier with more favourable trade discount terms",
        correct: true,
      },
      {
        abb:'D',
        answer: "The cost of renting the warehouse has risen with inflation",
        correct: true,
      },
   
      
    ],
    explanation:
      "Switching to a new supplier with more favourable trade discount terms would decrease costs rather than increase them. The increase in the cost of renting the warehouse (fixed overheads) has no implication on the cost of the stock.",
  },
  {
    id: 5,
    question:
      "Scott Michael has obtained a list of items that make up the cash at bank and in hand balance at £45,692 in the financial statements of Dunder Ltd. Materiality has been set at £5,000. For each of the following items, select whether or not you should test the item.",
    answers: [
      {
        answerCondition:'Petty cash float £100'
      },
      {
        abb:'A',
        answer: "Test",
        correct: false,
      },
      {
        abb:'B',
        answer: "No Test",
        correct: true,
      },
     
      {
        answerCondition:'Current account balance £4,500'
      },
      
      {
        abb:'C',
        answer: "Test",
        correct: false,
      },
      {
        abb:'D',
        answer: "No Test",
        correct: true,
      },
      {
        answerCondition:'Special directors’ cash account £569'
      },
      
      {
        abb:'E',
        answer: "Test",
        correct: true,
      },
      {
        abb:'F',
        answer: "No Test",
        correct: false,
      },
   
      
    ],
    explanation:
      "Both the petty cash float and current account balance need not be tested as the materiality threshold has not been met. The special directors’ cash account should be tested, despite the monetary value not meeting the materiality threshold, as it is material by nature.",
  },
]

export const twelve = [
  {
    id: 1,
    question:
      " For each of the following statements, select whether it is true or false in relation to written representations.",
    answers: [
      {
        answerCondition:'Under ISA 580 Written Representations, general representations are made by management that they have fulfilled their responsibility in preparing the financial statements'
      },
      {
        abb:'A',
        answer: "True",
        correct: true,
      },
      {
        abb:'B',
        answer: "False",
        correct: false,
      },
     
      {
        answerCondition:'Under ISA 580 Written Representations, general representations are made by the auditors that they have received all relevant information.'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: false,
      },
      {
        abb:'D',
        answer: "False",
        correct: true,
      },
   
      
    ],
    explanation:
      "Under ISA 580 Written Representations, general representations are made by management that they have fulfilled their responsibility in preparing the financial statements and provided the auditor with all the relevant information – not the auditors making the representation",
  },
  {
    id: 2,
    question:
      "Which one of the following is not a general representation made by management in a written representation?",
    answers: [

      {
        abb:'A',
        answer: "That management have fulfilled their responsibility in preparing the financial statements",
        correct: false,
      },
      {
        abb:'B',
        answer: "That management have provided the auditor with all relevant information",
        correct: false,
      },
       
      {
        abb:'C',
        answer: "That management have recorded and reflected all transactions",
        correct: false,
      },
      {
        abb:'D',
        answer: "That management have abided by the rules of corporate governance",
        correct: true,
      },
   
      
    ],
    explanation:
      "Management have fulfilled their responsibility in preparing the financial statements, have provided the auditor with all relevant information and management have recorded and reflected all transactions are all the general representations.",
  },
  {
    id: 3,
    question:
      "For the following statement, select whether it is true or false in relation to written representations.",
    answers: [
      {
        answerCondition:'Written representations are a suitable and appropriate substitution for other available audit evidence.'
      },
      {
        abb:'A',
        answer: "True",
        correct: false,
      },
      {
        abb:'B',
        answer: "False",
        correct: true,
      },
     
      
    ],
    explanation:
      "Written representations from management are not a substitution for other available audit evidence.",
  },
  {
    id: 4,
    question:
      "For the following statement, select whether it is true or false in relation to written representations.",
    answers: [
      {
        answerCondition:'Written representations include confirmation of the management’s understanding of the terms of the engagement.'
      },
      {
        abb:'A',
        answer: "True",
        correct: false,
      },
      {
        abb:'B',
        answer: "False",
        correct: true,
      },
     
 
      
    ],
    explanation:
      "Confirmation of the management’s understanding of the terms of the engagement are not generally included in a management written representation.",
  },
  {
    id: 5,
    question:
      "Which two of the following ISAs is not generally expected to be referenced in a written representation made by management?",
    answers: [
 
      {
        abb:'A',
        answer: "ISA (UK) 530 – Audit Sampling",
        correct: true,
      },
      {
        abb:'B',
        answer: "ISA (UK) 540 – Auditing Accounting Estimates",
        correct: false,
      },
     
   
      
      {
        abb:'C',
        answer: "ISA (UK) 550 – Related Parties",
        correct: false,
      },
      {
        abb:'D',
        answer: "ISA (UK) 560 – Subsequent Events",
        correct: false,
      },
      {
        abb:'E',
        answer: "ISA (UK) 300– Planning an Audit of Financial Statements",
        correct: true,
      },
   
      
    ],
    explanation:
      "ISA (UK) 540 – Auditing Accounting Estimates, 550 – Related Parties and 560 – Subsequent Events are all generally referenced in a written representation.",
  },
]

export const thirteen = [
  {
    id: 1,
    question:
      "Which one of the following is not included in an auditor’s report for an assurance engagement for a company’s financial statements?",
    answers: [
  
      {
        abb:'A',
        answer: "Title",
        correct: false,
      },
      {
        abb:'B',
        answer: "Addressee",
        correct: false,
      },
     
      {
        abb:'C',
        answer: "Opinion",
        correct: false,
      },
      {
        abb:'D',
        answer: "Signatures by the engagement team",
        correct: true,
      },
   
      
    ],
    explanation:
      "Signatures by the whole engagement team are not necessary, just the engagement partner.",
  },
  {
    id: 2,
    question:
      " For each of the following statements, select whether it is true or false in relation to audit reporting.",
    answers: [
      {
        answerCondition:'The basis for opinion paragraph precedes the opinion paragraph.'
      },
      {
        abb:'A',
        answer: "True",
        correct: false,
      },
      {
        abb:'B',
        answer: "False",
        correct: true,
      },
     
      {
        answerCondition:'Both the other information paragraph and the key audit matters paragraphs are only included for the auditor’s report of listed companies'
      },
      
      {
        abb:'C',
        answer: "True",
        correct: false,
      },
      {
        abb:'D',
        answer: "False",
        correct: true,
      },
   
      
    ],
    explanation:
      "The basis for opinion paragraph follows the opinion paragraph. The key audit matters paragraph is only included for listed companies, but the other information paragraph is required for all audit reports.",
  },
  {
    id: 3,
    question:
      "Which two of the following is not an example of an explicit opinion in an auditor’s report?",
    answers: [

      {
        abb:'A',
        answer: "The financial reporting framework ",
        correct: false,
      },
      {
        abb:'B',
        answer: "Whether the company complies with the Companies Act 2006",
        correct: false,
      },
     
 
      
      {
        abb:'C',
        answer: "Whether the information in the strategic report/director’s report is consistent with the financial statements",
        correct: false,
      },
      {
        abb:'D',
        answer: "Whether proper accounting records have been maintained",
        correct: true,
      },
   
      
      {
        abb:'E',
        answer: "Whether the accounts agree to the underlying accounting records",
        correct: true,
      },
   
      
    ],
    explanation:
      "Whether proper accounting records have been maintained and whether the accounts agree to the underlying accounting records are both examples of implied opinions, not explicit opinions",
  },
  {
    id: 4,
    question:
      "Which two of the following is not an example of an implied opinion in an auditor’s report?",
    answers: [
    
      {
        abb:'A',
        answer: "Whether director’s transactions and remuneration has been correctly disclosed ",
        correct: false,
      },
      {
        abb:'B',
        answer: "Whether the company complies with the Companies Act 2006",
        correct: true,
      },

      
      {
        abb:'C',
        answer: "Whether the information in the strategic report/director’s report is consistent with thefinancial statements",
        correct: true,
      },
      {
        abb:'D',
        answer: "Whether proper accounting records have been maintained",
        correct: false,
      },
   
      {
        abb:'E',
        answer: "Whether the accounts agree to the underlying accounting records",
        correct: false,
      },
   
      
    ],
    explanation:
      "Whether the company complies with the Companies Act 2006 and whether the information in the strategic report/director’s report is consistent with the financial statements are both examples of explicit opinions.",
  },
  {
    id: 5,
    question:
      "Which one of the following is not an opinion that could be issued as part of an auditor’s report of a company’s financial statements?",
    answers: [

      {
        abb:'A',
        answer: "Qualified Opinion",
        correct: false,
      },
      {
        abb:'B',
        answer: "Adverse Opinion",
        correct: false,
      },
 
      {
        abb:'C',
        answer: "Disclaimer of Opinion",
        correct: false,
      },
      {
        abb:'D',
        answer: "Emphasis of Matter Opinion",
        correct: true,
      },
   
      
    ],
    explanation:
      "A qualified opinion is issued when the financial misstatements are materially misstated but not pervasive. An adverse opinion is issued when the financial misstatements are materially misstated and pervasive. A disclaimer of opinion is when sufficient appropriate audit evidence can’t be obtained, and it relates to a material and pervasive area of the financial statements",
  },
]

export const fourteen = [
  {
    id: 1,
    question:
      "Which one of the following is not an ICAEW fundamental principle of the ethical code?",
    answers: [

      {
        abb:'A',
        answer: "Integrity",
        correct: false,
      },
      {
        abb:'B',
        answer: "Independence",
        correct: true,
      },
     
      
      {
        abb:'C',
        answer: "Confidentiality",
        correct: false,
      },
      {
        abb:'D',
        answer: "Objectivity",
        correct: false,
      },
   
      
    ],
    explanation:
      "The fundamental principles of the ethical code include professional behaviour, integrity, professional competence and due care, confidentiality and objectivity.",
  },
  {
    id: 2,
    question:
      "Which one of the following is not one of the ICAEW Code of Ethics general sources of threats?",
    answers: [
  
      {
        abb:'A',
        answer: "Advocacy",
        correct: false,
      },
      {
        abb:'B',
        answer: "Familiarity",
        correct: false,
      },
     
      {
        abb:'C',
        answer: "Intimidation",
        correct: false,
      },
      {
        abb:'D',
        answer: "Management",
        correct: true,
      },
   
      
    ],
    explanation:
      "The sources of threats in the ICAEW Code of Ethics include self-interest, self-review, advocacy, familiarity and intimidation. The FRC Ethical Standard identifies a sixth threat – the management threat.",
  },
  {
    id: 3,
    question:
      "Mosby LLP is a 15-partner assurance firm who has been approached to take on the audit of the financial statements of Robin Ltd. In addition to the audit work, your firm has been asked to take on further non-audit work. For both, select the basis on which the engagements could be accepted or whether there are no safeguards to mitigate the threats.",
    answers: [
      {
        answerCondition:'To provide internal audit services'
      },
      {
        abb:'A',
        answer: "Do not accept",
        correct: false,
      },
      {
        abb:'B',
        answer: "Accept with safeguards",
        correct: true,
      },
      {
        abb:'C',
        answer: "Accept with no safeguards",
        correct: false,
      },
     
      {
        answerCondition:'To provide routine tax compliance work'
      },
      
      {
        abb:'D',
        answer: "Do not accept",
        correct: false,
      },
      {
        abb:'E',
        answer: "Accept with safeguards",
        correct: true,
      },
      {
        abb:'F',
        answer: "Accept with no safeguards",
        correct: false,
      },
   
      
    ],
    explanation:
      "Audit firms may not provide internal audit services for public interest entities. However,as Robin Ltd is unlisted and the non-audit work creates a self-review threat should the audit team rely on the work on the internal auditors, Mosby LLP should accept this non-audit work with safeguards. With the tax compliance work, there is a self-review and self-interest threat arising. However, should this be mitigated by safeguards, Mosby LLP can accept this non-audit work.",
  },
  {
    id: 4,
    question:
      "Hermione Cromwell is an ICAEW qualified accountant who has recently moved from practice into industry and reports directly to the Financial Director. The FD has prepared the financial statements and has asked Hermione to review for any glaring mistakes. Hermione notices that the financial statements are full of errors, the depreciation is not in line with their accounting policy and revenue received post year end has been included in this accounting period. Hermione confronts the  FD who tells her “not to worry about it” and “it’s what the shareholders want to see”. There is no internal complaints procedure.",
    answers: [
      {
        answerCondition:'Which one of the following is the most appropriate initial course of action for Hermione to take?'
      },
      {
        abb:'A',
        answer: "Resign",
        correct: false,
      },
      {
        abb:'B',
        answer: "Seek legal advice",
        correct: false,
      },
     
      {
        abb:'C',
        answer: "Contact the ICAEW telephone helpline",
        correct: true,
      },
     
  
      {
        abb:'D',
        answer: "Comply with the FD’s request",
        correct: false,
      },
   
      
    ],
    explanation:
      "In the first instance, Hermione should contact the ICAEW helpline for further advice on how to resolve the conflict before seeking legal consultation. As a last resort, Hermione should resign from her position.",
  },
  {
    id: 5,
    question:
      "Marshall LLP is a 12-partner assurance firm who has been asked to retender for the audit of the financial statements of Lilypad Ltd. The Managing Director of Lilypad Ltd has specified that if Marshall LLP wish to be successful, that the same engagement team from the prior year be recycled for the new audit as “they would be best placed to understand the company’s internal controls”. Select the three types of threat that the situation illustrates.",
    answers: [
     
      {
        abb:'A',
        answer: "Self-interest",
        correct: true,
      },
      {
        abb:'B',
        answer: "Self-review",
        correct: false,
      },
      {
        abb:'C',
        answer: "Familiarity",
        correct: true,
      },
      {
        abb:'D',
        answer: "Intimidation",
        correct: true,
      },
   
      {
        abb:'D',
        answer: "Management",
        correct: false,
      },
    ],
    explanation:
      "By the managing director threatening to not reappoint Marshall LLP for the next year audit unless their demands are met, this is an example of an intimidation threat. There may also be a self-interest threat arising ass Marshall LLP may rely on the audit fee. Finally, there is a familiarity threat arising due to the MD requesting the same audit team.",
  },
]