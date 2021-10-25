# Next.js

### **✅ json 파일 읽어오기**

```react
const conceptList = require('../../../public/data/concept.json')
```

`require` 을 사용하여 간단하게 사용할 수 있다. `parse` 안해도 바로 object 형태로 사용이 가능하다. 



### **✅ `className` 여러개 사용하는 방법**

```react
import classNames from 'classnames';
...
className={classNames({[styles.conceptitem]: true, [styles.active]: selectedItem === item})}
```

`react`에서는 공백으로 띄워서 여러개를 사용할 수 있지만, `next.js` 는 지원되지 않는다. 좀 괴상해보이는 모습이지만, 위 처럼 사용하면 조건부 스타일링이 가능하다.



### **✅ 함수형 컴포넌트에는 이벤트 함수를 사용할 수 없다.**

**❌ Bad**

```react
<ConceptItem selectedItem={selectedItem} onclick={() => clickItem()} item={ele} key={ ele.title }/>
```

**🟢 Good**

```react
<ConceptItem selectedItem={selectedItem} clickItem={clickItem} item={ele} key={ ele.title }/> // 부모
...
<div onClick={() => clickItem(item)}></div> // 자식
```

컴포넌트에 `onclickItem` 을 사용하면, 이를 `props` 로 인식한다. 이벤트 함수를 사용하기 위해서는 전체를 `div` 등의 html 태그로 묶거나, 자식 컴포넌트에 함수 자체를 `props` 내려서 사용해야 한다.



# React & Library

### ✅ project start

프로젝트 시작하기

```bash
npm creat-react-app <app name>
```




### ✅ import local image(resource)

```react
<StyledPeopleSayImg src={ `assets/peopleSay/${item.name}.png` }/>
```

react에서는 `image` 라는 태그를 사용하거나, 이미지의 경로를 import 하여 객체로 가져오는 것을 권장한다.

하지만 이렇게 하면 이미지를 동적으로 가져오는 것이 불가능하다. 예를 들면, 컴포넌트를 반복하면서 아이템을 보여주려고 할때, 반복되는 모든 아이템의 사진을 모두 `import` 해야하는 것이다.

