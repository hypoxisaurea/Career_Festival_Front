# front-end


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```
Career_Festival_Front
├─ career_festival_front
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ index.html
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ assets
│     │  ├─ 0109피그마
│     │  │  ├─ 1메인화면 - 행사목록 카테고리 들어간 후.png
│     │  │  ├─ 1메인화면 - 회원가입 or 로그인 후 바로 뜨는 홈화면.png
│     │  │  ├─ 2 DetailFestivalPage 행사 클릭한 화면(댓글창포함).png
│     │  │  ├─ 로그인 페이지.png
│     │  │  ├─ 회원가입1 페이지.png
│     │  │  ├─ 회원가입2 참가자 주최자 모달창.png
│     │  │  ├─ 회원가입3 주최자 페이지.png
│     │  │  └─ 회원가입4 참가자 페이지.png
│     │  └─ images
│     │     ├─ banner1.png
│     │     ├─ banner2.png
│     │     ├─ banner3.png
│     │     ├─ banner4.png
│     │     ├─ bannerleftarrow.png
│     │     ├─ bannerrightarrow.png
│     │     ├─ check-icon.png
│     │     ├─ checked_image.png
│     │     ├─ emptyStarIcon.png
│     │     ├─ length.png
│     │     ├─ login_kakao.png
│     │     ├─ login_naver.png
│     │     ├─ logo.png
│     │     ├─ search.png
│     │     ├─ setting.png
│     │     └─ unchecked_image.png
│     ├─ components
│     │  ├─ commentList
│     │  │  ├─ CommentList.jsx
│     │  │  └─ Join.jsx
│     │  ├─ contact
│     │  │  └─ Contact.jsx
│     │  ├─ enrollment
│     │  │  └─ Enrollment.jsx
│     │  ├─ eventDetail
│     │  │  ├─ EventDetail.jsx
│     │  │  └─ EventDetailStyle.jsx
│     │  ├─ footer
│     │  │  └─ Footer.jsx
│     │  ├─ header
│     │  │  └─ Header.jsx
│     │  ├─ home
│     │  │  ├─ Banner.jsx
│     │  │  ├─ Checkbox.jsx
│     │  │  ├─ Community.jsx
│     │  │  ├─ Diary.jsx
│     │  │  ├─ Filter.jsx
│     │  │  ├─ Filterkeyword.jsx
│     │  │  └─ Recommand.jsx
│     │  ├─ login
│     │  │  ├─ Login.jsx
│     │  │  └─ LoginStyle.jsx
│     │  ├─ qna
│     │  │  ├─ QnA.jsx
│     │  │  └─ QnAList.jsx
│     │  └─ signup
│     │     ├─ InterestArea.jsx
│     │     ├─ InterestAreaStyle.jsx
│     │     ├─ Organizer.jsx
│     │     ├─ OrganizerStyle.jsx
│     │     ├─ Participant.jsx
│     │     ├─ ParticipantStyle.jsx
│     │     ├─ Signup.jsx
│     │     └─ SignupStyle.jsx
│     ├─ db
│     │  └─ RecommandedEvents.json
│     ├─ fonts
│     │  ├─ Font.css
│     │  ├─ NotoSansKR-Black.woff
│     │  ├─ NotoSansKR-Bold.woff
│     │  ├─ NotoSansKR-Light.woff
│     │  ├─ NotoSansKR-Medium.woff
│     │  ├─ NotoSansKR-Regular.woff
│     │  └─ NotoSansKR-Thin.woff
│     ├─ index.css
│     ├─ index.js
│     ├─ pages
│     │  ├─ DetailFestivalPage.jsx
│     │  ├─ FestivalListPage.jsx
│     │  ├─ HomePage.jsx
│     │  ├─ LoginPage.jsx
│     │  └─ SignupPage.jsx
│     └─ utils
└─ README.md

```