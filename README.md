# My Wayfinder
### A project with [Grandparents Plus](https://www.grandparentsplus.org.uk/)

An accessible, decision tree web app built to help grandparents and other carers visiting the Grandparents Plus charity's website recognize their status as a 'Kinship Carer', guide them to relevant resources, and provide information for an advice callback from the charity.

### View the development site here: http://my-wayfinder.herokuapp.com/

### How to run locally:

#### 1. Clone the repo: 
```
$ git clone https://github.com/fac-13/GP_ProjectBernadette.git
   ```
#### 2. Set environmental variables:

Create a `config.env` file in your root folder.
Add the following variables: 

```
ACCT_EMAIL= [ email you want to send emails from ]
ACCT_PASSWORD= [ password variable ]
EMAIL_TO= [ email where you want to receive form message (can be the same account as the sending email) ]
```

#### 3. Run the site locally:

You will need to run two scripts concurrently for the server and React app respectively.

To build and run the Server:
```
$ npm i
$ npm run start
   ```
To build and run the React App, open a new terminal window:
```
$ cd client
$ npm i
$ npm run build 
$ npm run start
   ```
#### 4. Testing:

```
$ cd client
$ npm run test
```

#### Tech stack:

- React with styled-components
- Parcel
- Jest
- NodeJS Express server for form handling using Nodemailer package
- Hosting: Heroku

## The Challenge

There are an estimated 200,000 children living in kinship care in the UK due to various circumstances that result in the need for kinship care, yet these kinship carers have significant unmet support needs. 62% of carers say they need more advice and information.

Grandparents Plus wanted a digital platform that would enable them to reach more carers with appropriate information by leveraging their exisiting online resources and alleviating pressure on their telepone helpline.

## Our Solution

After a one day Design Thinking workshop with the Product Owner and advice expert from Grandparents Plus, we decided to create **My Wayfinder**, a decision tree app to help users understand jargon and find relevant resources more quickly. The application will also provide useful information about their personal circumstances to get the most out of an advice call back.

Aims of the solution:

- Simple to use and accessible
- Identify the carer's circumstances and if they are a 'kinship carer'
- Signpost the carer to relevant information on the website
- Should the carer want more advice, send the carer's contact info and other details to the advice service for a call back
- Adhere to the Grandparents Plus brand guidelines

---

#### MVP Target User

Bernadette is a "confused newbie" visiting the website for the first time. She wants to better understand her situation and is not familiar with jargon such as "kinship carer," meaning she will overlook key information relevant to her.

#### User Journey

Bernadette is prompted to answer questions to ascertain whether or not she is a kinship carer, and is given the option receive a call from a member of the advice team.

#### User Stories

As a user, Bernadette can:

- See a popup on the website that grabs her attention and leads her to My Wayfinder.
- Can click a button on the popup and be taken to a new screen to begin answering questions.
- See and click on simple option answers to help her answer each question.
- Scroll back and change her answer to any of the questions.
- Receive a link to further relevant information on the GP website.
- Be presented with an option to “book” a phone call from the GP advice service if she requires more advice.
- Submit a form with her answers and contact information to receive an advice call back.
- Understand how her personal infomation will be stored and used by GP.

## Prototype

https://invis.io/37JYT43QNUC


 ![](https://i.imgur.com/wGMgYzh.png)
 
How the App might be integrated into the Grandparents Plus website: 
 
![](https://i.imgur.com/RD3c7Cr.png)


## Decision Tree Flow Chart


![](https://i.imgur.com/OUMheGt.png)
![](https://i.imgur.com/N6VCddy.png)

## Team Roles

- Jennah - QA
- Phat - UX
- Tammy - DevOps
- Vanessa - Scrum Master