이렇게 하지 않고, 이미지를 동적으로 가져오기 위해서는 `백틱` 을 사용해서 [Template literals ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 을 사용한다. 안타까운 점은, react에서는 이 방식을 권장하지 않기 때문에 경고문구를 뿜어낸다는 것이다. 바로 아래와 같은 메시지를 뱉어낸다.

```src\components\home\portfoliio\PortfolioItem.js
  Line 17:17:  img elements must have an alt prop, either with meang for decorative images  jsx-a11y/alt-text
```

이것말고 다른 방법을 찾지 못해서, 일단은 경고문구를 무시하면서 진행중이다.



### ✅ github page deploy

지금 하는 작업은 서버없이 프론트 + 정적 파일(json, assests)로만 구성하고 있다. 간단한 프론트 프로젝트를 배포하는 데 굳이 프리티어 써가면서 aws를 사용할 필요가 없다. `Netlify` 를 사용해도 좋지만, 이번에는 github page로 초초초초 간단하게 해봤다. 참고한 블로그는 [여기](https://dev-yakuza.posstree.com/ko/react/github-pages/)

#### 방법

1. github에 프로젝트를 올린다.

2. local에서 `gh-pages` 를 설치한다.

3. `scripts` 에 아래 내용을 추가 or 수정한다.

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. 맨위에 homepage를 `https://<내 id>.github.io/<내 레포 이름>` 으로 수정한다. 이 주소는 내 프로젝트 레포지토리에서 `setting > GitHub Pages` 에 있는 링크와 동일하다.  ex) `"homepage": "https://parkjisu6239.github.io/2021_Portfolio",`

5. 정적 리소스 base_url을 수정해야, 페이지에 정상적으로 랜더된다. 이를 위해 `router`를 정의한 컴포넌트(일반적으로 App.js) 로 가서 아래 처럼 수정한다.

   ```react
   import './App.css';
   ...
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   
   function App() {
     return (
       <BrowserRouter basename={process.env.PUBLIC_URL}>
         <div className="App">
           ...
         </div>
       </BrowserRouter>
     );
   }
   
   export default App;
   ```

6. 이후 terminal에서 `npm run develop` 를 하면, 내 레포지토리에 `gh-pages` 라는 이름으로 브랜치가 자동 생성되고, build 파일이 push 된다. 그리고 위에서 설정한 homepage 주소로 접속하면, 배포된 것을 볼 수 있다.



### ✅ Add style

react에서 스타일을 적용하는 방법은 꽤나 다양하다. 이번 프로젝트에서 사용한 방법은 크게 3가지로, 사실 정확히 뭐가 낫다거나 무엇이 옳다는 모르겠고, 이런 방법들이 있다는 것을 정리하고자 한다.

#### 1. vanilla(?) css

여느 프론트엔드 혹은 프레임워크 없이 html을 사용하는 것처럼, element에 `class` (react에서는 className)을 지정하고, 스타일시트(.css) 파일을 만들어서 적용하는 가장 간단한 방법. 클래스를 문자열로 지정하며, 여러개일 경우 띄어쓰기를 하면 되고, 백틱을 사용해서 조건부 클래스 지정도 가능하다.

- 장점: js와 css 분리가 가능하다. 사용이 쉽다.
- 단점: 동일한 이름의 class가 있다면, 이에 적용된 스타일이 중첩된다. 스코프를 고려해야하며, 그게 아니라면 이름을 unique 하게 짓는 것이 안전한다.



#### 2. module.css

1번의 단점을 보완하고자, 사용하는 방법인 것 같다. `style`도 모듈화하여 사용하는 것. 사용방법은 js 파일에서 아래와 같은 형식으로 import하고 사용한다. 클래스를 오브젝트 형태로 지정하며, 백틱을 사용해서 조건부 클래스 지정도 가능하다.

```react
import styles from './NavBar.module.css'

export default function sample() {
    return (
        <div className={styles.title}>
            <div className={styles.hi}>
      			Hi
        	</div>
        </div>
    )
}
```

- 장점 : 서로 다른 컴포넌트에서 같은 이름의 클래스를 사용해도 중첩되지 않는다. module.css를 import한 해당 컴포넌트에만 적용된다. js와 css를 별도로 관리 할 수 있다.
- 단점 : 실제 랜더될때 이름이 다르다 실제 이름은 `Concept_title__2xS7g` 이런식으로 생긴다. 그래서 쿼리셀렉터를 사용하는 경우(안쓰는게 좋음) 어렵다.



#### 3. styled component

아마 react에서 가장 많이? 사용하는 듯한 방법이다. css를 js로 할당한다. 그래서 css도 모두 js 파일에 작성되어 있어, 컴포넌트당 파일은 단 한개만 가질 수 있다. 사용법은 아래와 같이 변수를 생성하듯이 사용한다. styled.<태그 이름>으로 사용할 수 있고, element를 custom 하는 느낌이다. 자식 요소나 기타 선택자도 사용할 수 있으며, 자기자신을 `&`로 두고 사용한다. 미디어 쿼리도 사용 가능하다.

```react
import styled from 'styled-components';

export default function NavBar() {
    const [isShow, setIsShow] = useState(false) 

    return (
        <nav>
            <StyledDropdown/>
        </nav>
    )
}

const StyledDropdown = styled.div`
    position: absolute;
    top: 80px;
    right: 10px;
    z-index: 10;
    height: 0%;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    transition: all 1s ease;
    border: 0px solid grey;
    overflow: hidden;
    & > svg {
        width: 100%;
        height: 42px;
        color: red;
        cursor: pointer
    }
    & > * {
        padding: 10px;
        border-bottom: 1px solid grey;
    }
    & > div:hover {
        color: rgb(84, 105, 190);
    }
    & > div:last-child {
        padding: 10px;
        border-bottom: none;
    }
    &.showMenu {
        height: 360px;
        border: 1px solid grey;
    }
`;
```

- 장점 : 하나의 js파일에서 css도 관리할 수 있다. js로 css를 제어한다. props를 내릴 수 있어서 함수처럼 사용이 가능하고 데이터에 따라 동적으로 움직 일 수 있다.
- 단점: style 관련 설정이 많아지면, js가 지저분해 보인다. 어디까지나 이 파일은 js 파일이라서 css 자동완성이 안된다.



#### 결론!

- 뭘 써야만 한다는 정답은 없지만, 하나로 통일하는 것이 보기 좋을 것 같긴하다. 난 3개 다 쓰고있지만...

- 여러 컴포넌트에서 자주 사용하는 element이며(예를 들면 button) 동일한 스타일을 적용하고자 한다면, 1번을 사용하여 가장 상위 파일(App.js)에 일괄 적용이 편하다.
  - 물론 이건 3번을 사용해서 global하게 적용될 스타일만 모아두고 export & import 하는 방식으로 사용할 수도 있다.
- 내부에 들어갈 스타일은 다르지만, 클래스명을 동일하게 하고 싶은 경우(header, title, description 등등 흔한 네이밍)은 2번을 사용하는 것이 좋다.
- 컴포넌트를 반복적으로 랜더하고, 각 데이터마다 플롯은 같지만 props로 일부 다른 스타일을 적용해야 할 경우 3번을 사용하는 것이 좋다.
  - data에 색깔이 지정되어 있고, 이 색깔을 그 element의 배경색으로 지정하고자 하는 경우
  - title의 길이에 따라 색깔을 다르게 해야한다거나, 조건부 스타일이 필요한 경우
