# lendsqr

- lendsqr frontend development test, including dashboard, login page and user info page
- Demo Live at : https://segunmaru-faozan-lendsqr-fe-test.netlify.app/


### Technologies && Tools.
- ReactJs -[web framework]
- TypeScript - [adds optional static type-checking to Javascript]
- SCSS - [For styling]
- Redux Toolkit -[Enhance scalability and eliminate prop drilling with efficient state management]
- Vitest - [For components testing]
- Postman - [For mock server]


## Functionalities.
- Fetching api from a mock server.
- Functional pagination in the dashboard page.
- persistence [when a user refresh their browser, the data is still saved].
- Mobile responsiveness.

## Code Reviews && Style.

- All React components and functional components are written in the `.tsx` format.
- Test files are saved with a `.test.tsx` format.
- Styles are saved in a `.styles.scss` format.
- All statically typed types utilized in the application are located in the `types` folder.

```
const userInformation = {
  acc_no: "9731033085",
  bank_name: "First Bank",
  bvn: 38965847149,
  children: 0,
  date_joined: "Sep 28, 2018, 5:48 AM",
  email: "violefadian@gmail.com",
  facebook_username: "Viole Fadian",
  gender: "male",
  guarantor_email: "kimmitorricina@gmail.com",
  guarantor_name: "Kimmi Torricina",
  guarantor_phone_number: "09136890990",
  guarantor_relationship: "friend",
  id: 1,
  instagram_username: "@viole_fadian",
  lendsrq_id: "QOY158894",
  level_of_education: "Diploma",
  loan_amount: 108877,
  marital_status: "divorced",
  monthly_income: 131010,
  name: "Viole Fadian",
  office_email: "ktorricina0@telegraph.co.uk",
  organization: "Lendsqr",
  phone_number: "07068126153",
  residence: "2nd Floor",
  sector_of_employment: "Healthcare",
  status: "inactive",
  twitter_username: "@viole_fadian",
  user_tier: 2,
};
```
This is an example of the user data gotten from the postman mock server.

## Demo.
![lendsqr test — Mozilla Firefox 12_30_2023 8_52_41 AM](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/97ac8e23-a35e-4240-950e-4f55258ea0d7)

![lendsqr-test-1](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/ed9d5217-a4d7-44a6-adce-7e7c6a2a7db9)

![lendsqr-test-2](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/8c801977-0acd-4779-b176-f1fac6d20954)

![lendsqr-test-3](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/53c8f149-5882-493d-abfa-feb67831211d)

and for mobile responsiveness
![Screenshot_20231230-095141](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/600f00c8-9a0f-4d6d-8b37-b50c2453c6fa)

![Screenshot_20231230-095126](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/469b4a4e-416d-42cb-9dff-4b0efca0e09e)

![Screenshot_20231230-094036](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/f648931f-23b6-4ee0-89ab-298ae3ab78a5)



## Tests.

- components tests written in vitetest + typescript
- test coverage + tests

![tests](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/e86f0580-0952-4ba7-acf9-c53368d891be)

## Run Web App on Local Environment.

* git clone the repository.

```
  $ git clone https://github.com/BadgerV/lendsqr-fe-test.git
```

- open `lendsqr`.

```
  $ cd lendsqr
```

- install dependencies.
```
 $ npm install
```

- start web app.

```
 $ npm start
```

- run tests.

```
 $ npm run test
```

- check coverage.

```
 $ npm run coverage
```

## License.

Copyright Lendsqr 2023 [**MIT LICENSE**](/LICENSE)
