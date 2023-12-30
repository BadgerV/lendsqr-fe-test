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
![image](https://media.gettyimages.com/id/500247167/photo/lagos-nigeria.jpg?s=612x612&w=0&k=20&c=lDFhHI-jDw-9m0W-3065o2k6uwu5jtZcWokrAaVJ0es=)

![image](https://github.com/BadgerV/lendsqr-fe-test/assets/98065344/ab88c1f8-12de-4d95-9d3c-5ab955fce5ff)

![image](https://i.postimg.cc/j2YLxGwG/lendsqr-test-1.png)

![image](https://i.postimg.cc/d1yhKq12/lendsqr-test-2.png)

and for mobile responsiveness
![image](https://i.postimg.cc/9F8mpJG3/Screenshot-20231230-095141.png)

![image](https://i.postimg.cc/kXXMKkRF/Screenshot-20231230-094036.png)

![image](https://i.postimg.cc/5tvffJD1/Screenshot-20231230-095126.png)



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
